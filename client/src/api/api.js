import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Auth API
export const loginUser = (email, password) => API.post('/auth/login', { email, password });
export const signupUser = (name, email, password) => API.post('/auth/signup', { name, email, password });
export const getMe = () => API.get('/auth/me');
export const updateProfile = (profileData) => API.put('/auth/profile', profileData);

// Notes API
export const getNotes = () => API.get('/notes');
export const getNoteById = (id) => API.get(`/notes/${id}`);
export const createNote = (noteData) => API.post('/notes', noteData);
export const updateNote = (id, noteData) => API.put(`/notes/${id}`, noteData);
export const deleteNote = (id) => API.delete(`/notes/${id}`);

export default API;

