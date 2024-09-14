import React from 'react';
import Dashboard from '../components/Dashboard';
import GameButtons from '../components/GameButtons';
import TeamMembers from '../components/TeamMembers';
import logo from '../assets/logo.png';  

const HomePage: React.FC = () => {
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
        <Dashboard />
        <GameButtons />
        <TeamMembers />
      </main>
    </div>
  );
};

export default HomePage;