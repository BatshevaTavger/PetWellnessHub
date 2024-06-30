import React, { useContext, useEffect, useState } from 'react';
import { addMeeting, getMeetings } from '../api/meet.api';
import { Link, useParams } from 'react-router-dom';
import { MeetingContext } from '../context/meet.context';
import Meeting from './meeting.component';

const Common = (props: any) => {
    interface Meeting {
        _id: number;
        userId: number;
        time: string;
        date: string;
        place: string;
        common: string;
    }

    return (
        <div>
            <h1>hiii</h1>
            <textarea

                placeholder="הזן הערה כאן"

            />
        </div>
    );
};

export default Common;
