import React from 'react';

export const Information = () => {
  return (
    <div className='intro p-6 lg:p-16'>
      {/* Company Information Section */}
 

      {/* Project Section */}
      <div className='project bg-gray-100 py-16 relative z-0'>
        <div className="service-content text-center mb-8">
          <p className="text-2xl font-bold font-serif text-red-500 mb-2">WHAT WE HAVE DONE</p>
          <h1 className="text-5xl font-bold font-serif mb-6">Our Projects</h1>
        </div>

        <div className='relative w-full flex justify-center'>
          <img src="/color2.jpg" alt="background" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8'>
            <ProjectCard image="/image1.jpeg" alt="Project 1" />
            <ProjectCard image="/image7.jpeg" alt="Project 2" />
            <ProjectCard image="/image5.jpeg" alt="Project 3" />
            <ProjectCard image="/image5.jpeg" alt="Project 4" />
            <ProjectCard image="/build1.jpeg" alt="Project 5" />
            <ProjectCard image="/place1.jpeg" alt="Project 6" />
            <ProjectCard image="/pillon1.jpeg" alt="Project 7" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Project Card Component with fixed size
const ProjectCard = ({ image, alt }) => {
  return (
    <div className='img animate-fadeIn'>
      <img
        src={image}
        alt={alt}
        className="w-64 h-64 object-cover rounded-lg shadow-lg transition-transform duration-500 hover:scale-105" // Fixed size for all images
      />
    </div>
  );
};
