import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#FF29D7] text-white py-6 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        
        {/* Enlaces de navegación */}
        <div className="flex flex-col sm:flex-row sm:gap-6 text-sm sm:text-base font-semibold text-center sm:text-left">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact us</a>
        </div>

        {/* Íconos de redes sociales */}
        <div className="flex justify-center sm:justify-end gap-6 text-xl sm:text-2xl">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-black transition" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-black transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="hover:text-black transition" />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="hover:text-black transition" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
