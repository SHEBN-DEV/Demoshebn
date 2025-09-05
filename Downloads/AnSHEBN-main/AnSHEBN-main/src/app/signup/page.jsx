"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';  //verificacion de campos
import { useRouter } from 'next/navigation';
import { supabase } from '../SupabaseClient';
import InputField from '../components/inputField';
import PasswordField from '../components/PasswordField';


const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState('success'); 

    const router = useRouter();

    const handleSignUpSubmit = async (data) => {
        const {FullName, UserName, email, Password} = data;
        
        //Crear usuario en supabase con autenticacion
        const {data: signUpData, error: signUpError} = await supabase.auth.signUp({
            email: email,            
            password: Password,
        });

        if (signUpError) {
            console.error("Error registering:", signUpError.message);
            alert("Error: "+ signUpError.message);
            return;
        }

        const user = signUpData.user;

        // Validar que user existe antes de continuar
        if (!user) {
            setToastMessage("No se pudo crear el usuario. Intenta nuevamente.");
            setToastType("error");
            setShowToast(true);
            return;
        }

        //Inserta datos en la tabla profiles
        const {error: profileError} = await supabase
        .from('profiles')
        .insert([
            {
            id: user.id,
            full_name: FullName,
            user_name: UserName,
            email: email,
            },
        ]);

        
        //Verificar si se guardo el perfil
        if (profileError) {
            setToastMessage("Error saving profile:" + profileError.message);
            setToastType("error");
            setShowToast(true);
        } else { 
            setToastMessage("Account created successfully! Redirecting...");
            setToastType("success");
            setShowToast(true);

            setTimeout(() => {
                router.push('/login'); //Redireccion automatica
            }, 2000); 
        }
    };

    return (
        <div className="min-h-screen w-full bg-[#1a1718] text-white flex flex-col items-center">
            
            <form onSubmit={handleSubmit(handleSignUpSubmit)} className="w-full md:w-1/2 py-12 px-6 flex flex-col gap-6 justify-center items-center">
                <div className="flex flex-col gap-8 justify-center items-center text-center">
                    <p className="text-4xl font-semibold">
                        Sign Up Account
                    </p>
                    <p className='text-base'>
                        Enter your personal data to create your account.
                    </p>
                </div>

                <div className='w-full'>
                    
                    <div className="w-full flex flex-col md:flex-row gap-5">
                        <InputField label="Full Name" name="FullName" register={register} rules={{ required: "Full name is required"}} error={errors.FullName} />
                        <InputField label="User Name" name="UserName" register={register} rules={{ required: "User name is required"}} error={errors.UserName} />
                    </div>
                </div>

                <div className="w-full flex flex-col gap-6">
                    
                    {/* Email */}
                    <InputField label="Email" name="email" type="email" register={register} 
                    rules={{
                        required: "Email is required",
                        pattern: {
                            value:  /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Invalid email address",
                        },
                    }} 
                    error={errors.email} />

                    {/* Contrasena */}
                    <PasswordField label="Password" name="Password" register={register} 
                    rules={{required: "Password is required",
                        minLength: {value: 8, message: "Minimiun 8 characters"}}}
                        error={errors.Password} />
                    
                </div>

                <div className="w-full flex justify-end py-5 pr-8">
                    <p>
                        Already A Member?{" "}
                        <a href="/login" className="text-[#ff29d7] hover:text-[#de69c7]">Log In</a>
                    </p>
                </div>

                <div className="w-full">
                    <button type="submit" className="w-full bg-black border border-white rounded-2xl py-3 font-semibold hover:bg-[#ff29d7] hover:text-white">
                        CREATE AN ACCOUNT
                    </button>
                </div>
            </form>

            {showToast && (
                <div className={`fixed top-5 right-5 px-4 py-2 rounded shadow-lg z-50 transition-all duration-300 
                ${toastType === 'success' ? 'bg-[#ff29d7]' : 'bg-red-500'} text-white`}>
                    {toastMessage}
                </div>
            )}

        </div>       
    );
};

export default SignUp;