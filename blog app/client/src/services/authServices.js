import axios from 'axios'

const loginService = async function ({email, password}) {
    const response = await axios.post('http://localhost:3000/user/login', {email, password})
    console.log(response.data);
    
}
const signupService = async function ({email, password}) {
    const response = await axios.post('http://localhost:3000/user/login', {email, password})
    console.log(response.data);
    
}

