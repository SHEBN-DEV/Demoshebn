"use client"

import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import CardProfile from "../components/CardProfile";
import PersonalData from "../components/PersonalData";
import EditDocuments from "../components/EditDocuments";
import EditPrivacy from "../components/EditPrivacy";



const editProfile = () => {
    const [activeSection, setActiveSection] = useState('personal'); // Estado para controlar qué sección mostrar

    const renderSection = () => {
        switch(activeSection) {
            case 'personal':
                return <PersonalData />;
            case 'documents':
                return <EditDocuments />;
            case 'privacy':
                return <EditPrivacy />;
            default:
                return <PersonalData />;
        }
    };

    return(
        <div className="min-h-screen bg-black text-white">
                        
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
                        
                        {/* Secciones a editar */}
                        <div className="flex-1 flex flex-col items-center space-y-6">
                            <div className="w-5/6 bg-black rounded-xl"> 
                                <div className="flex items-center justify-around border-b-1 border-gray-500">
                                    <button 
                                        onClick={() => setActiveSection('personal')}
                                        className={`cursor-pointer ${activeSection === 'personal' ? 'text-[#ff29d7] border-b-1 border-[#ff29d7] py-4' : 'text-white py-4'}`}
                                    >
                                        Personal Data
                                    </button>
                                    <button 
                                        onClick={() => setActiveSection('documents')}
                                        className={`cursor-pointer ${activeSection === 'documents' ? 'text-[#ff29d7] border-b-1 border-[#ff29d7] py-4' : 'text-white py-4'}`}
                                    >
                                        Documents
                                    </button>
                                    <button 
                                        onClick={() => setActiveSection('privacy')}
                                        className={`cursor-pointer ${activeSection === 'privacy' ? 'text-[#ff29d7] border-b-1 border-[#ff29d7] py-4' : 'text-white py-4'}`}
                                    >
                                        Privacy
                                    </button>
                                </div>

                                {renderSection()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default editProfile;