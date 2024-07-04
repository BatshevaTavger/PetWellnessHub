import React, { useState, useEffect, useContext } from 'react';
import { Link, Route, Router } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './index.css';
import { CurrentContextUser } from '../context/user.context';

const Home = () => {
    const [userName, setUserName] = useState('');
    const currentUserContext = useContext(CurrentContextUser);
    const { currentUser } = currentUserContext; 

    useEffect(() => {
        const storedUserName = currentUser.name || localStorage.getItem('user-name');
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
        </div>
    );
};

export default Home;

