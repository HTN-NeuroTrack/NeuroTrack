import React from 'react';
import { useNavigate } from 'react-router-dom';

const GameButtons: React.FC = () => {
  const navigate = useNavigate();

  const handleGame1Click = () => {
    navigate('/game1'); 
  };

  const handleGame2Click = () => {
    navigate('/game2'); 
  };

  return (
<div className="flex justify-center gap-8 mt-8">
  <div className="relative w-64 h-40">
    <button
      onClick={handleGame1Click}
      className="absolute inset-0 w-full h-full bg-orange-500 bg-opacity-60 text-white text-3xl font-bold rounded-lg shadow-md hover:bg-opacity-70 transition-all"
      style={{ backgroundImage: `url('https://png.pngtree.com/png-clipart/20220730/ourmid/pngtree-cartoon-knife-png-image_6093279.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div> {/* Overlay */}
      <span className="relative z-10 text-shadow-lg">Hand Ninja</span> {/* Text */}
    </button>
  </div>
  <div className="relative w-64 h-40">
    <button
      onClick={handleGame2Click}
      className="absolute inset-0 w-full h-full bg-blue-500 bg-opacity-60 text-white text-3xl font-bold rounded-lg shadow-md hover:bg-opacity-70 transition-all"
      style={{ backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/021/629/732/original/3d-illustration-of-dart-bullseye-target-png.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div> {/* Overlay */}
      <span className="relative z-10 text-shadow-lg">Target Tracker</span> {/* Text */}
    </button>
  </div>
</div>
  );
};

export default GameButtons;