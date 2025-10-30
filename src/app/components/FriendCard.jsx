"use client";

import React from "react";
import { useState } from "react";
import { IoIosArrowDroprightCircle, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const FriendCard = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const friendsPerPage = 4;
    
    /* Lista de amigos prueba*/
    const friends = [
        { id:'1', name: 'Daniela Beyo1', role: 'Developer', status: 'Open to door', image: '/images/profile/woman.jpg' },
        { id:'2', name: 'Selena Lo2', role: 'Marketing', status: 'CMO VueWallet', image: '/images/profile/woman.jpg' },
        { id:'3', name: 'Camila Cabello3', role: 'UX Designer', status: '16 projects', image: '/images/profile/woman.jpg' },
        { id:'4', name: 'Journa list4', role: 'Journalist', status: '30 contents', image: '/images/profile/woman.jpg' },
        { id:'5', name: 'Daniela Beyo5', role: 'Developer', status: 'Open to door', image: '/images/profile/woman.jpg' },
        { id:'6', name: 'Selena Lo6', role: 'Marketing', status: 'CMO VueWallet', image: '/images/profile/woman.jpg' },
        { id:'7', name: 'Camila Cabello7', role: 'UX Designer', status: '16 projects', image: '/images/profile/woman.jpg' },
        { id:'8', name: 'Journalist8', role: 'Journalist', status: '30 contents', image: '/images/profile/woman.jpg' },
        { id:'9', name: 'Daniela Beyo9', role: 'Developer', status: 'Open to door', image: '/images/profile/woman.jpg' },
        { id:'10', name: 'Selena Lo10', role: 'Marketing', status: 'CMO VueWallet', image: '/images/profile/woman.jpg' },

    ];

    //Calcula amigos visibles
    const visibleFriends = friends.slice(currentIndex, currentIndex + friendsPerPage);

    //verifica si hay mas amigos mas alla de la pagina actual
    const hasNext = currentIndex + friendsPerPage < friends.length;
    //verifica si hay amigos atras
    const hasPrev = currentIndex > 0;

    const handleNext = () => {
        if (hasNext) {
            setCurrentIndex(currentIndex + friendsPerPage);
        }
    };

    const handlePrev = () => {
        if (hasPrev) {
            setCurrentIndex(currentIndex - friendsPerPage);
        }
    };

    return (
        <div className="relative w-full bg-black rounded-xl p-6 shadow-gray-400 shadow-md">

            {/* Botón Atrás - solo visible cuando hay amigos atrás */}
            {hasPrev && (
            <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors">
                <IoIosArrowBack className="text-white size-6" />
            </button>
            )}
            
            {/* Grid de amigos - solo muestra 4 amigos por pagina */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {visibleFriends.map(friend => (
                    <div 
                        key={friend.id}
                        className="flex flex-col items-center">
                        
                        {/* Imagen principal */}
                        <img 
                            src={friend.image} 
                            alt={friend.name}
                            className="size-32 rounded-full mb-4 object-cover"
                            loading="lazy"
                        />

                        {/* Información */}
                        <div className="flex items-center mb-2">
                            <img 
                                src={friend.image} 
                                alt={`avatar ${friend.name}`}
                                className="size-5 rounded-full object-cover"
                                loading="lazy"
                            />
                            <p className="text-sm font-semibold pl-2">{friend.name}</p>
                        </div>
                        <p className="text-xs mb-2">{friend.role} + {friend.status}</p>
                        
                        {/* Botón ver perfil*/}
                        <button className="flex items-center w-fit hover:opacity-80 transition-opacity group/profile">
                            <p className="text-xs text-[#ff29d7] pr-1">See Profile</p>
                            <IoIosArrowDroprightCircle className="fill-[#ff29d7] size-4 group-hover/profile:translate-x-0.5 transition-transform"/> 
                        </button>
                    </div>
                ))}
            </div>

            {/* Flecha Adelante - solo visible cuando hay más amigos */}
            {hasNext && (
            <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 hover:bg-gray-700 rounded-full p-2 transition-colors">
                <IoIosArrowForward className="text-white size-6" />
            </button>
            )}
        </div>

        

    );


};

export default FriendCard;