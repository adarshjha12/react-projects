import React, {useCallback, useEffect} from 'react'
import { useForm } from 'react-hook-form'
import {InputField, RTE, Button, SelectBox} from '../index'
import {createPost, updatePost} from '../../services/fileServices'
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
          const formData = new FormData()

          formData.append('postId', post._id)
          formData.append('title', data.title)
          formData.append('slug', data.slug)
          formData.append('content', data.content)
          formData.append('status', data.status)
          formData.append('featuredImage', data.image[0])

          const updatedPost = await updatePost(formData)

          if (updatedPost) {
            navigate(`/post/${updatedPost.data._id}`)
          }
        } else{
            const formData = new FormData()

            formData.append('title', data.title)
            formData.append('slug', data.slug)
            formData.append('content', data.content)
            formData.append('status', data.status)
            formData.append('featuredImage', data.image[0])
            formData.append('userId', userData._id)

            const newPost = await createPost(formData)

            if (newPost) {
              navigate(`/post/${newPost.data._id}`)
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