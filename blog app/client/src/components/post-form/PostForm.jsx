import React, {useCallback, useEffect} from 'react'
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

     const slugTransform = useCallback((value) =>{
      if (value && typeof value === 'string') {
        return value.trim().toLowerCase().replace(/ ^[a-zA-Z\d]+/g, '-')
      } else{
        return ''
      }
     }, [])

     useEffect(() => {
      const subscription = watch((value, {name}) => {
        if (name === 'title') {
          setValue('slug', slugTransform(value.title, {shouldValidate:true}))
        }
      })

      return () => {
        subscription.unsubscribe()
      }
     }, [watch, slugTransform, setValue]);

  return (
    <form action="" onSubmit={handleSubmit(submit)}>
      <div className='w-2/3 px-2'>
          <InputField
            label = 'Title:'
            className = 'mb-4'
            placeholder = 'title'
            {...register('title', {required: true})}
          />

          <InputField
            label = 'Slug:'
            className = 'mb-4'
            placeholder = 'slug'
            {...register('slug', {required: true})}
            onInput={(e) =>{
                setValue('slug', slugTransform(e.currentTarget.value, {shouldValidate: true}))
            }}
          />

          <RTE
            label='Content:'
            name='content'
            control={control}
            defaultValue={getValues('content')}
          />
      </div>

      <div className='w-1/3 px-2'>
          <InputField
            label = 'Featured Image:'
            type = 'file'
            className = 'mb-4'
            accept = 'image/png, image/jpg, image/jpeg, image/gif'
            {...register('image', {required: !post})}
          />

          {post && (
            <div className='w-full mb-4'>
                <img src={fileService.getFilePreview(post.featuredImage)}
                 alt={post.title} className='rounded-lg' />
            </div>
          )}

          <SelectBox
            options = {["active", "inactive"]}
            label= "Status"
            className= 'mb-4'
            {...register('status', {required: true})}
          />

          <Button
            type='submit'
            bgcolor={post? bg-green-600 : undefined}
            classname='w-full'
          >
          {post ? 'Update' : 'Submit'}
          </Button>
      </div>
    </form>
  )
}

export default PostForm