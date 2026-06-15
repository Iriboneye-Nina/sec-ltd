import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBullhorn, FaTruck, FaTv, FaGlobe } from 'react-icons/fa'; // Importing icons

const Allservices = [
  {
    id: 1,
    title: 'BILLBOARD',
    description: 'Billboard advertising has grown as technology...',
    images: ['/img1.png', '/img1-alternate.png'],
    icon: <FaBullhorn size={24} className="text-red-500 mb-2" />, // Adding icon
  },
  {
    id: 2,
    title: 'MOBILE BILLBOARD',
    description: 'Advertising on roads is a unique strategy that helps...',
    images: ['/img2.png', '/img2-alternate.png'],
    icon: <FaTruck size={24} className="text-red-500 mb-2" />, // Adding icon
  },
  {
    id: 3,
    title: 'DIGITAL DISPLAYS',
    description: 'Treacherously far so late have immense condescending...',
    images: ['/img3.png', '/img3-alternate.png'],
    icon: <FaTv size={24} className="text-red-500 mb-2" />, // Adding icon
  },
  {
    id: 4,
    title: 'WEB MARKETING',
    description: 'Expand your digital presence with targeted web marketing...',
    images: ['/img4.png', '/img4-alternate.png'],
    icon: <FaGlobe size={24} className="text-red-500 mb-2" />, // Adding icon
  },
  // Add more services as needed
];

const AllservicesComponent = () => {
  const [currentImage, setCurrentImage] = useState(
    Allservices.reduce((acc, service) => {
      acc[service.id] = 0;
      return acc;
    }, {})
  );

  const handleImageClick = (id) => {
    setCurrentImage((prev) => ({
      ...prev,
      [id]: (prev[id] + 1) % Allservices.find((service) => service.id === id).images.length,
    }));
  };

  return (
    <div className="services-container flex flex-col items-center pt-16 bg-gray-100">
      <div className="service-content text-center mb-8 px-4">
        <p className="text-2xl font-bold font-serif text-red-500 mb-2">WHAT WE DO</p>
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Our Services</h1>
      </div>
      <div className="images grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4">
        {Allservices.map((service) => (
          <div key={service.id} className="image relative" onClick={() => handleImageClick(service.id)}>
            <img
              src={service.images[currentImage[service.id]]}
              alt={service.title}
              className="h-64 md:h-96 w-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
            <div className="content absolute bottom-0 right-0 bg-white bg-opacity-90 p-4 rounded-b-lg w-full">
              {service.icon} {/* Displaying icon */}
              <h2 className="text-xl md:text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-md md:text-lg">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="btn flex justify-center items-center pt-8">
        <button className="explore px-6 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default AllservicesComponent;
