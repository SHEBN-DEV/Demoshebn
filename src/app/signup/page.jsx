"use client"

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { supabase } from "../SupabaseClient";
import InputField from "../components/inputField";
import PasswordField from "../components/PasswordField";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");

  const router = useRouter();

  const verifyWithDidit = async () => {
    return new Promise((resolve) => {

      const iframe = document.createElement("iframe");
      iframe.src = "https://verify.didit.me/session/BiFDYh6sfdn_";  // reemplazar por la url proporcionada por didit
      iframe.style.width = "100%";
      iframe.style.height = "600px";
      iframe.style.border = "none";

      const modal = document.createElement("div");
      modal.style.position = "fixed";
      modal.style.top = "0";
      modal.style.left = "0";
      modal.style.width = "100%";
      modal.style.height = "100%";
      modal.style.background = "rgba(0,0,0,0.8)";
      modal.style.display = "flex";
      modal.style.justifyContent = "center";
      modal.style.alignItems = "center";
      modal.appendChild(iframe);

      document.body.appendChild(modal);

      // Simulamos callback postMessage desde Didit
      window.addEventListener("message", (event) => {
        if (event.data?.diditVerification) {
          modal.remove();
          resolve(event.data.diditVerification);
        }
      });
    });
  };

  const handleSignUpSubmit = async (data) => {
    // Paso 1: verificar género con Didit
    const verification = await verifyWithDidit();

    if (!verification.success || verification.gender?.toLowerCase() !== "female") {
      setToastMessage("Solo se permiten registros de mujeres.");
      setToastType("error");
      setShowToast(true);
      return;
    }

    // Paso 2: Crear usuario en Supabase
    const { email, Password, FullName, UserName } = data;

    const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
      email,
      password: Password,
    });

    if (signUpError) {
      console.error("Error registering:", signUpError.message);
      alert("Error: " + signUpError.message);
      return;
    }

    const user = signUpData.user;

    if (!user) {
      setToastMessage("No se pudo crear el usuario. Intenta nuevamente.");
      setToastType("error");
      setShowToast(true);
      return;
    }

    // Guardar en profiles
    const { error: profileError } = await supabase.from("profiles").insert([
      {
        id: user.id,
        full_name: FullName,
        user_name: UserName,
        email: email,
        gender: "female", // opcional: guardamos validación
      },
    ]);

    if (profileError) {
      setToastMessage("Error saving profile:" + profileError.message);
      setToastType("error");
      setShowToast(true);
    } else {
      setToastMessage("Account created successfully! Redirecting...");
      setToastType("success");
      setShowToast(true);

      setTimeout(() => {
        router.push("/login");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#1a1718] text-white flex flex-col items-center">
      <form
        onSubmit={handleSubmit(handleSignUpSubmit)}
        className="w-full md:w-1/2 py-12 px-6 flex flex-col gap-6 justify-center items-center"
      >
        <div className="flex flex-col gap-8 justify-center items-center text-center">
          <p className="text-4xl font-semibold">Sign Up Account</p>
          <p className="text-base">
            Enter your personal data to create your account.
          </p>
        </div>

        <div className="w-full">
          <div className="w-full flex flex-col md:flex-row gap-5">
            <InputField
              label="Full Name"
              name="FullName"
              register={register}
              rules={{ required: "Full name is required" }}
              error={errors.FullName}
            />
            <InputField
              label="User Name"
              name="UserName"
              register={register}
              rules={{ required: "User name is required" }}
              error={errors.UserName}
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-6">
          <InputField
            label="Email"
            name="email"
            type="email"
            register={register}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            }}
            error={errors.email}
          />

          <PasswordField
            label="Password"
            name="Password"
            register={register}
            rules={{
              required: "Password is required",
              minLength: { value: 8, message: "Minimum 8 characters" },
            }}
            error={errors.Password}
          />
        </div>

        <div className="w-full flex justify-end py-5 pr-8">
          <p>
            Already A Member?{" "}
            <a
              href="/login"
              className="text-[#ff29d7] hover:text-[#de69c7]"
            >
              Log In
            </a>
          </p>
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="w-full bg-black border border-white rounded-2xl py-3 font-semibold hover:bg-[#ff29d7] hover:text-white"
          >
            CREATE AN ACCOUNT
          </button>
        </div>
      </form>

      {showToast && (
        <div
          className={`fixed top-5 right-5 px-4 py-2 rounded shadow-lg z-50 transition-all duration-300 
                ${
                  toastType === "success"
                    ? "bg-[#ff29d7]"
                    : "bg-red-500"
                } text-white`}
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
};

export default SignUp;
