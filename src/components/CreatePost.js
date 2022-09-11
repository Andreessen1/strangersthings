
import { createPost } from '../api';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';




const CreatePost = ({ token,fetchPosts, navigate }) => {
 const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [price, setPrice] = useState('');
const [location, setLocation] = useState('');
const [willDeliver, setWillDeliver] = useState('');
  const newPost = {
    title,
    description,
    price,
    location,
    willDeliver
  }
  
  async function addPost() {
    const result = await createPost(token, newPost)
    console.log(result)
    fetchPosts();
    navigate('/posts')
  }
  
  return (
    // This needs to be a form that accepts the 5 request parameters for creating a post
    <>
     <form  class='form' onSubmit={(event) => {
      event.preventDefault();
      addPost();
    }}>
    <input 
      class="createPost"
        type='text'
        placeholder='Title'
        onChange={(event) => setTitle(event.target.value)}
      />
       <input 
      class="createPost"
      id='description'
        type='text'
        placeholder='Description'
        onChange={(event) => setDescription(event.target.value)}
      />
       <input 
      class="createPost"
        type='text'
        placeholder='Price'
        onChange={(event) => setPrice(event.target.value)}
      />
       <input 
      class="createPost"
        type='text'
        placeholder='Location'
        onChange={(event) => setLocation(event.target.value)}
      />
       <input 
      class="createPost"
        type='checkbox'
        placeholder='Will deliver'
        onChange={(event) => setWillDeliver(event.target.checked)}
      />
    <button type="submit">Create a New Post</button>
    </form>
    </>
  )
}

export default CreatePost;