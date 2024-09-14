import React from 'react';

const GameButtons: React.FC = () => {
  return (
    <div className="flex justify-center gap-8 mt-8">
      <div className="relative w-64 h-40">
        <button
          className="absolute inset-0 w-full h-full bg-blue-500 bg-opacity-60 text-white text-3xl font-bold rounded-lg shadow-md hover:bg-opacity-70 transition-all"
          style={{ backgroundImage: `url('https://www.nintendo.com/eu/media/images/10_share_images/portals_3/2x1_SuperMarioHub_image1600w.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          Game 1
        </button>
      </div>
      <div className="relative w-64 h-40">
        <button
          className="absolute inset-0 w-full h-full bg-blue-500 bg-opacity-60 text-white text-3xl font-bold rounded-lg shadow-md hover:bg-opacity-70 transition-all"
          style={{ backgroundImage: `url('/path/to/game2-image.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          Game 2
        </button>
      </div>
    </div>
  );
};

export default GameButtons;