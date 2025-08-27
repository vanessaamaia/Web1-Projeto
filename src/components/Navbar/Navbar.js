import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header className="cabecalho">
      <nav className="menu-navegacao">
        <ul className="lista-links">
          <li><NavLink to="/" className="nav-link">Home</NavLink></li>
          <li><NavLink to="/horario-aulas" className="nav-link">Horário das Aulas</NavLink></li>
          <li><NavLink to="/pre-matricula" className="nav-link">Pré-Matrícula</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;