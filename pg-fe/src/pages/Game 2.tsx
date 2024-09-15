import React from 'react';

const UnityPage2: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <iframe
        src={"../../Public/Public2/index.html"}
        width="100%"
        height="100%"
        style={{ border: 'none' }}
        title="Unity Game"
      />
    </div>
  );
};

export default UnityPage2;