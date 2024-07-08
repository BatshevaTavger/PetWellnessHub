import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText, Divider, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/3778545.jpg'; 

const Manager = () => {
    return (
        <Container style={{ 
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url(${backgroundImage})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            minHeight: '80vh', 
            minWidth: '100vh', 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            <Box textAlign="center" mb={4}>
                <Typography variant="h2" gutterBottom style={{ fontWeight: 'bold' }}>
                    שלום המנהל
                </Typography>
                <Typography variant="h4" gutterBottom style={{ fontStyle: 'italic' }}>
                    להלן פרטי האתר שלך:
                </Typography>
                <Typography variant="h5" paragraph>
                    האתר שלך הוא פורטל לניהול פגישות ושירותים עבור וטרינריה לחיות מחמד. דרך האתר, לקוחות יכולים לקבוע פגישות,
                    לצפות בשירותים המוצעים וליצור קשר עם המרפאה הוטרינרית.
                </Typography>
            </Box>
            <Box textAlign="center" mb={4}>
                <Typography variant="h4" gutterBottom style={{ fontStyle: 'italic' }}>
                    הנה האפשרויות שלך כמנהל:
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary="לצפות/לעדכן/למחוק בכל השירותים שהאתר נותן" style={{ fontSize: '1.2em', textAlign: 'center' }} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="לצפות/למחוק משתמשים מהאתר" style={{ fontSize: '1.2em', textAlign: 'center' }} />
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemText primary="לצפות/למחוק/לעדכן את כל הפגישות של כל המשתמשים באתר" style={{ fontSize: '1.2em', textAlign: 'center' }} />
                    </ListItem>
                </List>
            </Box>
            <Box textAlign="center" mt={3}>
                <Typography variant="h4" gutterBottom style={{ fontStyle: 'italic' }}>
                    ניווט מהיר:
                </Typography>
                <List>
                    <ListItem button component={Link} to="./servicesManager" style={{ justifyContent: 'center' }}>
                        <MuiLink component="button" variant="body1" style={{ color: 'blue', fontSize: '1.2em', textDecoration: 'none' }}>
                            ניהול שירותים
                        </MuiLink>
                    </ListItem>
                    <ListItem button component={Link} to="./usersManager" style={{ justifyContent: 'center' }}>
                        <MuiLink component="button" variant="body1" style={{ color: 'blue', fontSize: '1.2em', textDecoration: 'none' }}>
                            ניהול משתמשים
                        </MuiLink>
                    </ListItem>
                    <ListItem button component={Link} to="./meetingManager" style={{ justifyContent: 'center' }}>
                        <MuiLink component="button" variant="body1" style={{ color: 'blue', fontSize: '1.2em', textDecoration: 'none' }}>
                            ניהול פגישות
                        </MuiLink>
                    </ListItem>
                </List>
            </Box>
        </Container>
    );
};

export default Manager;

