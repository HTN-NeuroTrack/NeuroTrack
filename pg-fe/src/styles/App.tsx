import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import UnityPage1 from '../pages/Game 1';
import UnityPage2 from '../pages/Game 2';
import Login from '../components/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path="/game1" element={<UnityPage1 />} ></Route>
        <Route path="/game2" element={<UnityPage2 />} ></Route>
      </Routes>
    </Router>
  );
};

export default App;

