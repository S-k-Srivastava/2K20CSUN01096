// api.js
import axios from 'axios';

const BASE_URL = 'http://20.244.56.144/train'; // Replace with the actual base URL

export const registerCompany = async (companyInfo) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, companyInfo);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAuthToken = async (authInfo) => {
    try {
        const response = await axios.post(`${BASE_URL}/auth`, authInfo);
        return response.data.access_token;
    } catch (error) {
        throw error;
    }
};

export const getTrainSchedules = async (authToken) => {
    try {
        const response = await axios.get(`${BASE_URL}/trains`, {
            headers: {
                Authorization: `Bearer ${authToken}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
