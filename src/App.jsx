import React, { useState } from 'react';
import GlobeComponent from './components/Globe';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StrategyBuilder from './components/StrategyBuilder';
import { eventsData } from './data/events';
import './components/Sidebar.css';
import './components/Header.css';
import './components/StrategyBuilder.css';

function App() {
  const [events, setEvents] = useState(eventsData);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <GlobeComponent pointsData={events} />
      <Sidebar isOpen={isSidebarOpen}>
        <StrategyBuilder />
      </Sidebar>
    </>
  )
}

export default App;
