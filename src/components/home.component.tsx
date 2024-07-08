import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CurrentContextUser } from '../context/user.context';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box,
    Card,
    CardContent,
    Grid,
} from '@mui/material';
import icon1 from '../assets/icon1.png'; 
import icon2 from '../assets/icon2.png'; 

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
        <div >
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">האתר שלנו</Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth="md">
                <Box mt={4}>
                    <Typography variant="h4" gutterBottom>ברוכים הבאים לאתר שלנו</Typography>
                    <Typography variant="body1">
                        אנו מתמחים בשירותי וטרינריה לחיות מחמד ובכל מה שקשור לטיפול בחיות המחמד שלכם.
                    </Typography>
                </Box>

                <Box mt={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Card>
                                <CardContent>
                                    <img src={icon1} alt="Description of Image 1" style={{ width: '50%' }} />
                                    {/* Add more images or content */}
                                    <Button variant="contained" component={Link} to="/sign-in">
                                        היכנסו
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card>
                                <CardContent>
                                <img src={icon2} alt="Description of Image 1" style={{ width: '50%' }} />

                                    <Button variant="contained" component={Link} to="/sign-up">
                                        הירשמו
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>

                {userName ? (
                    <Box mt={4}>
                        <Typography variant="h5">ברוכים הבאים, {userName}!</Typography>
                        <Box mt={2}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Button variant="contained" component={Link} to="/services">
                                        השירותים שלנו
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="contained" component={Link} to="/meeting">
                                        הפגישות שלך
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box mt={2}>
                            <Button variant="contained" onClick={handleLogout}>
                                התנתקות
                            </Button>
                        </Box>
                    </Box>
                ) : null}
            </Container>
        </div>
    );
};

export default Home;
