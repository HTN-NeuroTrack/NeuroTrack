import React from 'react';

const UnityPage: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <iframe
        src="./unity/index.html" 
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Unity Game"
      />
    </div>
  );
};

export default UnityPage;