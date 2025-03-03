import axios from 'axios';

// Base API client for React App 1
const api = axios.create({
  baseURL: 'https://kamspringweb-chc7arb5atc2cmg9.canadacentral-01.azurewebsites.net/api',
  headers: {
    'Content-Type': 'application/json',
  },
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

export const postApp1Data = async (data) => {
  try {
    const response = await api.post('/app1', data); // POST request instead of GET
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
