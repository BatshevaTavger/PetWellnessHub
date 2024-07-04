import axios from 'axios';

const API_URL = 'http://localhost:8001';

const login = async (name: any, password: any) => {
    try {
        const response = await axios.post(`${API_URL}/Login`, { name, password });
        if (response) {
            console.log(response, 'res')
            localStorage.setItem('auth-token', response.data.token);
            localStorage.setItem('user-name', name);
            localStorage.setItem('userId', response.data.userId);
        }
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

const logout = () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user-name');
    localStorage.removeItem('userId');
};

const register = async (name: any, email: any, password: any) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { name, email, password });
        localStorage.setItem('auth-token', response.data.token);
        localStorage.setItem('user-name', name);
        localStorage.setItem('userId', response.data.userId);
        console.log({ name, email, password });
        console.log('response.data', response.data);
        return response.data;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
};

export { login, logout, register };
