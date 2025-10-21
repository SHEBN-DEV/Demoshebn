"use client";

import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Sidebar = ()  => {

    const router = useRouter(); //Direcionar a page

    const [active, setActive] = useState('dashboard');

    const [isOpen, setIsOpen] = useState(false);

    const friends = [
        { nameFull: 'Maria Torre', name: 'Mariatorre5', image: '/images/profile/woman.jpg' },
    ];

    
    return(
        <div className="w-1/4">
            <button className={`md:hidden fixed top-6 ${isOpen ? 'left-68' : 'left-4'} z-100`}
            onClick={() => setIsOpen(!isOpen)}>
                {isOpen ?(
                     <svg className="fui-Icon-filled" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h10ZM9 16h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H9v12Zm-4.59-3a.5.5 0 0 0 .09 1h2.09a.5.5 0 0 0-.09-1H4.41Zm.09-3.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2ZM4.41 6a.5.5 0 0 0 .09 1h2.09a.5.5 0 0 0-.09-1H4.41Z" fill="currentColor"></path>
                    </svg>
                ) : (
                    <svg className="fui-Icon-regular" fill="currentColor" aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 13a.5.5 0 0 1 .09 1H4.5a.5.5 0 0 1-.09-1H6.5Zm0-3.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1h2Zm0-3.5a.5.5 0 0 1 .09 1H4.5a.5.5 0 0 1-.09-1H6.5ZM15 3a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h10ZM5 4a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h3V4H5Zm4 0v12h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H9Z" fill="currentColor"></path>
                    </svg>
                )}
            </button>

            <div className={`fixed flex flex-col justify-between items-center top-0 left-0 h-3/4 w-1/2 py-5 bg-black transform transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:w-full md:h-full`}>
                            
                <ul className="list-inside flex flex-col justify-stard gap-4">
                    <li className={`text-lg flex items-center gap-2 cursor-pointer 
                        ${active === 'dashboard' ? 'text-[#FF29D7] font-semibold' : 'text-white'}`}
                        onClick={() => setActive('dashboard')}>
                            <img className="w-5 h-5" 
                            src={active === 'dashboard' ? '/images/profile/artboard-55-pink.png' : '/images/profile/artboard-55-white.png'} alt="DashBoard" />
                        DashBoard
                    </li>
                    <li className={`text-lg flex items-center gap-2 cursor-pointer
                        ${active === 'projects' ? 'text-[#FF29D7] font-semibold' : 'text-white'}`}
                        onClick={() => {
                            setActive('projects');
                            router.push('/Projects');
                            }}>
                            <img className="w-6 h-6" src={active === 'projects' ? '/images/profile/Layer-1-pink.png' : '/images/profile/artboard-35-white.png'} alt="Projects" />
                        Projects
                    </li>
                    {(active === 'projects' || active === 'apply') && (
                        <li className={`text-lg flex items-center gap-2 cursor-pointer
                            ${active === 'apply' ? 'text-[#FF29D7] font-semibold' : 'text-white'}`}
                            onClick={() => setActive('apply')}>
                                <img className="w-6 h-6" src={active === 'apply' ? '/images/profile/Layer-2-pink.png' : '/images/profile/Layer-2.png'} alt="Apply" />
                            Apply
                        </li>
                    )}
                    
                    <li className={`text-lg flex items-center gap-2 cursor-pointer
                        ${active === 'message' ? 'text-[#FF29D7] font-semibold' : 'text-white'}`}
                        onClick={() => {
                            setActive('message');
                            router.push('/message')}}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                            </svg>
                        Message
                    </li>
                    
                </ul>
                <div className={`flex items-center text-lg gap-2 cursor-pointer
                    ${active === 'profile' ? 'text-[#FF29D7] font-semibold' : 'text-white'}`}
                    onClick={() => {
                        setActive('profile');
                        router.push('/MyProfile');
                    }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    My Profile
                </div>

                {(active === 'profile' || active === 'myprofile') && (
                    <div className="flex flex-col gap-2">
                        {friends.map((friend, i) => (
                            <div key={i} className={`flex items-center justify-between gap-2 cursor-pointer 
                                ${active === 'myprofile' ? 'text-[#ff29d7] font-bold' : 'text-white'}`}
                                onClick={() => setActive('myprofile')}>
                                    <div className="relative w-14 h-14">
                                        <img className="w-14 h-14 rounded-full" src={friend.image} alt={friend.name} />
                                        <div className="w-3 h-3 bg-green-500 rounded-full absolute bottom-0 left-1"></div>
                                    </div>
                                    
                                    <div className="flex flex-col">
                                        <p className="text-base font-semibold">{friend.nameFull}</p>
                                        <p className="text-sm">{friend.name}</p>
                                    </div>
                                    <svg className="size-8 cursor-pointer" alt="Close" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                                    </svg>
                                </div>
                        ))}
                    </div>
                )}  
                
            </div>

        </div>

        

           
        
    );
};

export default Sidebar;