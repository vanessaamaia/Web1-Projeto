import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import PreMatriculaPage from './pages/PreMatriculaPage/PreMatriculaPage';
import HomePage from './pages/HomePage/HomePage';
import HorarioAulasPage from './pages/HorarioAulasPage/HorarioAulasPage';
import Footer from './pages/Footer/Footer.js';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="App-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/horario-aulas" element={<HorarioAulasPage />} />
            <Route path="/pre-matricula" element={<PreMatriculaPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;