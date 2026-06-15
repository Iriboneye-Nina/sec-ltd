import React from 'react';
import { FaTools } from 'react-icons/fa';

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

// New Project Description Card Component (Full Width)
const ProjectDescriptionCard = ({ title, description, images, icon }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-8 my-8 animate-fadeIn">
      <div className="flex items-center space-x-4 mb-4">
        {icon}
        <h2 className="text-3xl font-bold">{title}</h2>
      </div>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Project image ${index + 1}`}
            className="w-full h-48 object-cover rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
};

function Projects() {
  return (
    <div className='intro p-6 lg:p-16'>
      {/* Company Information Section */}

      {/* Project Section */}
      <div className='project bg-gray-100 py-16 relative z-0'>
        <div className="service-content text-center mb-8">
          <p className="text-2xl font-bold font-serif text-red-500 mb-2">WHAT WE HAVE DONE</p>
          <h1 className="text-5xl font-bold font-serif mb-6">Our Projects</h1>
        </div>

        {/* Project Images */}
        <div className='relative w-full flex justify-center'>
          <img src="/color2.jpg" alt="background" className="absolute inset-0 w-full h-full object-cover z-0" />
          <div className='relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8'>
            <ProjectCard image="/image1.jpeg" alt="Project 1" />
            <ProjectCard image="/image7.jpeg" alt="Project 2" />
            <ProjectCard image="/image3.jpeg" alt="Project 3" />
            <ProjectCard image="/image5.jpeg" alt="Project 4" />
            <ProjectCard image="/build1.jpeg" alt="Project 5" />
            <ProjectCard image="/place1.jpeg" alt="Project 6" />
          </div>
        </div>

        {/* New Project Description Card (Full Width) */}
        <div className="flex justify-center mt-16">
          <ProjectDescriptionCard
            title="PROJECT MANAGEMENT & INSTALLATION"
            description="SEC LTD specializes in electrical installation, construction of buildings, and project management. We coordinate projects, supervise execution, and control costs and deadlines to ensure success."
            images={['/build2.jpeg', '/pillon2.jpeg', '/pillon2.jpeg']}
            icon={<FaTools size={24} className="text-gray-500 mb-2" />}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
