import {React, useState} from 'react';
import { Link } from 'react-router-dom';

const Profile = ({ user,messages }) => {
  // const messages = user.messages;
  const userID = user._id;



  
  return (
    <div>
      <div>
        <h1>Messages from other users!</h1>
        
        {
          messages && messages.map(message => {
            const fromUserID = message.fromUser._id;
            const {username} = message.fromUser;
            const {title} = message.post;
            if (userID !== fromUserID) {
              return (
                <div className="message" key={message._id}>
                  <p>From User: {username} </p>
                  <p>Message: {message.content}</p>
                  <p>Post Reference: {title}</p>
                
                </div>
              )
            }
          })    
        }
      </div>
      <div>
        <h1>Messages from You!</h1>
        {
          
          messages && messages.map(message => {
            const fromUserID = message.fromUser._id;
            
            const {username} = message.fromUser;
            const {title} = message.post;
            
            if (userID === fromUserID) {
              return (
                <div className="message" key={message._id}>
                   <p>From User: {username} </p>
                  <p>Message: {message.content}</p>
                  <p>Post Reference: {title}</p>
                </div>
              )
            }
          })    
        }
      </div>
    </div>
  )
}

export default Profile;