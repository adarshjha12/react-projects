import axios from 'axios'

const loginService = async function ({email, password}) {
    try {
        const response = await axios.post('http://localhost:3000/user/login', {email, password})
        console.log(response.data);
        return response
    
    } catch (error) {
        console.log(error);
    }
}
const signupService = async function ({title, email, password}) {
    try {
        const response = await axios.post('http://localhost:3000/user/signup', {title, email, password})
        console.log(response.data);
        return response
    } catch (error) {
        console.log(error);
        
    }
}

const getCurrentUser = async function () {
    try {
        const response = await axios.get('http://localhost:3000/currentUser', {withCredentials: true})
    } catch (error) {
        
    }
}
