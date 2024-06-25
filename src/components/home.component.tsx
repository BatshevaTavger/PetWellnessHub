import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>ברוכים הבאים לאתר שלנו</h1>
            <p>אנחנו מתמחים בפאות איכותיות ומגוון שירותים נלווים.</p>
            <div>
                <button><Link to={'/sign-up'}>To register</Link></button>
                <button><Link to={'/sign-in'}>To connect</Link></button>    
            </div>
        </div>
    );
};

export default Home;
