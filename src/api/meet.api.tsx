import axios from 'axios';
import  {axiosConfig, isAdmin}  from "./token.api";
const API_URL = 'http://localhost:8001';

axiosConfig(); 

const getMeetings = async (userId:string) => {
    try {
        const response = await axios.get(`${API_URL}/Meet/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error get meeting:', error);
        throw error;
    }
};

export { getMeetings };

