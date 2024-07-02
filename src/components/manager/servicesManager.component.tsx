import React, { useEffect, useState } from 'react';
import { addService, deleteService, getServices, updateService } from '../../api/services.api';
import { Service } from '../../interfaces/service.interface';

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
        <div>
            <h1>All Services</h1>
            <ul>
                {services.map(service => (
                    <div key={service._id}>
                        <h4>Description: {service.description} </h4>
                        <strong>Price:</strong> {service.price}
                        <button onClick={() => updateThisService(service._id)}>Update This Service</button>
                        <button onClick={() => deleteThisService(service._id)}>Delete This Service</button>
                    </div>
                ))}
            </ul>
            {selectedServiceId !== 0 && (
                <form className="custom-form">
                    <input
                        type="text"
                        placeholder="Enter price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button type="button" onClick={updateServiceData}>OK</button>
                </form>
            )}
            <button onClick={() => setOnClickBTN(true)}>Add Service</button>
            {onClickBTN && (
                <form>
                    <input
                        type="text"
                        placeholder="Enter price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button type="button" onClick={addMoreService}>OK</button>
                </form>
            )}
        </div>
    );
};

export default ServicesManager;

