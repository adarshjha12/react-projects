import React, {useEffect, useState} from 'react'
import {Button, Container} from '../components/index'
import fileService from '../appwrite/fileServices';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser'
import { useSelector } from 'react-redux';

function Post() {
    const [post, setPost] = useState([])
    const {id} = useParams()
    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)

    const isAuthor = post && userData ? userData.$id === post.userId : false

    useEffect(() => {
        if (id) {
            
            fileService.getPost(id)
            .then((post)=>{
                if (post) setPost(post)
                else navigate('/')
            })
        } else{
            navigate('/')
        }
    }, [slug, navigate]);


    const deletePost = () =>{
        fileService.deletePost(post.$id)
        .then((status)=>{
            if (status) {
                fileService.fileDelete(post.featuredImage)
                navigate('/')
            }
        })
    }

  return post ? (
    <div>
        <Container>
            <div className='w-full flex justify-center mb-4 relative'>
                <img src={fileService.getFilePreview(post.featuredImage)} alt={post.title} />

                {isAuthor && (
                    <div>
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button classname='bg-green-500 px-3'>
                                Edit
                            </Button>
                        </Link>
                         
                         <Button onClick={deletePost} classname='bg-red-500 px-3'>
                            Delete
                         </Button>
                    </div>
                )}
            </div>
            <div className='w-full mb-6'>
                <h1>{post.title}</h1>
            </div>
            <div className='browser-css'>
                {parse(post.content)}
            </div>
        </Container>
    </div>
  ) : (null)
}

export default Post