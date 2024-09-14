import React from 'react';
import Dashboard from '../components/Dashboard';
import GamesButtons from '../components/GameButtons';
import TeamMembers from '../components/TeamMembers';
import '../styles/App.css';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <header className="header">
        <h1 className="project-name">Pulsegrip</h1>
        <button className="learn-more-button" onClick={() => navigate('/learn-more')}>
          Learn More
        </button>
      </header>

      <Dashboard />
      <GamesButtons />
      <TeamMembers />
    </div>
  );
};

export default HomePage;