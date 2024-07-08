import React, { useEffect, useState } from 'react';
import { addService, deleteService, getServices, updateService } from '../../api/services.api';
import { Service } from '../../interfaces/service.interface';
import { Button, Typography, Container, List, ListItem, ListItemText, TextField, Box, Paper } from '@mui/material';


export const ServicesManager = () => {
    const [services, setServices] = useState<Service[]>([]);
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [getService, setGetService] = useState(false);
    const [selectedServiceId, setSelectedServiceId] = useState(0);
    const [onClickBTN, setOnClickBTN] = useState(false);

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
    }, [getService]);

    const deleteThisService = async (id: number) => {
        const data = await deleteService(id);
        alert(data);
        setGetService(!getService);
    }

    const updateThisService = (id: number) => {
        const serviceToUpdate = services.find(service => service._id === id);
        if (serviceToUpdate) {
            setPrice(serviceToUpdate.price);
            setDescription(serviceToUpdate.description);
            setSelectedServiceId(id);
        }
    };

    const updateServiceData = async () => {
        await updateService(selectedServiceId, price, description);
        setPrice('');
        setDescription('');
        setGetService(!getService);
        setSelectedServiceId(0);
    };

    const addMoreService = async () => {
        await addService(price, description);
        setPrice('');
        setDescription('');
        setGetService(!getService);
        setOnClickBTN(!onClickBTN)
    }

    return (
        <Container>
            <Typography variant="h4" component="h1" gutterBottom>
                All Services
            </Typography>
            <List>
                {services.map(service => (
                    <Paper elevation={3} key={service._id} style={{ marginBottom: '16px', padding: '16px', borderRadius: '8px' }}>
                        <ListItem>
                            <ListItemText
                                primary={
                                    <>
                                        <Typography variant="body1"><strong>Description: </strong>{service.description}</Typography>
                                        <Typography variant="body1"><strong>Price: </strong>{service.price}</Typography>
                                    </>
                                }
                            />
                            <Button variant="contained" color="primary" onClick={() => updateThisService(service._id)} style={{ marginRight: '8px' }}>
                                Update This Service
                            </Button>
                            <Button variant="contained" color="secondary" onClick={() => deleteThisService(service._id)}>
                                Delete This Service
                            </Button>
                        </ListItem>
                    </Paper>
                ))}
            </List>
            {selectedServiceId !== 0 && (
                <Box component="form" className="custom-form">
                    <TextField
                        type="text"
                        label="Enter price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        type="text"
                        label="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" onClick={updateServiceData}>
                        OK
                    </Button>
                </Box>
            )}
            <Button variant="contained" color="warning" onClick={() => setOnClickBTN(true)} style={{ marginTop: '16px' }}>
                Add Service
            </Button>
            {onClickBTN && (
                <Box component="form" className="custom-form" style={{ marginTop: '16px' }}>
                    <TextField
                        type="text"
                        label="Enter price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        type="text"
                        label="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <Button variant="contained" color="primary" onClick={addMoreService}>
                        OK
                    </Button>
                </Box>
            )}
        </Container>
    );
};

export default ServicesManager;

