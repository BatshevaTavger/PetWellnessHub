import axios from 'axios';
// import { useContext } from 'react';
// import { UserContext } from '../context/user.context';
const API_URL = 'http://localhost:8001';


const login = async (name: any, password: any) => {
    // const { setUser } = useContext(UserContext);
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
    // const { setUser } = useContext(UserContext);
    // setUser( null, null )
    localStorage.removeItem('auth-token');
    localStorage.removeItem('user-name');
    localStorage.removeItem('userId');
};

const register = async (name: any, email: any, password: any) => {
    // const { setUser } = useContext(UserContext);
    try {
        const response = await axios.post(`${API_URL}/register`, { name, email, password });
        // setUser( name, response.data.userId )
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

const checkAdminStatus = async (token: any) => {
    try {
      const response = await axios.post(`${API_URL}`, { token });
      return response.data.isAdmin;
    } catch (error) {
      console.error('Error checking admin status:', error);
      return false;
    }
  };

export { login, logout, register };
