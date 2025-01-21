import axios from "axios"

const createPost = async function ({title, content, slug, status, featuredImage, userId}) {
    try {
        const response = await axios.post('http://localhost:3000/upload', {title, content, slug, status, featuredImage, userId}, 
            {
                headers:{
                    'Content-Type': 'multipart/form-data'
                }
            }
        )

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

const deletePost = async function (slug) {
    try {
        axios.delete('http://localhost:3000/user/login', slug)
        return {message: 'deleted Successfully'}
    } catch (error) {
        console.log(error);
        
    }
}