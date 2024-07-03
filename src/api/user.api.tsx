import axios from 'axios';
import { axiosConfig, isAdmin } from "./token.api";
const API_URL = 'http://localhost:8001';

axiosConfig();

const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/User/`);
        return response.data;
    } catch (error) {
        console.error('Error get users:', error);
        throw error;
    }
};

const addUser = async (name: any, password: any, email: any) => {
    try {
        const response = await axios.post(`${API_URL}/User/`, {
            name,
            password,
            email
        });

    } catch (error) {
        console.error('Error adding user:', error);
        throw error;
    }
};

const delateUser = async (id: number) => {
    try {
        const response = await axios.delete(`${API_URL}/User/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error delete user:', error);
        throw error;
    }
};

const updateUser = async (id: number, name: any, password: any, email: any)=> {
        try {
            const response = await axios.put(`${API_URL}/User/${id}`, { name, password, email });
            return response.data;
        } catch (error) {
            console.error('Error update user:', error);
            throw error;
        }
    };

export {getUsers, addUser, delateUser,updateUser };

