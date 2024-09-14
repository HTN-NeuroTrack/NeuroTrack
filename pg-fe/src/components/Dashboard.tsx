import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faDumbbell, faRuler, faMedal, faHandFist, faHand } from '@fortawesome/free-solid-svg-icons';

interface DashboardProps {
  onIsClosedChange: (newIsClosed: boolean) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onIsClosedChange }) => {
  const [threshold, setThreshold] = useState(50);  // Default threshold
  const [selectedGame, setSelectedGame] = useState('game1');  // Default to game 1
  const [gameId, setGameId] = useState('66e51cad02e3b2ff683a209e');  // Default to game 1 ID
  const [motorSpeed, setMotorSpeed] = useState(0);
  const [motorAngle, setMotorAngle] = useState(0);
  const [closed, isClosed] = useState(false);
  const [highScore, setHighScore] = useState(0);  // For high score

  // Get the token from local storage
  const token = localStorage.getItem('token');

  const fetchMachineData = async () => {
    try {
      // Fetch game session data
      const response = await fetch(`https://pulsegrip.design/data/EMGdetails`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await response.json();
      console.log('Machine data:', data);
      setMotorSpeed(data[0].motorSpeed || 0);
      setMotorAngle(data[0].motorAngle || 0);
      isClosed(data[0].isClosed || false);
    } catch (error) {
      console.error('Error fetching machine data:', error);
    }
  };
  const fetchMachineData2 = async () => {
    try {
      // Fetch threshold
      const thresholdResponse = await fetch('https://pulsegrip.design/data/threshold', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const thresholdData = await thresholdResponse.json();
      setThreshold(thresholdData || 50);
      // Fetch high score
      const scoreResponse = await fetch(`https://pulsegrip.design/data/topScores/${gameId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const scores = await scoreResponse.json();
      setHighScore(scores[0]?.score || 0);  // Assuming the highest score is the first element
    } catch (error) {
      console.error('Error fetching machine data:', error);
    }
  };

  useEffect(() => {
    fetchMachineData();
    fetchMachineData2();
  }, [gameId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchMachineData();
    }, 5000); // Call fetchMachineData every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [token]);

  const handleSliderChange = async (value: number) => {
    setThreshold(value);

    // Call API to update the threshold value
    try {
      const response = await fetch('https://pulsegrip.design/data/threshold', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          threshold: value
        })
      });
      if (response.ok) {
        console.log('Threshold updated successfully');
      } else {
        console.error('Failed to update threshold');
      }
    } catch (error) {
      console.error('Error updating threshold:', error);
    }
  };

  const handleGameChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGame = event.target.value;
    setSelectedGame(selectedGame);
    if (selectedGame === 'game1') {
      setGameId('66e51cad02e3b2ff683a209e');
    } else if (selectedGame === 'game2') {
      setGameId('66e51cd702e3b2ff683a209f');
    }
  };

  // Example function to change isClosed state in HomePage
  const closeDashboard = () => {
    onIsClosedChange(true);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h2>
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
      <Slider value={threshold} onChange={handleSliderChange} />
    </div>
  );
};

export default Dashboard;