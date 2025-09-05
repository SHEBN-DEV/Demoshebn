import React from "react";
import Sidebar from "../components/Sidebar";
import Discover from "../components/Discover";
import Invitation from "../components/Invitation";
import ButtonProfile from "../components/ButtonProfile";
import OnlineFriendsList from "../components/OnlineFriendsList";

const profileFriends = () => {

    return(
        <div className="min-h-screen flex justify-center bg-[#1a1718] text-white">
            
            {/* Bloque 1 */}
            <Sidebar />

            {/* Bloque 2 */}
            <div className="w-full md:w-4/5 flex flex-col gap-8 px-8 md:px-4">
                {/* Discover */}
                <Discover />
                
                {/* Invitation */}
                <Invitation />

                {/* Button */}
                <ButtonProfile />

            </div>

            {/* Bloque 3 */}
            <OnlineFriendsList />
            
            
            
        </div>
    );
};

export default profileFriends;