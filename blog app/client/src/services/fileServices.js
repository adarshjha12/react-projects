import axios from "axios"

const createPost = async function ({title, content, slug, status, featuredImage}) {
    try {
        const response = await axios.post('http://localhost:3000/user/login', {title, content, slug, status, featuredImage})

        return response.data
    } catch (error) {
        console.log(error);
        
    }
}

const updatePost = async function (slug, {title, content, status, featuredImage}) {
    try {
        const response = await axios.post('http://localhost:3000/user/login',slug, {title, content, status, featuredImage})
        return response.data
    } catch (error) {
        console.log(error);
        
    }
}

