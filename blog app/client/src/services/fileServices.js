import axios from "axios"

const createPost = async function ({title, slug, content, status, featuredImage, userId}) {
    try {
        const response = await axios.post('http://localhost:3000/posts', {title, content, slug, status, featuredImage, userId}, 
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

const updatePost = async function ({postId, title, slug, content, status, featuredImage}) {
    try {
        const response = await axios.put('http://localhost:3000/posts', {postId, slug, title, content, status, featuredImage}, {
            headers: {
                'Content-Type' : 'multipart/form-data'
            }
        })
        return response.data
    } catch (error) {
        console.log(error);

    }
}

const deletePost = async function (id) {
    try {
        axios.delete('http://localhost:3000/posts', id)
        return {message: 'deleted Successfully'}
    } catch (error) {
        console.log(error);
        
    }
}
const getPost = async function (id) {
    try {
        const response = await axios.get('http://localhost:3000/posts', id)
        return response.data
    } catch (error) {
        console.log(error);
        
    }
}
const getPosts = async function () {
    try {
        const response = await axios.get('http://localhost:3000/posts', )
        return response.data
    } catch (error) {
        console.log(error);
        
    }
}

const getImagePreview = async function (url) {
    try {
        const response = await axios.get('http://localhost:3000/posts/image', url)
        return response.data
    } catch (error) {
        console.log(error);
        
    }
}

export {createPost, updatePost, deletePost, getPost, getPosts, getImagePreview}