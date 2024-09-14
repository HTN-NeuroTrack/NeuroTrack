import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faDumbbell, faRuler, faMedal } from '@fortawesome/free-solid-svg-icons';

const Dashboard: React.FC = () => {
  const [threshold, setThreshold] = useState(50);  // Default threshold
  const [motorSpeed, setMotorSpeed] = useState(0);
  const [motorAngle, setMotorAngle] = useState(0);
  const [maxStrength, setMaxStrength] = useState(0);
  const [highScore, setHighScore] = useState(0);  // For high score
  const [gameSessionId, setGameSessionId] = useState('');  // Manage game session ID

  // Get the token from local storage
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchMachineData = async () => {
      if (!gameSessionId || !token) return;

      try {
        // Fetch game session data
        const response = await fetch(`http://3.80.75.14:8080/data/getGameSessionResult/${gameSessionId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const data = await response.json();
        setMotorSpeed(data.motorSpeeds || 0);
        setMotorAngle(data.motorAngles || 0);
        setMaxStrength(data.EMGoutputs || 0);

        // Fetch high score
        const scoreResponse = await fetch(`http://3.80.75.14:8080/data/topScores/some-game-id`, {
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

    fetchMachineData();
  }, [gameSessionId, token]);

  const handleSliderChange = async (value: number) => {
    setThreshold(value);

    // Call API to update the threshold value
    try {
      const response = await fetch('http://3.80.75.14:8080/data/threshold', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          gameId: 'some-game-id',  // Replace with actual game ID if needed
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

  // Example function to set a game session ID (You will need to provide the logic to set this)
  const handleSetGameSessionId = (id: string) => {
    setGameSessionId(id);
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
        </div>
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faRuler} className="text-blue-500 text-4xl" />
          <div>
            <p className="text-lg text-gray-700">Motor Angle</p>
            <p className="text-xl font-semibold text-gray-900">{motorAngle}°</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faTachometerAlt} className="text-red-500 text-4xl" />
          <div>
            <p className="text-lg text-gray-700">Motor Speed</p>
            <p className="text-xl font-semibold text-gray-900">{motorSpeed} RPM</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <FontAwesomeIcon icon={faDumbbell} className="text-green-500 text-4xl" />
          <div>
            <p className="text-lg text-gray-700">Max Strength</p>
            <p className="text-xl font-semibold text-gray-900">{maxStrength} kg</p>
          </div>
        </div>
      </div>
      <Slider value={threshold} onChange={handleSliderChange} />
    </div>
  );
};

export default Dashboard;
