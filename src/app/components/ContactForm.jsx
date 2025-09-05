import React from "react";

const ContactForm = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black text-white px-6 py-12 flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Imagen lateral */}
        <div className="bg-[#FF29D7] flex items-center justify-center rounded-xl p-10">
          <img
            src="/images/home/contact.png" // Cambia por tu imagen
            alt="ID icon"
            className="w-50 h-58 sm:w-72 sm:h-70"
          />
        </div>

        {/* Formulario */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">CONTACT US</h2>
          <form className="space-y-4">

            <div>
              <label className="block text-sm font-bold mb-1">COUNTRY</label>
              <select className="w-full bg-[rgba(217,217,217,0.4)] text-white rounded px-3 py-2">
                <option>Colombia</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">TYPE OF IDENTIFICATION</label>
              <select className="w-full bg-[rgba(217,217,217,0.4)] text-white rounded px-3 py-2">
                <option>DNI</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">IDENTIFICATION NUMBER</label>
              <input
                type="text"
                placeholder="Enter your identification number"
                className="w-full bg-[rgba(217,217,217,0.4)] text-white rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">FULL NAME</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-[rgba(217,217,217,0.4)] text-white rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">PHONE NUMBER</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full bg-[rgba(217,217,217,0.4)] text-white rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">EMAIL</label>
              <input
                type="email"
                placeholder="Enter your email here"
                className="w-full bg-[rgba(217,217,217,0.4)] text-white rounded px-3 py-2"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-1">MESSAGE</label>
              <textarea
                rows="4"
                placeholder="Enter your message"
                className="w-full bg-[rgba(217,217,217,0.4)] text-white rounded px-3 py-2"
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-gradient-to-r from-pink-600 to-purple-700 hover:opacity-90 text-white font-bold py-2 px-4 rounded"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
