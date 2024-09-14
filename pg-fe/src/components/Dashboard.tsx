import React, { useState } from 'react';
import Slider from './Slider';

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
        <p className="text-lg text-gray-700">High Score: <span className="font-semibold">1200</span></p>
        <p className="text-lg text-gray-700">Motor Angle: <span className="font-semibold">45°</span></p>
        <p className="text-lg text-gray-700">Motor Speed: <span className="font-semibold">3000 RPM</span></p>
        <p className="text-lg text-gray-700">Max Strength: <span className="font-semibold">80 kg</span></p>
      </div>
      <Slider value={threshold} onChange={handleSliderChange} />
    </div>
  );
};

export default Dashboard;