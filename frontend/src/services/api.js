// service/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081/api', // Base URL for your backend API
});

export const registerUser = (email, password) => {
  return api.post('/register', { email, password });
};

export const loginUser = (email, password) => {
  return api.post('/login', { email, password });
};
