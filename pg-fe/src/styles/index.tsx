// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App'; // Homepage component
import LearnMorePage from '../pages/LearnMorePage'; // Placeholder for the "Learn More" page
import './styles/App.css'; // Custom styles

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Set the default route to the homepage */}
        <Route path="/" element={<App />} />
        {/* "Learn More" page route */}
        <Route path="/learn-more" element={<LearnMorePage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);