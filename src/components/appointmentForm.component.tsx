import React, { useContext, useState } from 'react';
import { addMeeting } from '../api/meet.api';
import { Link } from 'react-router-dom';
import { CurrentContextUser } from '../context/user.context';
import { Button, Container, TextField, Typography, Select, MenuItem, Box, FormControl, InputLabel, TextareaAutosize } from '@mui/material';

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [appointmentMessage, setAppointmentMessage] = useState('');
  const [noteToBusiness, setNoteToBusiness] = useState("");
  const currentUserContext = useContext(CurrentContextUser);
  const { currentUser } = currentUserContext;

  const userId = currentUser._id;

  const handleSubmit = async (event: any) => {
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
  const handleLocationChange = (event: any) => {
    setSelectedLocation(event.target.value);
  };
  const handleTimeChange = (event: any) => {
    setSelectedTime(event.target.value);
  };
  const handleDateChange = (event: any) => {
    setSelectedDate(new Date(event.target.value));
  };
  const handleNoteChange = (event: any) => {
    setNoteToBusiness(event.target.value);
  };


  return (
    <Container>
      <form className="custom-form" onSubmit={handleSubmit}>
        <Typography variant="h5" gutterBottom>קבע תור</Typography>
        <TextField
          label="תאריך"
          type="date"
          value={selectedDate.toISOString().substring(0, 10)}
          onChange={handleDateChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          label="שעה"
          type="time"
          value={selectedTime}
          onChange={handleTimeChange}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>מיקום</InputLabel>
          <Select value={selectedLocation} onChange={handleLocationChange}>
            <MenuItem value=""><em>בחר מיקום</em></MenuItem>
            <MenuItem value="סניף 1">סניף 1</MenuItem>
            <MenuItem value="סניף 2">סניף 2</MenuItem>
            <MenuItem value="סניף 3">סניף 3</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="הערה לבעל העסק"
          value={noteToBusiness}
          onChange={handleNoteChange}
          placeholder="הזן הערה כאן"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" color="primary" type="submit">קבע תור</Button>
        <Typography variant="body1" color="textSecondary">{appointmentMessage}</Typography>
      </form>
    </Container>
  );
};

export default AppointmentForm;
