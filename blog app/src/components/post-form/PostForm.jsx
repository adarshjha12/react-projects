import React, {useCallback} from 'react'
import { useForm } from 'react-hook-form'
import {InputField, RTE, Button, SelectBox} from '../index'
import fileService from '../../appwrite/fileServices'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function PostForm(post) {

  const {register, handleSubmit, control, setValue,
     getValues, watch } = useForm({
      defaultValues:{
        title: post?.title || '',
        slug: post?.slug || '',
        content: post?.content || '',
        status: post?.status || 'active'
      }
     })

     const navigate = useNavigate()
     const userData = useSelector(state => state.auth.userdata)

     const submit = async (data) =>{
        if (post) {
          const file = data.image[0] ? fileService.fileUpload(data.image[0]): null

          if (file) {
            fileService.fileDelete(post.featuredImage)
          }

          const dbPost = await fileService.updatePost(
            post.$id, {
              ...data,
              featuredImage: file ? file.$id : undefined
            }
          )

          if (dbPost) {
            navigate(`/post/${dbPost.$id}`)
          }
        } else{
          const file = data
          .image[0] ? fileService.fileUpload(data.image[0]): null

          if (file) {
            const fileId = file.$id
            data.featuredImage = fileId
            const dbPost = await fileService.createPost({
              ...data,
              userId: userData.$id
            })

            if (dbPost) {
              navigate(`/post/${dbPost.$id}`)
            }
          }
        }
     }

     const slugTransform = () =>{
      
     }

  return (
    <div>
        
    </div>
  )
}

export default PostForm