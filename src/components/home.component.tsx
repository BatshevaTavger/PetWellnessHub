import React, { useState, useEffect } from 'react';
import { Link, Route, Router } from 'react-router-dom';
import Manager from './manager/manager.component';
import MeetingManager from './manager/meetingManager.component';

const Home = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const storedUserName = localStorage.getItem('user-name');
        if (storedUserName) {
            setUserName(storedUserName);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('user-name');
        setUserName('');
    };

    return (
        <div>
            <h1>Welcome to our site</h1>
            <p>We specialize in quality wigs and a variety of related services.</p>
            <div>
                <button><Link to={'/sign-up'}>To register</Link></button>
                <button><Link to={'/sign-in'}>To connect</Link></button>
                {userName ? (
                    <>
                        <button onClick={handleLogout}>To logout</button>
                        <h1>Welcome, {userName}!</h1>
                        <h3><button><Link to={'/services'}>our services</Link></button></h3>
                        <h3><button><Link to={'/meeting'}>your meeting</Link></button></h3>
                    </>
                ) : null}
            </div>
            <h1>למנהל</h1>
            <button><Link to={'/manager'}>manager</Link></button>

        </div>
    );
};

export default Home;

