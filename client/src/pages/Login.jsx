import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext';

const Login = () => {
  const {login} = useContext(AuthContext)
  // console.log(currentUser);

  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  })
  
  const handleChange = (e) =>{
    setInputs(prev => ({...prev,  [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    // TO DO
    e.preventDefault();
    try {
      login(inputs)
      navigate("/")
    } catch (error) {
      setError(error.response.data.message)
    }
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form action="">
        <input onChange={handleChange} type="text" name='username' placeholder='username' required/>
        <input onChange={handleChange} type="password" name='password' placeholder='password' required/>
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{error}</p>}
        <span>
          Don't you have an account?
          <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  )
}

export default Login