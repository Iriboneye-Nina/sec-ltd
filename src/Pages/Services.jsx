import React, { useState } from 'react';
import { FaBolt, FaSolarPanel, FaWind, FaBatteryFull, FaChargingStation, } from 'react-icons/fa'; 

const services = [
  {
    id: 1,
    title: 'GRID ELECTRICITY',
    description: 'Reliable access to grid electricity is crucial for powering homes, businesses, and industries...',
    images: ['/image1.jpeg', '/grid1-alternate.png', '/grid1-additional1.png', '/grid1-additional2.png'],
    icon: <FaBolt size={24} className="text-yellow-500 mb-2" />,
  },
  {
    id: 2,
    title: 'RENEWABLE ENERGY',
    description: 'Harnessing renewable sources like wind and solar for electricity reduces environmental impact...',
    images: ['/image7.jpeg', '/renewable-alternate.png', '/renewable-additional1.png', '/renewable-additional2.png'],
    icon: <FaSolarPanel size={24} className="text-green-500 mb-2" />,
  },
  {
    id: 3,
    title: 'WIND POWER',
    description: 'Wind turbines are an essential part of the renewable energy mix, converting wind into electricity...',
    images: ['/image3.jpeg', '/windpower-alternate.png', '/windpower-additional1.png', '/windpower-additional2.png'],
    icon: <FaWind size={24} className="text-blue-500 mb-2" />,
  },
  {
    id: 4,
    title: 'SOLAR ENERGY',
    description: 'Solar panels convert sunlight into electricity, making it a sustainable option for various applications...',
    images: ['/image4.jpeg', '/solar-alternate.png', '/solar-additional1.png', '/solar-additional2.png'],
    icon: <FaSolarPanel size={24} className="text-orange-500 mb-2" />,
  },
  {
    id: 5,
    title: 'ENERGY STORAGE',
    description: 'Advanced battery systems store electricity generated from renewable sources for future use...',
    images: ['/image5.jpeg', '/storage-alternate.png', '/storage-additional1.png', '/storage-additional2.png'],
    icon: <FaBatteryFull size={24} className="text-purple-500 mb-2" />,
  },
  {
    id: 6,
    title: 'ELECTRIC VEHICLE CHARGING',
    description: 'Charging stations provide the infrastructure needed to support the growing demand for electric vehicles...',
    images: ['/image6.jpeg', '/evcharging-alternate.png', '/evcharging-additional1.png', '/evcharging-additional2.png'],
    icon: <FaChargingStation size={24} className="text-red-500 mb-2" />,
  },
 
];

const Services = () => {
  const [currentImage, setCurrentImage] = useState(
    services.reduce((acc, service) => {
      acc[service.id] = 0;
      return acc;
    }, {})
  );

  const handleImageClick = (id) => {
    setCurrentImage((prev) => ({
      ...prev,
      [id]: (prev[id] + 1) % services.find((service) => service.id === id).images.length,
    }));
  };

  return (
    <div className="services-container flex flex-col items-center bg-gray-100 py-8 relative z-0">
      <div className="service-content text-center mb-8">
        <p className="text-2xl font-bold font-serif text-yellow-500 mb-2">OUR ENERGY SOLUTIONS</p>
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Our Electricity Services</h1>
      </div>
      <div className="images grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {services.map((service) => (
          <div key={service.id} className="image relative" onClick={() => handleImageClick(service.id)}>
            <img
              src={service.images[currentImage[service.id]]}
              alt={service.title}
              className="h-64 md:h-96 w-full object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
            />
            <div className="content absolute bottom-0 right-0 bg-white bg-opacity-90 p-4 rounded-b-lg w-full">
              {service.icon}
              <h2 className="text-xl md:text-2xl font-bold mb-2">{service.title}</h2>
              <p className="text-md md:text-lg">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
