import React from 'react';
import './Sidebar.css';

const Sidebar = ({ children, isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
