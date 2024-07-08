import React, { useEffect, useState } from 'react';
import { getAllMeetings, updateMeeting } from '../../api/meet.api';
import { delateMeeting } from '../../api/meet.api'
import { Meeting } from '../../interfaces/meeting.interface';
import '../../style/meetingManager.css'
import { Container, Typography, List, ListItem, ListItemText, Divider, Box, Button, IconButton, Stack, Card, CardContent, CardActions, Grid, FormControl, InputLabel, Select, MenuItem, TextField, Paper } from '@mui/material';


export const MeetingManager = () => {
    const [meeting, setMeeting] = useState<Meeting[]>([]);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [place, setPlace] = useState('');
    const [getMeeting, setGetMeeting] = useState(false);
    const [selectedMeetId, setSelectedMeetId] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllMeetings();
                console.log(data);
                setMeeting(data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };
        fetchData();
    }, [getMeeting]);

    const deleteMeeting = async (id: number) => {
        await delateMeeting(id);
        setGetMeeting(!getMeeting);
    }

    const updateThisMeeting = (id: number) => {
        const meetingToUpdate = meeting.find(meet => meet._id === id);
        if (meetingToUpdate) {
            setTime(meetingToUpdate.time);
            setDate(meetingToUpdate.date);
            setPlace(meetingToUpdate.place);
            setSelectedMeetId(id);
        }
    };

    const updateMeetData = async () => {
        await updateMeeting(selectedMeetId, place, time, date);
        setTime('');
        setDate('');
        setPlace('');
        setGetMeeting(!getMeeting);
        setSelectedMeetId(0);
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                All Meetings
            </Typography>
            {meeting.length ? (
                <List>
                    {meeting.map((meet) => (
                        <Paper elevation={3} key={meet._id} style={{ marginBottom: '16px', padding: '16px', borderRadius: '8px' }}>
                            <ListItem className="meeting-item">
                                <ListItemText
                                    primary={
                                        <>
                                            <Typography variant="body1"><strong>Time: </strong>{meet.time}</Typography>
                                            <Typography variant="body1"><strong>Date: </strong>{meet.date}</Typography>
                                            <Typography variant="body1"><strong>Place: </strong>{meet.place}</Typography>
                                            <Typography variant="body1"><strong>Common: </strong>{meet.common}</Typography>
                                        </>
                                    }
                                />
                                <Button variant="contained" color="secondary" onClick={() => deleteMeeting(meet._id)} style={{ marginRight: '8px' }}>
                                    Delete meet
                                </Button>
                                <Button variant="contained" color="primary" onClick={() => updateThisMeeting(meet._id)}>
                                    Update meet
                                </Button>
                            </ListItem>
                        </Paper>
                    ))}
                </List>
            ) : (
                <Typography variant="h6">You don't have any meetings yet.</Typography>
            )}
            {selectedMeetId !== 0 && (
                <Box component="form" className="custom-form">
                    <TextField
                        type="time"
                        label="Select time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        type="date"
                        label="Select date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Place</InputLabel>
                        <Select value={place} onChange={(e) => setPlace(e.target.value)}>
                            <MenuItem value="">{place}</MenuItem>
                            <MenuItem value="סניף 1">סניף 1</MenuItem>
                            <MenuItem value="סניף 2">סניף 2</MenuItem>
                            <MenuItem value="סניף 3">סניף 3</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" color="primary" onClick={updateMeetData}>
                        OK
                    </Button>
                </Box>
            )}
        </Container>
    );
};

export default MeetingManager;
