import React, { useState } from 'react';
import { addMeeting } from '../api/meet.api';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [appointmentMessage, setAppointmentMessage] = useState('');
  const [noteToBusiness, setNoteToBusiness] = useState("");

  const userId = localStorage.getItem('userId') || null;

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      time: selectedTime,
      date: selectedDate.toISOString().substring(0, 10),
      place: selectedLocation,
      common: noteToBusiness,
    };

    const response = await addMeeting(userId, data);
    if (response.status == 201)
      setAppointmentMessage(response.data);
    if (response.status == 200)
      setAppointmentMessage(`נקבע לך תור בשעה ${selectedTime} בתאריך ${selectedDate.toLocaleDateString()} ב ${selectedLocation}.`);
  };
  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };
  const handleDateChange = (event) => {
    setSelectedDate(new Date(event.target.value));
  };
  const handleNoteChange = (event) => {
    setNoteToBusiness(event.target.value);
  };
  

  return (
    <div>
      <form className="custom-form" onSubmit={handleSubmit}>
        <label>תאריך:</label>
        <input type="date" value={selectedDate.toISOString().substring(0, 10)} onChange={handleDateChange} />
        <br />

        <label>שעה:</label>
        <input type="time" value={selectedTime} onChange={handleTimeChange} />
        <br />

        <label>מיקום:</label>
        <select value={selectedLocation} onChange={handleLocationChange}>
          <option value="">בחר מיקום</option>
          <option value="סניף 1">סניף 1</option>
          <option value="סניף 2">סניף 2</option>
          <option value="סניף 3">סניף 3</option>
        </select>
        <br />
        <label>הערה לבעל העסק:</label>
        <textarea
          value={noteToBusiness}
          onChange={handleNoteChange}
          placeholder="הזן הערה כאן"
        />
        <br />

        <button type="submit">קבע תור</button>
        <p>{appointmentMessage}</p>
      </form>
      <button><Link to={'/services'}>return back</Link></button>
    </div>
  );
};

export default AppointmentForm;
