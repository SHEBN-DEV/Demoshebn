"use client";

import React from "react";
import { useState } from "react";

const friends = [
    { name: 'Danielabeyo', role: 'Developer', image: '/images/profile/woman.jpg' },
    { name: 'Daneris12', role: 'UX Designer', image: '/images/profile/woman.jpg' },
    { name: 'Catalina23', role: 'Developer Junior', image: '/images/profile/woman.jpg' },
    { name: 'TakaskiJulia', role: 'Comunnication', image: '/images/profile/woman.jpg' },
    { name: 'Danielabeyo', role: 'Developer', image: '/images/profile/woman.jpg' },
];

const OnlineFriendsList =() => {

    const [showAll, setShowAll] = useState(false);

    const visibleFriends = showAll ? friends : friends.slice(0, 4);

    return (
    
        <div className="w-full md:w-1/3 flex flex-col justify-center gap-4 text-white">
            <p className="text-lg font-semibold">Online Friends</p>
            
            {friends.length === 0 ? (  
            <div className="text-center text-white italic py-4">
                No friends online at the moment.
            </div>
            ) : (
            <div className="w-5/6 flex flex-col justify-center gap-7 py-4 px-3 gradient-border2">
                {visibleFriends.map((friend, i) => (
                    <React.Fragment key={i}>
                        <div className="flex items-center justify-between">
                            <img className="w-14 h-14 rounded-full" src={friend.image} alt={friend.name} />
                            <div className="flex flex-col">
                                <p className="text-lg font-semibold">{friend.name}</p>
                                <p className="text-base">{friend.role}</p>
                            </div>
                            <svg className="size-6 fill-[#ff29d7] cursor-pointer hover:fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/>
                            </svg>
                        </div>

                        {i < visibleFriends.length - 1 && (
                                <div className="w-5/6 border border-t border-gray-300 mx-auto" />
                                )}
                    </React.Fragment> 
                ))}

                {!showAll && (
                    <div className="flex justify-center">
                        <p className="text-lg font-semibold text-[#ff29d7] cursor-pointer hover:underline"
                        onClick={() => setShowAll(true)}>
                            Discover all
                        </p>
                    </div>
                )} 
            </div>
            )}
        </div>
        
    );
};

export default OnlineFriendsList;