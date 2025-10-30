"use client";

import React from "react";

const FriendCard = () => {

    const friend = [
        { name: 'Danielabeyo', role: 'Developer', status: 'Open to door', image: '/images/profile/woman.jpg' },
        { name: 'SelenaLo', role: 'Marketing', status: 'CMO VueWallet', image: '/images/profile/woman.jpg' },
        { name: 'Camila Cabello', role: 'UX Designer', status: '16 projects', image: '/images/profile/woman.jpg' },
        { name: 'Journalist1', role: 'Journalist', status: '30 contents', image: '/images/profile/woman.jpg' },
        { name: 'Danielabeyo', role: 'Developer', status: 'Open to door', image: '/images/profile/woman.jpg' },
        { name: 'SelenaLo', role: 'Marketing', status: 'CMO VueWallet', image: '/images/profile/woman.jpg' },
    ];
    
    return(
        <div className="w-full space-y-4 text-white py-8">
            {Array.from ({length: Math.ceil(friend.length / 2)
                }).map((_, rowIndex) => (
                    <div className="w-full md:flex gap-4" key={rowIndex}>
                        {friend.slice(rowIndex * 2, rowIndex * 2 + 2).map((friend, i) => (
                            <div key={i} className="w-full md:w-1/2 flex items-center gradient-border1 mt-4 md:mt-0">
                                <div className="w-full flex items-center rounded-4xl bg-[#1a1718]">
                                    <div className="w-1/3 flex items-center justify-center m-5">
                                        <img className="w-25 h-25 rounded-full" src={friend.image} alt={friend.name} />
                                    </div>
                                    <div className="w-2/3">
                                        <p className="text-lg/13 font-semibold">{friend.name}</p>
                                        <p className="text-base/3">{friend.role}</p>
                                        <p className="text-base">+ {friend.status}</p>
                                        <p className="flex items-center text-sm/8 font-semibold text-[#ff29d7] mt-1 cursor-pointer hover:underline">
                                            See Profile
                                            <svg className="size-6 pl-2 fill-[#ff29d7]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z"/>
                                            </svg>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>    
                ))}
        </div>
        
    );
    

};
 export default FriendCard;