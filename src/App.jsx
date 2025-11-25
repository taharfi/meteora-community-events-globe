import React, { useState } from 'react';
import GlobeComponent from './components/Globe';
import EventForm from './components/EventForm';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Simulator from './components/Simulator';
import { eventsData } from './data/events';
import './components/Sidebar.css';
import './components/Header.css';
import './components/Simulator.css';

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
        <EventForm onAddEvent={addEvent} />
        <Simulator />
      </Sidebar>
    </>
  )
}

export default App;
