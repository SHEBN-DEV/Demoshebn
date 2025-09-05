{/*Para subir imagen de perfil AUN NO FUNCIONA por corregir Error al subir imagen: "new row violates row-level security policy" */}

import { useState } from 'react';
import { supabase } from '../SupabaseClient';

const UploadProfileImage = () => {
    
    const [imageUrl, setImageUrl] = useState('');
    const [uploading, setUploading] = useState(false);

    const handleUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        setUploading(true);

        // Obtener usuario autenticado
        const {data: userData} = await supabase.auth.getUser();
        const userId = userData?.user?.id;

        if (!userId) {
            console.error('Usuario no autenticado');
            setUploading(false);
            return;
        }

        // Definir ruta del archivo
        const filePath = `${userId}/${file.name}`;

        
console.log('userId:', userId);
console.log('filePath:', filePath);


        //Subir imagen con sobrescritura permitida
        const { error: uploadError } = await supabase.storage
            .from('avatars')
            .upload(filePath, file, { upsert: true });

        if (uploadError) {
            console.error('Error al subir imagen:', uploadError.message);
            setUploading(false);
            return;
        }
        
        // Obtener URL firmada (bucket privado)
        const { data: publicUrlData, error: signedUrlError} = supabase.storage
            .from('avatars')
            .createSignedUrl(filePath, 3600);

        if (signedUrlError) {
            console.error('Error al generar URL firmada', signedUrlError.message);
            setUploading(false);
            return;
        }

        const signedUrl = publicUrlData?.signedUrl;
        setImageUrl(signedUrl);

        // Guardar o actualizar perfil con la nueva URL
        const { error: upsertError } = await supabase
            .from('edit_profile')
            .upsert([{ user_id: userId,  avatar_url: signedUrl }], {
                onConflict: 'user_id', //para que Supabase sepa que debe actualizar si ya existe una fila con ese user_id.
            });

            if (upsertError) {
            console.error('Error al guardar el perfil:', upsertError.message);
            setUploading(false);
            return;
        }
        
        setUploading(false);

    };


    return (
        <div className="flex flex-col items-center space-y-4">
            <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                disabled={uploading}
                className="text-white"
            />

            {uploading && (<p className="text-[#ff29d7]">Subiendo imagen...</p>)}

            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt="Avatar del usuario"
                    style={{ width: '150px', height: '150px', borderRadius: '50%' }}
                />
            ) : (
                <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" />
                    </svg>
                </div>
            )}

        </div>
    );
};

export default UploadProfileImage;
