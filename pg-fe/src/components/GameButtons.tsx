import React from 'react';
import { useNavigate } from 'react-router-dom';

const GamesButtons: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="games-buttons">
      <button onClick={() => navigate('/game1')}>Game 1</button>
      <button onClick={() => navigate('/game2')}>Game 2</button>
    </div>
  );
};

export default GamesButtons;