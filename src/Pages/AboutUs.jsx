import React from 'react';
import { FaRegHeart, FaBullseye , FaTrophy } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="about-us-container flex flex-col items-center lg:mb-4 pt-20 sm:pt-20 lg:pt-12 bg-gray-100">
      {/* Header Section */}
      <div className="about-content text-center mt-0 pt-0 md:mt-0 md:pt-0 lg:mb-2">
        <p className="text-2xl font-bold font-serif text-red-500 mb-2">ABOUT US</p>
        <h1 className="text-5xl font-bold font-serif mb-6">Who We Are</h1>
      </div>

      {/* Company Information Section */}
      <div className="company-info bg-white shadow-lg rounded-lg p-8 mb-16 max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-6">Learn More About SEC Ltd</h2>
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold">COMPANY NAME:</span> SUMBA EXCTION & CONSULTANCY LTD (S.E.C LTD)
        </p>
        <p className="text-lg text-gray-700 mb-4">
          <span className="font-semibold">GENERAL OVERVIEW:</span> SEC LTD, founded on 11/09/2018, is a consultant firm involved in conducting electrical line projects and large-scale infrastructure. Registered with the Republic of Rwanda, SEC LTD is equipped with technical and financial capabilities for project execution.
        </p>
        <p className="text-lg text-gray-700">
          Our experience in electrical installations, building construction, project management, and cost control has allowed us to partner with various organizations to execute multiple large-scale projects successfully.
        </p>
      </div>

      {/* Mission, Vision, and Values Section */}
      <div className="mission-vision-values flex flex-wrap justify-center gap-8 mb-12">
    {/* Mission Section */}
    <div className="mission bg-white p-6 rounded-lg shadow-md max-w-xs text-center">
      <div className="flex items-center justify-center mb-2">
        <FaBullseye size={48} className="text-red-500 mr-2" /> {/* Icon aligned with heading */}
        <h2 className="text-2xl font-bold">Our Mission</h2>
      </div>
      <p className="text-gray-700">
        Provision of quick service, quality, and customer satisfaction to all projects we undertake.
      </p>
    </div>

    {/* Vision Section */}
    <div className="vision bg-white p-6 rounded-lg shadow-md max-w-xs text-center">
      <div className="flex items-center justify-center mb-2">
        <FaRegHeart size={48} className="text-red-500 mr-2" /> {/* Icon aligned with heading */}
        <h2 className="text-2xl font-bold">Our Vision</h2>
      </div>
      <p className="text-gray-700">
        To be the highest electrical service provider for communities.
      </p>
    </div>

    {/* Achievement Section */}
    <div className="values bg-white p-6 rounded-lg shadow-md max-w-xs text-center">
      <div className="flex items-center justify-center mb-2">
        <FaTrophy size={48} className="text-red-500 mr-2" /> {/* Icon aligned with heading */}
        <h2 className="text-2xl font-bold">Our Achievements</h2>
      </div>
      <p className="text-gray-700">
        The impact of our work in society includes long-term customer satisfaction, encouraging innovation, and delivering the highest quality services.
      </p>
    </div>
  </div>
    </div>
  );
};

export default AboutUs;
