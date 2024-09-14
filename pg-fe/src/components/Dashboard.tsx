import React, { useState } from 'react';
import Slider from './Slider';

const Dashboard: React.FC = () => {
  const [threshold, setThreshold] = useState(50);

  const handleSliderChange = (value: number) => {
    setThreshold(value);
    // Call API to update the threshold value (add later)
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="stats">
        <p>High Score: <span>1200</span></p>
        <p>Motor Angle: <span>45°</span></p>
        <p>Motor Speed: <span>3000 RPM</span></p>
        <p>Max Strength: <span>80 kg</span></p>
      </div>
      <Slider value={threshold} onChange={handleSliderChange} />
    </div>
  );
};

export default Dashboard;