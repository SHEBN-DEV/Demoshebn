import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import PrivacySection from "./PrivacySection";


const EditPrivacy = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const handlePrivacySubmit = async (data) => {}

    {/* Estados de visibilidad  */}
    const [showChangeUsername, setShowChangeUsername] = useState(false);
    const [showChangeEmail, setShowChangeEmail] = useState(false);
    const [showChangePassword, setShowChangePassword] = useState(false);

    const toggleChangeUsername = () => {
        setShowChangeUsername(!showChangeUsername);
    };

    const toggleChangeEmail = () => {
        setShowChangeEmail(!showChangeEmail);
    };

    const toggleChangePassword = () => {
        setShowChangePassword(!showChangePassword);
    };

    return(
        <div className="w-full flex justify-center items-center ">
            <form onSubmit={handleSubmit(handlePrivacySubmit)} className="w-full flex flex-col gap-6 justify-center items-center">
            
            <div className="w-5/6 grid grid-cols-1 gap-8 my-8">
                <PrivacySection
                    title="User Name"
                    value="mariatorre5"
                    showForm={showChangeUsername}
                    toggleForm={toggleChangeUsername}
                    fields={[
                        { label: "Current User Name", name: "CurrentUser", rules: { required: "Current User name is required" } },
                        { label: "New User Name", name: "NewUser", rules: { required: "New User name is required" } },
                    ]}
                    errors={errors}
                    register={register}
                />

                <PrivacySection
                    title="Email"
                    value="mariatorre5@gmail.com"
                    showForm={showChangeEmail}
                    toggleForm={toggleChangeEmail}
                    fields={[
                        { label: "Current Email", name: "CurrentEmail", rules: { required: "Current Email is required" } },
                        { label: "New Email", name: "NewEmail", rules: { required: "New Email is required" } },
                    ]}
                    errors={errors}
                    register={register}
                />

                <PrivacySection
                    title="Password"
                    value="********"
                    showForm={showChangePassword}
                    toggleForm={toggleChangePassword}
                    fields={[
                        { label: "Current Password", name: "CurrentPassword", rules: { required: "Current Password is required" } },
                        { label: "New Password", name: "NewPassword", rules: { required: "New Password is required" } },
                    ]}
                    errors={errors}
                    register={register}
                />
            </div>
               
                
                <div className="w-full mb-10">
                    <button type="submit"
                        className="px-4 py-2 bg-black border border-white rounded-3xl text-sm font-medium text-white hover:bg-[#ff29d7] hover:border-[#ff29d7] transition-colors cursor-pointer">
                        UPDATE
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditPrivacy;