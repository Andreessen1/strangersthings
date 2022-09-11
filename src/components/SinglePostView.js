import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createMessage } from '../api';
import { Link } from 'react-router-dom';

const deleteButton = () => {
   <button onClick>Delete</button>
}
 

const SendMessage = ({ postID, token,navigate }) => {
  const [message, setMessage] = useState({content: ''});
 
    
  async function addMessage() {
    await createMessage({postID, message, token})
  }
  if (token){
  return (
    <form onSubmit={ (ev)=> {
      ev.preventDefault();
      addMessage();
      navigate('/posts')
    }}>
      <input
        type='text'
        placeholder='Enter Message'
        onChange={ (ev) => setMessage({content: ev.target.value}) }
      />
      <button type='submit'>Send Message</button>
    </form>
  )
}}

const SinglePostView = ({ posts, token,navigate }) => {
  const [activateMessage, setActivateMessage] = useState(false);
  
  const { postID } = useParams();
  
  const [currentPost] = posts.filter(post => post._id === postID);
  
  const {title, description, location, price, willDeliver} = currentPost;
  
  return (
    <div>
      <div className="card">
        <h3>{title}</h3>
        <p>Description: {description}</p>
        <p>Price: {price}</p>
        <p>Location: {location}</p>
        <p>Will Deliver: {willDeliver}</p>
        <Link id="return" to='/posts'>Return</Link>
      
      
      <button onClick={() => setActivateMessage(!activateMessage)}>Message this user</button>
     
      {
        activateMessage && <SendMessage postID={postID} token={token} navigate={navigate} posts={posts}/>
      }
      </div>
    </div>
  )
}

export default SinglePostView;
