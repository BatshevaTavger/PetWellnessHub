import React, { useEffect, useState } from 'react';
import { getAllMeetings } from '../../api/meet.api';
import { delateMeeting } from '../../api/meet.api'
import { useNavigate } from 'react-router-dom';

interface Meeting {
    _id: number;
    userId: number;
    time: string;
    date: string;
    place: string;
    common: string;
}
export const MeetingManager = () => {
    const [meeting, setMeeting] = useState<Meeting[]>([]);
    const [flag, setFlag] = useState(false)
    const navigate = useNavigate();

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
    }, [flag]);

    const deleteMeeting = async (id: number) => {
        const data = await delateMeeting(id);
        alert(data);
        setFlag(!flag);
    }

    // const updateMeeting = async (id: number) => {
    // console.log({ time, date, place })
    // const valuesToSend = {
    //     date: date,
    //     time: time,
    //     location: place,
    // };
    // navigate('manager/meetingManager/update', { state: { id: id } });
    // }

    return (
        <div>
            <h1>All Meetings</h1>
            {meeting.length ? (
                <ul>
                    {meeting.map((meet) => (
                        <div key={meet._id}>
                            <strong>Time: </strong>  {meet.time}
                            <strong>Date: </strong>  {meet.date}
                            <strong>Place: </strong>  {meet.place}
                            <strong>Common: </strong>  {meet.common}
                            {meet._id}
                            <button onClick={() => deleteMeeting(meet._id)}>Delate meet</button>
                            {/* <button onClick={() => updateMeeting(meet._id)}>Update meet</button> */}
                        </div>
                    ))}
                </ul>
            ) : (
                <h2>You don't have any meetings yet.</h2>
            )}

        </div>
    );
};

export default MeetingManager;
