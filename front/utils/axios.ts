import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:8000/api', // URL do backend Laravel
    withCredentials: true,
});

export default instance;