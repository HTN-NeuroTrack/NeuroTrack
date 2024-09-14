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
          className="absolute inset-0 w-full h-full bg-blue-500 bg-opacity-60 text-white text-3xl font-bold rounded-lg shadow-md hover:bg-opacity-70 transition-all"
          style={{ backgroundImage: `url('https://www.flutterclutter.dev/images/posts/2020-07-24-flutter-game-tutorial-fruit-ninja-clone/flutter-fruit-ninja-clone.svg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          Game 1
        </button>
      </div>
      <div className="relative w-64 h-40">
        <button
          onClick={handleGame2Click}
          className="absolute inset-0 w-full h-full bg-blue-500 bg-opacity-60 text-white text-3xl font-bold rounded-lg shadow-md hover:bg-opacity-70 transition-all"
          style={{ backgroundImage: `url('https://img.itch.zone/aW1nLzY0MDk3NTQucG5n/original/ldBlwA.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          Game 2
        </button>
      </div>
    </div>
  );
};

export default GameButtons;