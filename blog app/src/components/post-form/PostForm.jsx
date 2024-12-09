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

     

     const slugTransform = () =>{

     }

  return (
    <div>
        
    </div>
  )
}

export default PostForm