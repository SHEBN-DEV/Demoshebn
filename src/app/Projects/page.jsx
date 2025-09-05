
import React from "react";
import Sidebar from "../components/Sidebar";
import Discover from "../components/Discover";
import TrendingCards from "../components/TrendingCards";
import CategoryGrid from "../components/CategoryGrid";



const Projects = () => {

    return(
        <div className="min-h-screen flex justify-center bg-[#1a1718] text-white">
            {/* bloque 1 */}
            <Sidebar />

            {/* bloque 2 */}
            <div className="md:w-full py-4">
                <div className="w-5/6">
                    <Discover />
                </div>
                <p className="text-2xl font-bold my-4">Trending</p>
                <div className="w-full">
                    <TrendingCards />
                    <CategoryGrid />

                </div>

            </div>
        </div>
    );

};

export default Projects;