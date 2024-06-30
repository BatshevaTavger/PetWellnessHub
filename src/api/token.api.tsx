import axios from 'axios';

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

export {axiosConfig, isAdmin} ;
