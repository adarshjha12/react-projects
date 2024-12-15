import React, {useEffect, useState} from 'react'
import {PostForm, Container} from '../components/index'
import fileService from '../appwrite/fileServices';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function EditPostPage() {

  const [posts, setPosts] = useState([])
  const {slug} = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    
    if (slug) {
        fileService.getPost(slug)
        .then((post) => {
          if (post) {
            setPosts(post)
          }
        })
    } else{
      navigate('/')
    }
  }, [slug, navigate]);
  
  return posts ? (
    <div>
      <Container>
        <PostForm post={posts}/>
      </Container>
    </div>
  ) : (null)
}

export default EditPostPage