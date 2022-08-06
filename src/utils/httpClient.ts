import axios from 'axios';

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_URL_API,
});

export default httpClient;
