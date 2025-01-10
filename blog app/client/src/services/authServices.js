import axios from 'axios';

const loginService = async function ({ email, password }) {
    try {
        if (!email || !password) {
            throw new Error('Email and password are required');
        }
        const response = await axios.post('http://localhost:3000/user/login', { email, password }, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error during login:', error?.response?.data || error.message);
        throw error; // Re-throw the error for the calling function to handle
    }
};

const signupService = async function ({ title, email, password }) {
    try {
        if (!title || !email || !password) {
            throw new Error('Title, email, and password are required');
        }
        const response = await axios.post('http://localhost:3000/user/signup', { title, email, password }, { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error during signup:',error?.response?.data || error.message);
        throw error;
    }
};

const getCurrentUser = async function () {
    try {
        const response = await axios.get('http://localhost:3000/currentUser', { withCredentials: true });
        return response.data;
    } catch (error) {
        console.error('Error fetching current user:', error?.response?.data || error.message);
        throw error;
    }
};

export { loginService, signupService, getCurrentUser };
