"use client"

import React, { useState, useEffect }  from "react";
import { supabase } from "../SupabaseClient";
import Sidebar from "../components/Sidebar";
import CardProfile from "../components/CardProfile";
import ProfileSection from "../components/ProfileSection";


const EditInfo = () => {
    const [userId, setUserId] = useState(null);
    const [profileData, setProfileData] = useState({ experience: "", about: "" });

    useEffect(() => {
        const fetchUserAndProfile = async () => {
             // usuario autenticado desde Supabase Auth.
            const {
                data: { user },
                error: userError,
            } = await supabase.auth.getUser();

           
            if (user) {
                setUserId(user.id);

                //Se consulta la tabla edit_profile para obtener los datos.
                const { data: profile, error: profileError } = await supabase
                    .from("edit_profile")
                    .select("experience, about")
                    .eq("user_id", user.id)
                    .single();

                if (profile) {
                    setProfileData({
                        experience: profile.experience || "",
                        about: profile.about || "",
                    });
                } else if (profileError && profileError.code !== "PGRST116") {
                    console.error("Error al obtener perfil:", profileError.message);
                }
            } else {
                console.error("No se pudo obtener el usuario:", userError?.message);
            }
        };

        fetchUserAndProfile();
    }, []);

    //Función para guardar o actualizar datos
    const saveProfileField = async (user_id, field, value) => {
        try {
            //Esta función guarda o actualiza campos en la tabla
            const { data: existing, error: fetchError } = await supabase
                .from("edit_profile")
                .select("id")
                .eq("user_id", user_id)
                .single();

            if (fetchError && fetchError.code !== "PGRST116") {
                console.error("Error al buscar perfil:", fetchError.message);
                return;
            }
            
            //Verifica si ya existe un registro para ese user_id.
            let response;
            if (existing) {
                response = await supabase
                    .from("edit_profile")
                    .update({ [field]: value, updated_at: new Date().toISOString() })
                    .eq("user_id", user_id);
            } else {
                response = await supabase
                    .from("edit_profile")
                    .insert([{ user_id, [field]: value, updated_at: new Date().toISOString() }]);
            }

            if (response.error) {
                console.error("Error al guardar:", response.error.message);
            } else {
                console.log("Datos guardados correctamente");
                setProfileData((prev) => ({ ...prev, [field]: value }));
            }
        } catch (error) {
            console.error("Error de red:", error);
        }
    };

    //para manejar el guardado de cada campo.
    const handleExperienceUpdate = async (value) => {
        if (!userId) return;
        await saveProfileField(userId, "experience", value);
    };

    const handleAboutUpdate = async (value) => {
        if (!userId) return;
        await saveProfileField(userId, "about", value);
    };


    return(
        <div className="max-h-screen bg-black text-white">
                        
            <div className="flex">
                {/* Sidebar izquierdo */}
                <Sidebar />

                {/* Contenido principal */}
                <div className="w-full">
                    {/* Fondo degradado */}
                    <div className="w-full h-45 bg-gradient-to-r from-[#090909] to-[#ff29d7]"></div>
                    
                    {/* Contenido del perfil */}
                    <div className="flex -mt-16">
                        
                        {/* Card del perfil */}
                        <CardProfile />
                       
                        {/* Secciones de información */}
                        <div className="flex-1 flex flex-col items-center my-20 space-y-6">
                            <ProfileSection
                                title="Experience"
                                name="experience"
                                placeholder="Write your experience" 
                                onUpdate={handleExperienceUpdate}
                                defaultValue={profileData.experience}
                            />

                            <ProfileSection
                                title="About you"
                                name="about"
                                placeholder="Write about you"
                                onUpdate={handleAboutUpdate} 
                                defaultValue={profileData.about}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditInfo;