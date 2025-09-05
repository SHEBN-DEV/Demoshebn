import React from 'react';
import ProjectsDetail from '../../components/ProjectsDetail';
import Sidebar from '../../components/Sidebar';

const ProjectDetailPage = ({ params }) => {
  const { id } = params;

  return (
    <div className="min-h-screen flex justify-center bg-[#1a1718] text-white">
      {/* bloque 1 */}
      <Sidebar />

      {/* bloque 2 */}
      <div className="md:w-full py-4">
        <div className="w-5/6">
          <ProjectsDetail projectId={id} />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage; 