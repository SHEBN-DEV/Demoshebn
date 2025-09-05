"use client";

import UploadProfileImage from "../components/UploadProfileImage";

const UploadImagePage = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">Sube tu imagen de perfil</h1>
                <UploadProfileImage />
            </div>
        </div>
    );
};

export default UploadImagePage;
