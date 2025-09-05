import React from "react";

const Discover =() => {

    return(
        <div className="flex items-center">
            <div className="bg-[#221F1F] rounded-l-xl px-3 py-2">
                <svg className="size-6 stroke-gray-500 hover:stroke-[#ff29d7]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
            
            <input 
            className="w-full bg-[#221F1F] rounded-r-xl placeholder:text-gray-500 placeholder:italic text-white px-3 py-2 outline-none" 
            placeholder="Discover"
            type="text"
            name="search" />
        </div>

    );
};

export default Discover;