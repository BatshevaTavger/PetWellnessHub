import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const userName = localStorage.getItem('user-name');

    return (
        <div>
            <h1>ברוכים הבאים לאתר שלנו</h1>
            <p>אנחנו מתמחים בפאות איכותיות ומגוון שירותים נלווים.</p>
            <div>
                <button><Link to={'/sign-up'}>To register</Link></button>
                <button><Link to={'/sign-in'}>To connect</Link></button>    
                {userName ? <h1>ברוך הבא, {userName}!</h1> : <h1>ברוך הבא!</h1>}
            </div>
        </div>
    );
};

export default Home;
