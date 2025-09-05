"use client"

import { useEffect, useState } from "react";
import { supabase } from "../SupabaseClient";
import { useRouter } from "next/navigation";

const CardProfile = () => {

    const router = useRouter();
    const [profile, setProfile] = useState(null);
    const [profileEdit, setProfileEdit] = useState(null);

    const handleRedirect = () => {
        router.push("");
    }    

    useEffect(() => {
        const fetchProfile = async () => {
            // Obtener el usuario autenticado
            const {
                data: { user },
                error: userError,
            } = await supabase.auth.getUser();

            if (userError || !user) {
                console.error("No hay usuario autenticado", userError);
                return;
            }

            // Obtener el perfil desde la tabla profiles
            const { data, error } = await supabase
            .from("profiles")
            .select("*")
            .eq("id", user.id)
            .single();
    
            if(error) {
                console.error("Error fetching profile:", error);
            }else {
                setProfile(data);
            }

            // Obtener el perfil desde la tabla edit_profile
            const { data: editData, error: editError  } = await supabase
            .from("edit_profile")
            .select("department")
            .eq("user_id", user.id)
            .single();
    
            if(error0) {
                console.error("Error fetching edit_profile:", editError);
            }else {
                setProfileEdit(editData);
            }
        };
    
        fetchProfile();
    }, []);
    

    return(
        <div className="w-1/5 ml-8">
            <div className="w-full h-full bg-black rounded-t-4xl shadow-lg shadow-white flex flex-col items-center space-y-6 py-6">
                
                {/* Cargar Imagen del perfil */}
                <div className="relative">
                    <img className="w-24 h-24 rounded-full object-cover" src={profile?.avatar_url || "/images/profile/woman.jpg"} alt="Photo" />
                    <button onClick={handleRedirect}
                        className="absolute bottom-0 right-0 w-8 h-8 flex items-center justify-center bg-[#ff29d7] rounded-full border-4 border-black">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 fill-black">
                            <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                            <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {/* Imformacion de usuario */}
                <div className="text-center">
                    <p className="text-2xl font-bold">{profile?.full_name || "Name"}</p>
                    <p className="text-base">{profile?.user_name || "UserName"}</p>
                    <p className="text-lg">{profileEdit?.department || "Department"}</p>
                </div>

                <a href="/editInfo" className="text-lg text-white hover:text-[#ff29d7] font-semibold hover:underline transition-colors">Edit my info</a>
            </div>
        </div>
    );
};

export default CardProfile;