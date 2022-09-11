import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = ({ logout, token }) => {
  return (
    <header>
      <nav class="navbar">
        <Link class="link" to='/'>Home</Link>
        <Link class="link" to='/posts'>Posts</Link>

{
token ?(
  <>
<Link class="link" to='/' 
          onClick={ () => {
            logout()
        }}>Logout</Link>
        
<Link class="link" to='/posts/create-post'>Create Post</Link>
<Link class="link" to='/profile'>Profile</Link>
</>
      
): (<>
  <Link class="link" to='/register'>Register</Link>
  <Link class="link" to='/login'>Login</Link>

  </>
)
}
      </nav>
     
    </header>
  )
}

export default Navbar;