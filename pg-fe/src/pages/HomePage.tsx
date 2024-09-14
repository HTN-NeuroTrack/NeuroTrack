import React, { useState } from 'react';
import Dashboard from '../components/Dashboard';
import GameButtons from '../components/GameButtons';
import TeamMembers from '../components/TeamMembers';
import Keybinds from '../components/Keybind';
import KeybindTest from '../components/Keybindtest';
import logo from '../assets/logo.png';

const HomePage: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [keybind, setKeybind] = useState<string>('');
  const [isClosed, setIsClosed] = useState<boolean>(false);

  const handleKeybindChange = (newKeybind: string) => {
    setKeybind(newKeybind);
    console.log('New Keybind:', newKeybind);

  };

  const handleIsClosedChange = (newIsClosed: boolean) => {
    setIsClosed(newIsClosed);
    console.log('Is Closed:', newIsClosed);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center bg-gray-800 text-white p-4 rounded-lg shadow-md">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Company Logo" className="w-20 h-20" />  
          <h1 className="text-2xl font-bold">Pulsegrip</h1>
        </div>
        <div className="flex space-x-2">
          <a href="https://github.com/PulseGrip" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-3 py-1 rounded-md shadow-sm hover:bg-gray-600 transition-all">GitHub</a>
          <a href="https://www.youtube.com/BLANK" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-3 py-1 rounded-md shadow-sm hover:bg-gray-600 transition-all">YouTube</a>
          <a href="https://devpost.com/software/pulsegrip" target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-3 py-1 rounded-md shadow-sm hover:bg-gray-600 transition-all">Devpost</a>
        </div>
      </header>

      <main className="mt-8">
        <Dashboard onIsClosedChange={handleIsClosedChange} />
        <GameButtons />
        <Keybinds onChange={handleKeybindChange} isClosed={isClosed} />
        <KeybindTest keybind={keybind} isClosed={isClosed} />
        <TeamMembers />
      </main>
    </div>
  );
};

export default HomePage;