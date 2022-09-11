import React, { useState } from 'react';
import { loginUser } from '../api';
import { Button } from '@mui/material';



const Login = (({ setToken, navigate }) => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = async () => {
    const results = await loginUser(username, password);
    if (results.success) {
      setToken(results.data.token);
      window.localStorage.setItem('token', results.data.token);
      navigate('/profile');
    } else {
      console.log(results.error.message)
    }
  }
    
    
    return(
        <form class='form' onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}>
            <input class="box" type="text"
             placeholder='Enter Username'
             onChange={(event) => setUsername(event.target.value)}
            />
          
             <input class="box" type="Password"

             placeholder='Enter Password'
             onChange={(event) => setPassword(event.target.value)}
            />
           
            <Button class="box" type="submit"variant="contained">Submit</Button>
        </form>
    )
}
)

export default Login;