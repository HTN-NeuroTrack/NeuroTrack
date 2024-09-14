import React, { useState } from 'react';
import Slider from './Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faDumbbell, faRuler, faMedal } from '@fortawesome/free-solid-svg-icons';

const Dashboard: React.FC = () => {
  const [threshold, setThreshold] = useState(50);

  const handleSliderChange = (value: number) => {
    setThreshold(value);
    // Call API to update the threshold value (add later)
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h2>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faMedal} className="text-yellow-500 text-4xl" />
          <div>
            <p className="text-lg text-gray-700">High Score</p>
            <p className="text-xl font-semibold text-gray-900">1200</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faRuler} className="text-blue-500 text-4xl" />
          <div>
            <p className="text-lg text-gray-700">Motor Angle</p>
            <p className="text-xl font-semibold text-gray-900">45°</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faTachometerAlt} className="text-red-500 text-4xl" />
          <div>
            <p className="text-lg text-gray-700">Motor Speed</p>
            <p className="text-xl font-semibold text-gray-900">3000 RPM</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faDumbbell} className="text-green-500 text-4xl" />
          <div>
            <p className="text-lg text-gray-700">Max Strength</p>
            <p className="text-xl font-semibold text-gray-900">80 kg</p>
          </div>
        </div>
      </div>
      <Slider value={threshold} onChange={handleSliderChange} />
    </div>
  );
};

export default Dashboard;