import React from 'react';

const LearnMorePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Learn More About Pulsegrip</h2>
        <p className="text-lg text-gray-700">
          Pulsegrip is an innovative project that combines hardware and software to monitor and control various
          parameters such as motor speed, angle, and strength.
        </p>
      </div>
    </div>
  );
};

export default LearnMorePage;