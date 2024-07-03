import axios from 'axios';
const API_URL = 'http://localhost:8001';

const axiosConfig = () => {
    axios.interceptors.request.use(
        config => {
            const token = localStorage.getItem('auth-token');
            if (token) {
                config.headers['auth-token'] = token;
            }
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );
};

const isAdmin = () => {
    const token = localStorage.getItem('auth-token');
    if (token) {
        return true; 
    }
    return false; 
};

const checkAdminStatus = async (token: any) => {
    try {
      const response = await axios.post(`${API_URL}`, { token });
      console.log(response.data);
      return response.data.isAdmin;
    } catch (error) {
      console.error('Error checking admin status:', error);
      return false;
    }
  };

export {axiosConfig, isAdmin, checkAdminStatus} ;
