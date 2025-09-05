"use client";

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"; //verificacion de campos
import { supabase } from '../SupabaseClient'; //Conexion con base de datos
import InputField from "../components/inputField";
import PasswordField from "../components/PasswordField";


const Login = () => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    const [loading, setLoading] = useState(false);

    const handleLoginSubmit = async (data) => {
        setLoading(true);
        
        //Buscar el email asociado al userName
        const{ data: userData, error: userError } = await supabase
        .from("profiles")
        .select("email")
        .eq("user_name", data.userName)
        .single();

        if (userError || !userData) {
            setError("userName", {message: "User not found" });
            setLoading(false);
            return;
        }

        //Iniciar sesión con el email encontrado
        const { error: loginError } = await supabase.auth.signInWithPassword({
            email: userData.email,
            password: data.password,
        })

        if (loginError) {
            setError("password", { message: "Invalid password" });
            setLoading(false);
            return;
        } else {
            router.push("/profileFriends"); //Direccionar a la ruta protegida
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#1a1718] text-white">
            <form 
                onSubmit={handleSubmit(handleLoginSubmit)} 
                className="w-full md:w-1/2 py-12 px-6 flex flex-col gap-6 justify-center items-center">
              
              <div className="text-center">
                <p className="text-4xl font-semibold">Login</p>  
              </div>

            {/* Inicio sesion Google u otro 
              <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-center">
                    <button type="button" className="border border-white rounded-3xl px-4 py-2 flex items-center">
                        <img src="/images/pages/artboard-26.png" alt="Google" className="w-5 h-5 mr-2" />Google    
                    </button>
                    <button type="button" className="border border-white rounded-3xl px-4 py-2 flex items-center">
                        <img src="/images/pages/artboard-26.png" alt="Google" className="w-5 h-5 mr-2" />Google 
                    </button>
                </div>
           
                <div className="flex items-center gap-4 w-full justify-center">
                    <div className="w-1/4 border-b border-white"></div>
                    <p>Or</p>
                    <div className="w-1/4 border-b border-white"></div>
                </div>
             */}

                <div className="w-full flex flex-col gap-6">
                    <InputField 
                    label="User Name"
                    name="userName"
                    register={register}
                    rules={{ required: "User name is required" }}
                    error={errors.userName}
                    />
                    <PasswordField 
                    label="Password"
                    name="password"
                    register={register}
                    rules={{ required: "Password is required "}}
                    error={errors.password}
                    />
                </div>

                <div className="w-full flex flex-col md:flex-row justify-between items-center">
                    <div className="flex items-center gap-2">
                        <input type="checkbox" name="remember" id="remember" className="accent-[#ff29d7]" />
                        <label htmlFor="remember" className="text-sm">Remember Me</label>
                    </div>
                    <a href="/forgotpassword" className="text-sm cursor-pointer hover:text-[#ff29d7]">I forgot my password</a>
                </div>

                <div className="w-full">
                    <button type="submit" disabled={loading} className="w-full bg-black border border-white rounded-2xl py-3 font-semibold hover:bg-[#ff29d7] hover:text-white">
                        {loading ? "logging in..." : "LOGIN"}
                    </button>
                </div>

            </form>
        </div>
    );
};

export default Login;
