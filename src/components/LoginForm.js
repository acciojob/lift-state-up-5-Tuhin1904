import React from 'react'

const LoginForm = ({isLoggedIn,setLogin}) => {
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setLogin()
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Username: </label>
            <input type='text'/>
            <br/>
            <br/>
            <label>Password: </label>
            <input type='password'/>
            <br/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LoginForm