import axios from 'axios';

// Base API client for React App 1
const api = axios.create({
  baseURL: 'http://localhost:8080/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export const getPublicData = async () => {
  try {
    const response = await api.get('/public');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getApp1Data = async () => {
  try {
    const response = await api.get('/app1');
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
