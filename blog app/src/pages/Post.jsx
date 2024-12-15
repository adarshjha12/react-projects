import React, {useEffect, useState} from 'react'
import {Button, Container} from '../components/index'
import fileService from '../appwrite/fileServices';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import parse from 'html-react-parser'
import { useSelector } from 'react-redux';

function Post() {
    const [post, setPost] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()
    const userData = useSelector(state => state.auth.userData)

    const isAuthor = post && userData ? userData.$id === post.userId : false

    useEffect(() => {
        if (slug) {
            
            fileService.getPost(slug)
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
                        <Link to={`/`}>

                        </Link>
                    </div>
                )}
            </div>
        </Container>
    </div>
  ) : ()
}

export default Post