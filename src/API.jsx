import axios from 'axios';

// Base URL for the backend API
const API_URL = 'http://localhost:8080/api/auth'; // Ensure the backend is running on port 8080

// Signup function
export const signup = (user) => {
  return axios.post(`${API_URL}/signup`, user);
};

// Login function
export const login = (user) => {
  return axios.post(`${API_URL}/login`, user);
};
