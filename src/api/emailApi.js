import axios from 'axios';

const API_URL = 'http://localhost:5001/api/emails';

export const getEmails = async () => {
    return await axios.get(API_URL);
};

export const createEmail = async (email) => {
    return await axios.post(API_URL, email);
};

export const updateEmail = async (id, email) => {
    return await axios.put(`${API_URL}/${id}`, email);
};

export const deleteEmail = async (id) => {
    return await axios.delete(`${API_URL}/${id}`);
};
