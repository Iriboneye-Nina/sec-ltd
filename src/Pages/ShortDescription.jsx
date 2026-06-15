import React from 'react';

function ShortDescription() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100">
      {/* Left Section */}
      <div className="relative flex items-center justify-center w-full md:w-1/2 h-1/2 md:h-96 bg-cover bg-center text-white">
        <img src="/Team.webp" alt="Team" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 p-4 text-center">
          <p className="text-3xl md:text-2xl font-bold">ELECTRICAL AGENCY<br/>SOLUTION</p>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center w-full md:w-1/2 h-1/2 md:h-96 bg-cover bg-center text-white">
        <img src="/color2.jpg" alt="Colorful background" className="absolute inset-0 w-full h-full object-cover z-0"/>
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10 p-4 text-center mb-4">
          <p className="text-3xl md:text-2xl font-bold">PROVIDING EXPERT ASSISTANCE WITH<br/>ELECTRIC INSURANCE</p>
        </div>
        <div className="relative z-10 w-full md:w-2/3 mx-auto space-y-4">
          <ProgressBar label="Planning" percentage="80%"/>
          <ProgressBar label="Strategy" percentage="90%"/>
          <ProgressBar label="Performance" percentage="70%"/>
        </div>
      </div>
    </div>
  );
}
const ProgressBar = ({ label, percentage }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-lg font-medium text-white">{label}</span>
        <span className="text-lg font-medium text-white">{percentage}</span>
      </div>
      <div className="w-full bg-white rounded-full h-4">
        <div className="bg-red-500 h-4 rounded-full" style={{ width: percentage }}></div>
      </div>
    </div>
  );
};

export default ShortDescription;
