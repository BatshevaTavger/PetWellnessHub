import axios from 'axios';
import  {axiosConfig, isAdmin}  from "./token.api";
const API_URL = 'http://localhost:8001';

axiosConfig(); 

const getServices = async () => {
    try {
        const response = await axios.get(`${API_URL}/Service`);
        return response.data;
    } catch (error) {
        console.error('Error get service:', error);
        throw error;
    }
};

const addService = async ( description:any, price:any) => {
    try {
        if(isAdmin()){
            const response = await axios.post(`${API_URL}/Service`, {  description, price });
            return response.data;
        }
    } catch (error) {
        console.error('Error during save service:', error);
        throw error;
    }
};

// for manager
const deleteService = async (id: number) => {
    try {
        const response = await axios.delete(`${API_URL}/Service/${id}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error delete service:', error);
        throw error;
    }
};

const updateService = async (id: number, price: string, description: string) => {
    try {
        const response = await axios.put(`${API_URL}/Service/${id}`, { description, price });
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error update service:', error);
        throw error;
    }
};

export { getServices, addService, deleteService, updateService };

