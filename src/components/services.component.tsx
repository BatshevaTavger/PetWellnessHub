import React, { useEffect, useState } from 'react';
import { getServices } from '../api/services.api';
import { Link } from 'react-router-dom';

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
            <h1>our Services</h1>
            <ul>
                {services.map(service => (
                    <div key={service._id}>
                        <h4>Description: {service.description} </h4> 
                         <strong>Price:</strong> {service.price}
                         <button><Link to={'/appointmentForm'}>To קביעת תור</Link></button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default Services;
