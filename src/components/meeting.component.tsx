import React, { useContext, useEffect, useState } from 'react';
import { getMeetings } from '../api/meet.api';
import { Meeting as Meet } from '../interfaces/meeting.interface';
import { CurrentContextUser } from '../context/user.context';

export const Meeting = () => {
    const [meeting, setMeeting] = useState<Meet[]>([]);
    const currentUserContext = useContext(CurrentContextUser);
    const { currentUser } = currentUserContext; 

    const userId = currentUser._id || localStorage.getItem('userId');

    useEffect(() => {
        const fetchData = async () => {
            if (userId != null) {
                try {
                    const data = await getMeetings(userId);
                    setMeeting(data);
                } catch (error) {
                    console.error('Error fetching services:', error);
                }
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>Your Meetings</h1>
            {meeting.length ? (
                <ul>
                    {meeting.map((meet) => (
                        <div key={meet._id}>
                            <strong>Time: </strong>  {meet.time}
                            <strong>Date: </strong>  {meet.date}
                            <strong>Place: </strong>  {meet.place}
                            <strong>Common: </strong>  {meet.common}
                        </div>
                    ))}
                </ul>
            ) : (
                <h2>You don't have any meetings yet.</h2>
            )}

        </div>
    );
};

export default Meeting;
