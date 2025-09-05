import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';
import { supabase } from "../SupabaseClient";
import InputField from "./inputField";


const PersonalData = () => {

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm();

    // Cargar datos del usuario al montar el componente
    useEffect(() => {
        const fetchUserData = async () => {
            const {
                data: { user },
                error: authError,
            } = await supabase.auth.getUser();

            if (authError || !user) {
                console.error("No se pudo obtener el usuario:", authError);
                return;
            }

            // Obtener fullname desde profiles
            const { data: userProfile, error: userProfileError } = await supabase
            .from("profiles")
            .select("full_name")
            .eq("id", user.id)
            .single();

            if (userProfileError) {
                console.error("Error al obtener fullname:", userProfileError);
            } else if (userProfile) {
                setValue("FullName", userProfile.full_name);
            }

            const { data, error } = await supabase
            .from("edit_profile")
            .select("*")
            .eq("user_id", user.id)           
            .maybeSingle();


            if(error) {
                console.error("Error al obtoner datos del perfil:", error);            
            } else if (!data) {
                console.warn("No se encontraron datos del perfil para este usuario.");
            } else {
                //Cargar datos en el formuario
                setValue("PhoneNum", data.Phone);
                setValue("Department", data.department);
                setValue("country", data.country);
                setValue("stateCountry", data.state_country);
                setValue("city", data.city);
                setValue("PostCode", data.postcode);
            }
            
            };

            fetchUserData();
    }, [setValue]);

    const handleDataSubmit = async (data) => {
        const {FullName, PhoneNum, Department, country, stateCountry, city, PostCode} = data;
        
        // Asegúrate de tener el user_id
        const {
            data: { user },
            error: authError,
        } = await supabase.auth.getUser();

        if (authError || !user) {
            console.error("No se pudo Obtener el usuario:", authError);
            return;
        }

        
        // Actualizar fullname en profiles
        const { error: updateFullNameError } = await supabase
            .from("profiles")
            .update({ full_name: FullName })
            .eq("id", user.id); // Asegúrate que 'id' en profiles corresponde al ID del usuario

        if (updateFullNameError) {
        console.error("Error al actualizar full_name:", updateFullNameError);
        alert("Hubo un error al guardar el nombre completo.");
        }

        //Inserta datos en la tabla edit_profile
        const {error: updateError } = await supabase
        .from("edit_profile")
        .update({
            Phone: PhoneNum,
            department: Department,
            country: country,
            state_country: stateCountry,
            city: city,
            postcode: PostCode,
            updated_at: new Date().toISOString(), 
            })
        .eq("user_id", user.id); 
        

        if (updateError) {
            console.error("Error a insertar datos:", updateError)
            alert("Hubo un error al guardar los cambios");
        } else {
            console.log("Datos guardados correctamente");
            alert("Datos actualizados con éxito");
        }
    };

    
    return(
        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit(handleDataSubmit)} className="w-full md:w-5/6 py-12 flex flex-col gap-6 justify-center items-center">
                
                <div className='w-full grid grid-cols-2 gap-8'>
                    <div className="w-full col-span-2">
                        <InputField type="text" label="FullName" name="FullName" register={register} rules={{ required: "First name is required"}} error={errors.FullName} />
                    </div>
                    <InputField type="number" label="Phone Number" name="PhoneNum" register={register} rules={{ required: "Phone Number is required"}} error={errors.PhoneNum}/>
                    <InputField type="text" label="Department" name="Department" register={register} rules={{ required: "Department is required"}} error={errors.Department}/>

                    <InputField 
                        type="text" 
                        label="Country" 
                        name="country" 
                        register={register} 
                        rules={{ required: "Country is required"}} 
                        error={errors.country}
                    />
                   
                    <InputField 
                        type="text" 
                        label="State/Province" 
                        name="stateCountry" 
                        register={register} 
                        rules={{ required: "State/Province is required"}} 
                        error={errors.stateCountry}
                    />
                    
                
                    <InputField 
                        type="text" 
                        label="City" 
                        name="city" 
                        register={register} 
                        rules={{ required: "City is required"}} 
                        error={errors.city}
                    />
                    
                    <InputField type="text" label="PostCode" name="PostCode" register={register} rules={{ required: "PostCode is required"}} error={errors.PostCode}/>
                </div>
                
                <div className="w-full">
                    <button type="submit"
                        className="px-4 py-2 bg-black border border-white rounded-3xl text-sm font-medium text-white hover:bg-[#ff29d7] hover:border-[#ff29d7] transition-colors">
                        UPDATE
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PersonalData;