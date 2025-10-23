"use client";
import React, { useState, useEffect } from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaCircleCheck,  
  FaTriangleExclamation 
} from "react-icons/fa6";
import { supabase } from "../SupabaseClient";

const HomeComingSoon = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  
    // useEffect para limpiar el mensaje después de 5 segundos
    useEffect(() => {
      if (message.text) {
        const timer = setTimeout(() => {
          setMessage({ text: "", type: "" });
        }, 5000); // 5000 ms = 5 segundos
        
        // Limpiar el timer si el componente se desmonta o el mensaje cambia
        return () => clearTimeout(timer);
      }
    }, [message.text]); // Se ejecuta cuando message.text cambia
  
  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Sanitizar el email
    const sanitizedEmail = email.trim().toLowerCase();
    
    setIsLoading(true);
    setMessage({ text: "", type: "" });
    
    // Validación de email
    if (!sanitizedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitizedEmail)) {
      setMessage({ text: "Please enter a valid email address", type: "error" });
      setIsLoading(false);
      return;
    }
    
    try {
      //console.log("Insertando email en Supabase:", sanitizedEmail);
      
      // Insertar en Supabase
      const { data, error } = await supabase
        .from('subscribers')
        .insert([{ email: sanitizedEmail }])
      
      //console.log("Respuesta de Supabase - Data:", data, "Error:", error);
      
      if (error) {
        // Manejar diferentes tipos de errores
        if (error.code === '23505') {
          setMessage({ text: "This email is already registered", type: "error" });
        } else {
          // Mostrar el mensaje de error real de Supabase
          setMessage({ 
            text: error.message || `Server error (code: ${error.code})`, 
            type: "error" 
          });
        }
      } else {
        // Éxito
        setMessage({ 
          text: "Thank you! We'll notify you when we're ready.", 
          type: "success" 
        });
        setEmail("");
      }
    } catch (error) {
      //console.error("Error completo al guardar el email:", error);
      setMessage({ 
        text: "Connection error. Please check your internet connection and try again.", 
        type: "error" 
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-6 p-4 text-white relative overflow-hidden
    bg-gradient-to-b from-[#030000] from-38% via-[#E731AD] via-83% to-white to-100%">
      
      <img src="/images/home/LogoRosa.png" alt="SHEBN" 
      className="size-40"/>
      
      <p className="text-5xl md:text-8xl font-bold text-center">Coming Soon</p>
      
      <p className="text-xl md:text-2xl font-light text-center max-w-4xl">
        Get ready everyone! We are currently working on something awesome.
      </p>
      
      <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col items-center gap-4">
        <div className="w-full flex flex-col sm:flex-row items-center gap-2">
          <input 
            type="email" 
            name="email" 
            placeholder="Email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="w-full sm:w-2/3 border border-white rounded-lg placeholder-white font-light p-3 outline-0 bg-transparent"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-1/3 bg-[#E0D4D4] text-xl text-black p-3 rounded-lg hover:bg-[#c9bebe] transition disabled:opacity-70 flex items-center justify-center"
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </span>
            ) : "Notify Me"}
          </button>
        </div>
        
        {message.text && (
          <div className={`text-center text-lg font-medium flex items-center justify-center ${
            message.type === "error" ? "text-white" : "text-white"
          }`}>
            {message.type === "error" ? (
              <FaTriangleExclamation  className="mr-2" />
            ) : (
              <FaCircleCheck className="mr-2" />
            )}
            {message.text}
          </div>
        )}
      </form>
      
      <div className="flex justify-center gap-6 text-2xl mt-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
          <FaXTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
          <FaInstagram />
        </a>
      </div>
    </div> 
  );
};

export default HomeComingSoon;