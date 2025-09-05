
import React from "react";

const ProjectsDetail = ({ projectId }) => {
    // Datos de ejemplo para los proyectos
    const projectData = {
        1: {
            title: "First all-female team leading Blockchain in Rio",
            date: "27/03/2023",
            funded: 15000,
            goal: 25000,
            description: "At Shebn, we believe that access to capital shouldn't come with extra barriers for women in Web3. This project aims to create the first all-female team leading blockchain initiatives in Rio de Janeiro, empowering women in the tech industry.",
            images: "/images/projects/equipo.jpg",
        },
        2: {
            title: "Women Shining in UX with Blockchain",
            date: "15/04/2023",
            funded: 18750,
            goal: 25000,
            description: "This initiative focuses on training and supporting women in UX design with blockchain technology integration. We're creating opportunities for women to excel in this emerging field.",
            images: "/images/projects/equipo.jpg",
        },
        3: {
            title: "Fundraising pitches for women",
            date: "10/05/2023",
            funded: 6750,
            goal: 15000,
            description: "At Shebn, we believe that access to capital shouldn't come with extra barriers for women in Web3. This program provides training and support for women to develop effective fundraising pitches.",
            images: "/images/projects/equipo.jpg",
        }
    };

    const project = projectData[projectId];
    const percentage = Math.round((project.funded / project.goal) * 100);

    return(
        <div className="w-full">
            <div className="flex flex-col">
                <img className="w-full h-64 rounded-lg" src="/images/projects/equipo.jpg" alt={project.title} />
                <p className="text-base text-end">{project.date}</p>
            </div>

            <div className="w-full flex py-4">
                <div className="w-full flex flex-col">
                    <p className="text-4xl font-bold">{project.title}</p>
                    <div className="flex">
                        <p className="text-base mr-1">Organized By </p>
                        <p className="text-[#ff27d9] font-semibold text-base mr-1">SHEBN</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-green-500">
                            <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                        </svg>  
                    </div>
                </div>
                <div className="w-9 h-9 flex justify-center bg-[#ff29d7] rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 fill-white">
                        <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col">
                <div className="mb-4">
                    <p className="text-gray-300 mb-1">
                        ${project.funded.toLocaleString()} of ${project.goal.toLocaleString()} founded
                    </p>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                            className="bg-[#FF29D7] h-3 rounded-full transition-all duration-300" 
                            style={{width: `${percentage}%`}}
                        ></div>
                        <p className="text-xs text-end">({percentage}%)</p>
                    </div>
                </div>

                <p className="text-lg font-semibold">Description</p>
                <p className="text-gray-300 mt-6 leading-relaxed">
                    {project.description}
                </p>

                <div className="w-full flex justify-end">
                    <button className="flex items-stard bg-[#ff29d7] rounded-lg px-4 text-lg font-semibold cursor-pointer">Contact</button>
                </div>
                

                <p className="text-lg font-semibold">Participants</p>

                <div className="w-1/5 grid grid-cols-2 md:grid-cols-4 gap-1">
                    <img className="rounded-full shadow-md w-8 h-8 object-cover" src="/images/projects/equipo.jpg" alt="" />
                    <img className="rounded-full shadow-md w-8 h-8 object-cover" src="/images/projects/equipo.jpg" alt="" />
                    <img className="rounded-full shadow-md w-8 h-8 object-cover" src="/images/projects/equipo.jpg" alt="" />
                    <img className="rounded-full shadow-md w-8 h-8 object-cover" src="/images/projects/equipo.jpg" alt="" />
                </div>

                <div className="text-center mt-8">
                    <button className="w-full bg-[#970D60] text-white px-6 py-3 border-1 border-white rounded-xl hover:bg-pink-600 transition-colors duration-200 font-semibold cursor-pointer">
                        DONATE NOW
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectsDetail;