import React from 'react';

const features = [
  {
    title: 'Profiles',
    description: 'Upload your profile and find new colleagues.',
    icon: '/icons/profile.png',
  },
  {
    title: 'Forum',
    description: 'Participate and learn about the SHEBN forum.',
    icon: '/icons/forum.png',
  },
  {
    title: 'Projects',
    description: 'Upload your projects and see those of others.',
    icon: '/icons/projects.png',
  },
  {
    title: 'Apply',
    description: 'Applies to the different offers provided by SHEBN members.',
    icon: '/icons/apply.png',
  },
];

const FeatureSection = () => {
  return (
    <section className="relative bg-black text-white py-16 md:py-24 border-b-4 border-white overflow-hidden">
      {/* Decorated backgrounds */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <img
          src="/images/home/mallizquierda.png"
          alt=""
          className="absolute left-0 bottom-[0%] h-[60%] max-w-[200px] md:max-w-[250px] w-auto object-contain hidden sm:block"
          loading="lazy"
        />
        <img
          src="/images/home/malldere.png"
          alt=""
          className="absolute bottom-35 right-0 h-full max-w-[200px] md:max-w-[250px] w-auto object-contain hidden sm:block"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Header */}
        <div className="text-left max-w-md flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl font-medium text-white mb-5 sm:mb-7 tracking-normal">
            Step into the world of
          </h2>
          <img 
            src="/images/home/SBN.png" 
            alt="SHEBN Logo" 
            className="h-20 sm:h-50 w-auto" 
            loading="lazy"
          />
        </div>

        {/* Cards with protruding sidebar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full lg:w-auto">
          {features.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Sidebar protruding with white border */}
              <div className="absolute -left-0 top-1/2 -translate-y-1/2 h-[50%] w-4 bg-gray-300 rounded-l-sm border-2 border-white z-10" />
              
              {/* Main card with original colors */}
              <div 
                className="relative w-full sm:w-[300px] lg:w-[322px] h-[180px] sm:h-[237px] rounded-[10px] shadow-lg overflow-hidden px-6 pt-7 pb-5 flex flex-col justify-between ml-2 transition-transform hover:scale-[1.02] border-r-2 border-b-6 border-white"
                style={{
                  background: 'linear-gradient(90deg, #7B1969 36%, #E12EC0 100%)',
                }}
              >
                {/* Circular icon */}
                <div 
                  className="absolute top-4 right-4 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white flex items-center justify-center"
                  style={{ backgroundColor: '#FF29D7' }}
                >
                  <img 
                    src={item.icon} 
                    alt={`${item.title} Icon`} 
                    className="w-5 h-5 sm:w-6 sm:h-6" 
                    loading="lazy"
                  />
                </div>
                
                {/* Content */}
                <div className="mt-18 flex flex-col justify-end flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-white tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;