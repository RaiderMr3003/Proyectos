import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import TeamPage from './pages/TeamPage';
import HistoryPage from './pages/HistoryPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/noticias" element={<NewsPage />} />
        <Route path="/plantilla" element={<TeamPage />} />
        <Route path="/historia" element={<HistoryPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
