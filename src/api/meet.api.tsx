import axios from 'axios';
import { axiosConfig, isAdmin } from "./token.api";
import { login } from './login.api';
const API_URL = 'http://localhost:8001';

axiosConfig();

const getMeetings = async (userId: string) => {
    try {
        const response = await axios.get(`${API_URL}/Meet/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error get meeting:', error);
        throw error;
    }
};

const addMeeting = async (userId: any, data: any) => {
    try {
        const response = await axios.post(`${API_URL}/Meet/`, {
            userId,
            ...data,
        });
        const responseJson = {
            data: response.data,
            status: response.status
        }
        if (response.status === 200)
            return responseJson; 
        if (response.status === 201)
            return responseJson;
        else
            throw new Error('Error adding meeting');

    } catch (error) {
        console.error('Error adding meeting:', error);
        throw error;
    }
};

// for admin
const getAllMeetings = async () => {
    try {
        const response = await axios.get(`${API_URL}/Meet/`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error get meeting:', error);
        throw error;
    }
};

const delateMeeting = async (id: number) => {
    try {
        const response = await axios.delete(`${API_URL}/Meet/${id}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Error delete meeting:', error);
        throw error;
    }
};

const updateMeeting = async (id: number, place: string, time:string, date:string)=> {
        try {
            const response = await axios.put(`${API_URL}/Meet/${id}`, { time, date, place });
            return response.data;
        } catch (error) {
            console.error('Error update meeting:', error);
            throw error;
        }
    };

export { getMeetings, addMeeting, getAllMeetings, delateMeeting ,updateMeeting};

