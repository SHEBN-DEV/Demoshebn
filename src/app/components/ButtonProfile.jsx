"use client";

import React from "react";
import { useState } from "react";
import FriendCard from "./FriendCard";

const ButtonProfile = () => {

    const [active, setActive] =useState('friends');

    const options = [
      { key: 'friends', label: 'Friends' },
      { key: 'popular', label: 'Popular' },
      { key: 'social', label: 'Social' }
    ];

    return(
      <div>
        {/* Botones */}
        <div className="flex items-center justify-around">
          {options.map(opt => (
            <div className="gradient-border" key={opt.key}>
              <button
                className={`rounded-lg px-4 md:px-16 py-1.5 text-base font-bold transition-colors duration-200 md:text-lg
                  ${active === opt.key ? 'bg-gradient-active text-white' : 'bg-[#1a1718] text-white'}`}
                onClick={() => setActive(opt.key)}
                aria-pressed={active === opt.key}
                role="tab"
              >
                {opt.label}
              </button>
            </div>
          ))}
        </div>

        {/* Segun seleccion de Boton */}
        {active === "friends" && <FriendCard />}
        {active === "popular" && 'En desarrollo Popular'}
        {active === "social" && 'En desarrollo Social'}
      </div>
    );

};

export default ButtonProfile;