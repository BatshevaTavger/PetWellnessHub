import React, { useEffect, useState } from 'react';
import { getServices } from '../api/services.api';
import { Link } from 'react-router-dom';
import {
    Typography,
    Box,
    Button,
    Card,
    CardContent,
    CardActions,
    Grid,
    Link as MuiLink,
    Stack,
    Container,
} from '@mui/material';
import logo from '../assets/LOGO.png';

interface Service {
    _id: number;
    price: string;
    description: string;
}

export const Services = () => {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getServices();
                setServices(data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Container maxWidth="lg">
                <img src={logo} alt="Description of Image 1" style={{ width: '50%' }} />

                <Box mt={4}>
                    <Typography variant="h2" gutterBottom>Our Services</Typography>
                </Box>

                <Grid container spacing={2}>
                    {services.map((service) => (
                        <Grid item xs={6} key={service._id}>
                            <Card sx={{ boxShadow: 6 }}>
                                <CardContent>
                                    <Stack direction="column" spacing={2}>
                                        <Stack direction="row" alignItems="center" spacing={1}>
                                            <Stack>
                                                <Typography variant="h5" color="primary">
                                                    {service.price}
                                                </Typography>
                                                <Box mt={2}>
                                                    <Typography variant="body1">
                                                        <strong>Price: {service.description}</strong>
                                                    </Typography>
                                                </Box>
                                            </Stack>
                                        </Stack>
                                        <CardActions>
                                            <Button variant="contained" component={Link} to="/appointmentForm">
                                                Book Appointment
                                            </Button>
                                        </CardActions>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    );
};

export default Services;
