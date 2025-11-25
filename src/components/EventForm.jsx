import React, { useState } from 'react';

const EventForm = ({ onAddEvent }) => {
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!lat || !lng) return;
    onAddEvent({
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      size: Math.random() / 3,
      color: `hsla(${Math.random() * 360}, 100%, 50%, 0.8)`,
      description,
    });
    setLat('');
    setLng('');
    setDescription('');
  };

  return (
    <div style={{ position: 'absolute', top: 20, left: 20, zIndex: 1, backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: 10, borderRadius: 5 }}>
      <h3>Add New Event</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Latitude"
          value={lat}
          onChange={(e) => setLat(e.target.value)}
          step="any"
          required
        />
        <input
          type="number"
          placeholder="Longitude"
          value={lng}
          onChange={(e) => setLng(e.target.value)}
          step="any"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default EventForm;
