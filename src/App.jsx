import React, { useState } from 'react';
import GlobeComponent from './components/Globe';
import EventForm from './components/EventForm';

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <>
      <div style={{ position: 'absolute', top: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 1, color: 'white', textAlign: 'center' }}>
        <img src="/vite.svg" alt="logo" style={{ width: 50, height: 50 }} />
        <h1>Community Events Globe</h1>
      </div>
      <GlobeComponent pointsData={events} />
      <EventForm onAddEvent={addEvent} />
    </>
  )
}

export default App;
