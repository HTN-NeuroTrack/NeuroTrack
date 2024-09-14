import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faRuler, faMedal, faHandFist, faHand } from '@fortawesome/free-solid-svg-icons';

interface DashboardProps {
  onIsClosedChange: (newIsClosed: boolean) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onIsClosedChange }) => {
  const [selectedGame, setSelectedGame] = useState('game1');  // Default to game 1
  const [gameId, setGameId] = useState('66e51cad02e3b2ff683a209e');  // Default to game 1 ID
  const [motorSpeed, setMotorSpeed] = useState(0);
  const [motorAngle, setMotorAngle] = useState(0);
  const [closed, setClosed] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [updateTime, setUpdateTime] = useState(6500);
  const [playingNow, setPlayingNow] = useState(false);

  // Get the token from local storage
  const token = localStorage.getItem('token');

  const handlePlayingNowCheckbox = () => {
    setPlayingNow(!playingNow);
    setUpdateTime(!playingNow ? 100 : 6500);
  };

  const fetchMachineData = async () => {
    try {
      // Fetch game session data
      const response = await fetch(`https://pulsegrip.design/data/EMGdetails`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      setMotorSpeed(data[0].motorSpeed || 0);
      setMotorAngle(data[0].motorAngle || 0);
      setClosed(data[0].isClosed || false);
      onIsClosedChange(data[0].isClosed || false);
    } catch (error) {
      console.error('Error fetching machine data:', error);
    }
  };

  const fetchHighScore = async () => {
    try {
      // Fetch high score
      const scoreResponse = await fetch(`https://pulsegrip.design/data/topScores/${gameId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const scores = await scoreResponse.json();
      setHighScore(scores[0]?.score || 0);  // Assuming the highest score is the first element
    } catch (error) {
      console.error('Error fetching high score and threshold:', error);
    }
  };

  useEffect(() => {
    fetchMachineData();
  }, [gameId]);

  useEffect(() => {
    fetchHighScore();
  }, [gameId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchMachineData();
    }, updateTime);

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [updateTime, token]);

  const handleGameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGame = event.target.value;
    setSelectedGame(selectedGame);
    if (selectedGame === 'game1') {
      setGameId('66e51cad02e3b2ff683a209e');
    } else if (selectedGame === 'game2') {
      setGameId('66e51cd702e3b2ff683a209f');
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <div className='flex flex-row justify-between'>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h2>
        <label className="flex items-center space-x-3">
          <span className="text-gray-700">Playing Now:</span>
          <input
            type="checkbox"
            className="w-6 h-6 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            checked={playingNow}
            onChange={handlePlayingNowCheckbox}
          />
        </label>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faMedal} className="text-yellow-500 text-4xl" />
          <div>
            <p className="text-lg text-gray-700">High Score</p>
            <p className="text-xl font-semibold text-gray-900">{highScore}</p>
          </div>
          <select value={selectedGame} onChange={handleGameChange} className="ml-4 p-2 border rounded">
            <option value="game1">Game 1</option>
            <option value="game2">Game 2</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faRuler} className="text-blue-500 text-4xl" />
          <div>
            <p className="text-lg text-gray-700">Motor Angle</p>
            <p className="text-xl font-semibold text-gray-900">{motorAngle}°</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faTachometerAlt} className="text-purple-500 text-4xl" />
          <div>
            <p className="text-lg text-gray-700">Motor Speed</p>
            <p className="text-xl font-semibold text-gray-900">{motorSpeed} RPM</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {
            closed ? <FontAwesomeIcon icon={faHandFist} className="text-red-500 text-4xl" /> : <FontAwesomeIcon icon={faHand} className="text-green-500 text-4xl" />
          }
          <div>
            <p className="text-lg text-gray-700">Hand</p>
            <p className="text-xl font-semibold text-gray-900">{
              closed ? 'Closed' : 'Open'
            }</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;