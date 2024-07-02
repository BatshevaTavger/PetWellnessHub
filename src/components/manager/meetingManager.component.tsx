import React, { useEffect, useState } from 'react';
import { getAllMeetings, updateMeeting } from '../../api/meet.api';
import { delateMeeting } from '../../api/meet.api'
import { Meeting } from '../../interfaces/meeting.interface';
import '../../style/meetingManager.css'

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
        <div>
            <h1>All Meetings</h1>
            {meeting.length ? (
                <ul>
                    {meeting.map((meet) => (
                        <div className='meeting-item' key={meet._id}>
                            <strong>Time: </strong>  {meet.time}
                            <strong>Date: </strong>  {meet.date}
                            <strong>Place: </strong>  {meet.place}
                            <strong>Common: </strong>  {meet.common}
                            <button className='meeting-item button' onClick={() => deleteMeeting(meet._id)}>Delate meet</button>
                            <button className='meeting-item button' onClick={() => updateThisMeeting(meet._id)}>Update meet</button>
                        </div>
                    ))}
                </ul>
            ) : (
                <h2>You don't have any meetings yet.</h2>
            )}
            {selectedMeetId !== 0 && (
                <form className="custom-form">
                    <input
                        type="time"
                        placeholder="Select time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    />
                    <input
                        type="date"
                        placeholder="Select date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                    <select onChange={(e) => setPlace(e.target.value)}>
                        <option value="">{place}</option>
                        <option value="סניף 1">סניף 1</option>
                        <option value="סניף 2">סניף 2</option>
                        <option value="סניף 3">סניף 3</option>
                    </select>
                    <button type="button" onClick={updateMeetData}>OK</button>
                </form>
            )}

        </div>
    );
};

export default MeetingManager;
