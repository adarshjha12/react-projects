import React from 'react'
import fileService from '../appwrite/fileServices'
import {Link} from 'react-router-dom'

function Card({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>

        <div className='w-full'>
            <div className='w-full' >
                <img 
                src={fileService.getFilePreview(featuredImage)}
                alt={title}
                 />
            </div>
            <h2 className='text-xl'>{title}</h2>
        </div>
    </Link>
  )
}

export default Card