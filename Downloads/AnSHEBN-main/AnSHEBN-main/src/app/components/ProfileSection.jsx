import React, { useState, useEffect } from "react";

const ProfileSection = ({ title, name, placeholder, onUpdate, defaultValue }) => {

    const [value, setValue] = useState(defaultValue || "");
    const [successMessage, setSuccessMessage] = useState("");

    
    useEffect(() => {
        setValue(defaultValue || "");
    }, [defaultValue]);

    
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleClick = async () => {
        if (value.trim() === "") return;

        await onUpdate(value); // espera a que se guarde
        setSuccessMessage("¡Guardado exitosamente!");

        setTimeout(() => {
            setSuccessMessage("");
        }, 3000);
    };

    return(
        <div className="w-5/6 flex flex-col space-y-2">
            <p className="text-lg">{title}</p>
            
            <textarea
                className="w-full h-32 bg-[#2a2a2a] rounded-xl p-4 focus:outline-none"
                name={name}
                placeholder={placeholder}
                rows={6}
                value={value}
                onChange={handleChange}
            ></textarea>
            
            <div className="flex justify-end">
                <button
                    className="px-4 py-2 bg-black border border-white rounded-3xl text-sm font-medium text-white hover:bg-[#ff29d7] hover:border-[#ff29d7] transition-colors"
                    onClick={handleClick} >
                    UPDATE
                </button>
            </div>
            
            {successMessage && (
                <p className="text-green-400 text-sm mt-2 text-right">{successMessage}</p>
            )}

        </div>
    );
};

export default ProfileSection;