import React from 'react';

const GameButtons: React.FC = () => {
  return (
    <div className="flex justify-center gap-4 mt-8">
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all">
        Game 1
      </button>
      <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all">
        Game 2
      </button>
    </div>
  );
};

export default GameButtons;