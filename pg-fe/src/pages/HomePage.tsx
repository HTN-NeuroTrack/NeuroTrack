import React from 'react';
import Dashboard from '../components/Dashboard';
import GameButtons from '../components/GameButtons';
import TeamMembers from '../components/TeamMembers';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="flex justify-between items-center bg-gray-800 text-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold">Pulsegrip</h1>
        <button className="bg-blue-500 px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition-all">
          Learn More
        </button>
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