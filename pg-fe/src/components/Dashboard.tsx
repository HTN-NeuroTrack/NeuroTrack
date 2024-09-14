import React, { useState } from 'react';
import Slider from './Slider';

const Dashboard: React.FC = () => {
  const [threshold, setThreshold] = useState(50);

  const handleSliderChange = (value: number) => {
    setThreshold(value);
    // Call API to update the threshold value (add later)
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl shadow-xl transform transition-transform hover:scale-105 duration-300 ease-in-out">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">High Score</p>
            <h3 className="text-2xl font-bold text-gray-900">1200</h3>
          </div>
          <div className="bg-blue-500 text-white rounded-full p-4">
            <i className="fas fa-trophy fa-2x"></i>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Motor Angle</p>
            <h3 className="text-2xl font-bold text-gray-900">45°</h3>
          </div>
          <div className="bg-green-500 text-white rounded-full p-4">
            <i className="fas fa-compass fa-2x"></i>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Motor Speed</p>
            <h3 className="text-2xl font-bold text-gray-900">3000 RPM</h3>
          </div>
          <div className="bg-red-500 text-white rounded-full p-4">
            <i className="fas fa-tachometer-alt fa-2x"></i>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-600">Max Strength</p>
            <h3 className="text-2xl font-bold text-gray-900">80 kg</h3>
          </div>
          <div className="bg-yellow-500 text-white rounded-full p-4">
            <i className="fas fa-dumbbell fa-2x"></i>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Slider value={threshold} onChange={handleSliderChange} />
      </div>
    </div>
  );
};

export default Dashboard;