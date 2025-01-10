import React from 'react'
import { useState, useEffect } from 'react'
import {Container, Card} from '../components/index'
import fileService from '../appwrite/fileServices'


function HomePage() {
    const [posts, setPosts] = useState([])

    // useEffect(() => {
    //     fileService.getPosts()
    //     .then((posts) => {
    //         if (posts) {
    //             setPosts(posts)
    //         }
    //     })
    //     .catch((err) => console.log(err)
    //     )
        
    // }, []);
  
    // if (posts.length === 0) {
    //     return (
    //         <div>
    //             <h1>you don't have any posts</h1>
    //             <p className='text-white'>please login or signup</p>
    //         </div>
    //     )
    // }

    return (
        <div>
            <Container>
                {posts.map((post) => {
                    <div key={post.$id}>
                        <Card post={post}/>
                    </div>
                })}
            </Container>
        </div>
    )
}

export default HomePage