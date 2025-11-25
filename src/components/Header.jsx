import React from 'react';
import './Header.css';

const Header = ({ onToggleSidebar, isSidebarOpen }) => {
  return (
    <header className="header">
      <div className="logo">
        <button className="sidebar-toggle" onClick={onToggleSidebar}>
          {isSidebarOpen ? 'Close' : 'Add Event'}
        </button>
        <img src="/vite.svg" alt="Meteora Logo" />
        <h1>Meteora Events</h1>
      </div>
      <nav>
        <a href="#events">Events</a>
        <a href="#about">About</a>
        <a href="#community">Community</a>
      </nav>
    </header>
  );
};

export default Header;
