
import React from 'react'
import {Container, Card} from '../components/index'
import { useState } from 'react'
import fileService from '../appwrite/fileServices'


function AllPostPage() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fileService.getPosts([])
    .then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
    .catch((err) => console.log(err)
    )
    
  }, []);
  return (
    <div className='w-full px-7'>
      <Container>
        <div className='flex flex-wrap'>
            {posts.map((post) => {
              <div key={post.$id}>
                <Card post={post}/>
              </div>
          })}
        </div>   
      </Container>
    </div>
  )
}

export default AllPostPage