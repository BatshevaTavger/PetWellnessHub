// import axios from 'axios';

// const API_URL = 'http://localhost:8001';

// const login = async (name: string, password: string) => {
//     try {
//         const response = await axios.post(`${API_URL}/login`, { name, password });
//         if (response.data.token) {
//             localStorage.setItem('auth-token', response.data.token);
//         }
//         return response.data;
//     } catch (error) {
//         console.error('Error during login:', error);
//         throw error;
//     }
// };

// const logout = () => {
//     localStorage.removeItem('auth-token');
// };

// const register = async (name: string, email: string, password: string) => {
//     try {
//         const response = await axios.post(`${API_URL}/register`, { name, email, password });
//         return response.data;
//     } catch (error) {
//         console.error('Error during registration:', error);
//         throw error;
//     }
// };

// export { login, logout, register };

import axios from 'axios';

const API_URL = 'http://localhost:8001'; // וודא שהפורט כאן נכון ומתאים לשרת שלך

const login = async (name: any, password: any) => {
    try {
        const response = await axios.post(`${API_URL}/Login`, { name, password });
        if (response.data.token) {
            localStorage.setItem('auth-token', response.data.token);
            localStorage.setItem('user-name', name); // שומר את שם המשתמש
        }
        return response.data;
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
};

const logout = () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user-name'); // מסיר את שם המשתמש מה-localStorage
};

// const register = async (name: any, email: any, password: any) => {
//     try {
//         const response = await axios.post(`${API_URL}/register`, { name, email, password });
//         return response.data;
//     } catch (error) {
//         console.error('Error during registration:', error);
//         throw error;
//     }
// };

const register = async (name: any, email: any, password: any) => {
    try {
        const response = await axios.post(`${API_URL}/register`, { name, email, password });
        localStorage.setItem('auth-token', response.data.token); // שמירת הטוקן בלוקל סטורג'
        return response.data;
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
};

export { login, logout, register };
