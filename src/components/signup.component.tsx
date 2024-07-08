import React, { useContext, useEffect, useState } from 'react';
import { register } from '../api/login.api';
import { useNavigate } from 'react-router-dom';
import { User } from '../interfaces/user.interface';
import { CurrentContextUser } from '../context/user.context';
import { Button, TextField, Typography } from '@mui/material';
import backgroundImage from '../assets/2176677.jpg'; 

export const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const currentUserContext = useContext(CurrentContextUser);
    const { setCurrentUser } = currentUserContext;
    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const data = await register(name, email, password);
            setCurrentUser(data.newUser as User);
            navigate('/');            
            console.log('Registration successful', data);
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
       < div className="sign-in-page" style={{ 
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        minHeight: '80vh', 
        minWidth: '100vh', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }}>
            <Typography variant="h4">SignUp</Typography>
            <br />
            <form className="custom-form" onSubmit={handleSubmit}>
                <TextField label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} fullWidth /> <br />
                <TextField label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} fullWidth /> <br />
                <TextField label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth /> <br /> <br />
                <Button variant="contained" color="primary" type="submit">Connect</Button>
            </form>
        </div>
        
    );
};

export default SignUp;
