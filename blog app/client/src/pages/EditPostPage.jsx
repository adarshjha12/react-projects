import React, {useEffect, useState} from 'react'
import {PostForm, Container} from '../components/index'
import fileService from '../appwrite/fileServices';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditPostPage() {

  const [post, setPost] = useState([null])
  const {slug} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    
    if (slug) {
        fileService.getPost(slug)
        .then((post) => {
          if (post) {
            setPost(post)
          }
        })
    } else{
      navigate('/')
    }
  }, [slug, navigate]);
  
  return post ? (
    <div>
      <Container>
        <PostForm post={post}/>
      </Container>
    </div>
  ) : (null)
}

export default EditPostPage