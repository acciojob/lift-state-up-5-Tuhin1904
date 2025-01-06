import React,{useState} from 'react'

const LoginForm = ({isLoggedIn,setLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setLogin()
    }
  return (
    <div>
    {isLoggedIn ? <h3>You are logged in!</h3> : <div>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required/>
            <br/>
            <br/>
            <label>Password:</label>
            <input type='password'value={password} onChange={(e) => setPassword(e.target.value)} required/>
            <br/>
            <button type='submit'>Login</button>
        </form>
    </div>}
    
    </div>
  )
}

export default LoginForm;