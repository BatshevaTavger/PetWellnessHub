import React, { useEffect, useState } from 'react';
import { User } from '../../interfaces/user.interface';
import { delateUser, getUsers, updateUser } from '../../api/user.api'
import { Button, Typography, Container, List, ListItem, ListItemText, TextField, Box, Paper } from '@mui/material';

export const usersManager = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [getArrUsers, setGetArrUsers] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUsers();
                console.log(data);
                setUsers(data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchData();
    }, [getArrUsers]);

    const deleteThisUser = async (id: number) => {
        await delateUser(id);
        setGetArrUsers(!getArrUsers);
    }

    const updateThisUser = (id: number) => {
        const userToUpdate = users.find(user => user._id === id);
        if (userToUpdate) {
            setName(userToUpdate.name);
            setEmail(userToUpdate.email);
            setPassword(userToUpdate.password);
            setSelectedUserId(id);
        }
    };

    const updateUserData = async () => {
        await updateUser(selectedUserId, name, password, email);
        setName('');
        setEmail('');
        setGetArrUsers(!getArrUsers);
        setSelectedUserId(0);
    };

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                All Users
            </Typography>
            <List>
                {users.map((user) => (
                    user.isAdmin ? null : (
                        <Paper elevation={3} key={user._id} style={{ marginBottom: '16px', padding: '16px', borderRadius: '8px' }}>
                            <ListItem>
                                <ListItemText
                                    primary={
                                        <>
                                            <Typography variant="body1"><strong>Name: </strong>{user.name}</Typography>
                                            <Typography variant="body1"><strong>Email: </strong>{user.email}</Typography>
                                        </>
                                    }
                                />
                                <Button variant="contained" color="primary" onClick={() => updateThisUser(user._id)} style={{ marginRight: '8px' }}>
                                    Update user
                                </Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteThisUser(user._id)}>
                                    Delete user
                                </Button>
                            </ListItem>
                        </Paper>
                    )
                ))}
            </List>
            {selectedUserId !== 0 && (
                <Box component="form" className="custom-form" style={{ marginTop: '16px' }}>
                    <TextField
                        type="text"
                        label="Enter name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        type="text"
                        label="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        type="password"
                        label="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" onClick={updateUserData}>
                        OK
                    </Button>
                </Box>
            )}
        </Container>
    );
};

export default usersManager;
