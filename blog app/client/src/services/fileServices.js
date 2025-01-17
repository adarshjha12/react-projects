import axios from "axios"

const createPost = async function ({title, content, slug, status, featuredImage}) {
    try {
        const response = axios.post('http://localhost:3000/user/login', {title, content, slug, status, featuredImage})
        return (await response).data
    } catch (error) {
        console.log(error);
        
    }
}