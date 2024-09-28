import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

function ContactSection() {
  return (
    <section className="bg-gray-100 py-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wide text-red-500 uppercase">Contact Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get in touch
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We would love to hear from you!
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-red-500" />
            <p className="text-lg text-gray-700">Kigali, RWANDA</p>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-red-500" />
            <p className="text-lg text-gray-700">+250783128097
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-red-500" />
            <p className="text-lg text-gray-700">sumbaltd@gmail.com</p>
          </div>
        </div>
        <div className="mt-10 flex justify-center space-x-6">
          <a href="" className="text-gray-500 hover:text-gray-900">
            <FaFacebook size={30} style={{ color: '#4267B2' }} />
          </a>
          <a href="" className="text-gray-500 hover:text-gray-900">
            <FaInstagram size={30} style={{ color: '#C13584' }} />
          </a>
          <a href="" className="text-gray-500 hover:text-gray-900">
            <FaYoutube size={30} style={{ color: '#FF0000' }} />
          </a>
          <a href="" className="text-gray-500 hover:text-gray-900">
            <FaLinkedin size={30} style={{ color: '#0077B5' }} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
