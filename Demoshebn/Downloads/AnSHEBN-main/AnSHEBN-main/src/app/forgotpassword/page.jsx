"use client"

import React from "react";
import { useForm } from "react-hook-form"; //Validacion de campos
import InputField from "../components/inputField";
import Link from "next/link";


const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const handleForgotPasswordSubmit = (data) => {
        console.log(data);
        // Aquí iría la lógica para recuperar la contraseña
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-[#1a1718] text-white bg-[url(/images/home/artboard-12.png)] bg-size-[1400px_300px] bg-bottom bg-no-repeat">
            <div className="w-full md:w-1/2 py-12 px-8 flex flex-col justify-center items-center gap-8">
                <div className="rounded-full border-4 border-white p-8">
                    <img src="/images/pages/artboard-37.png" alt="lock" className="w-18 h-18" />
                </div>

                <p className="text-xl font-medium">Trouble logging in</p>
                <p className="text-base text-center">Enter your email and we’ll send you a link to get back into your account.</p>

                <form onSubmit={handleSubmit(handleForgotPasswordSubmit)} className="w-full flex flex-col gap-6 justify-center items-center">
                    <InputField label="Email" name="email" type="email" register={register}
                    rules={{
                        required: "Email is required",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address",
                        },
                    }}
                    error={errors.email} />
                    
                    <button type="submit" className="w-3/5 bg-black border border-white rounded-2xl py-3 font-semibold hover:bg-[#ff29d7]">
                        SEND LOGIN LINK
                    </button>
                </form>

                <div className="flex items-center gap-8 w-full justify-center">
                    <div className="w-full border-b border-white"></div>
                    <p className="text-xl">OR</p>
                    <div className="w-full border-b border-white"></div>
                </div>

                <p>Create new account</p>
                <Link href="/login" className="w-full flex justify-center">
                    <button type="button" className="w-2/5 bg-black border border-white rounded-4xl py-3 font-semibold hover:bg-[#ff29d7]">Back to login</button>                       
                </Link>

            </div>
            
        </div>
    );
};

export default ForgotPassword;