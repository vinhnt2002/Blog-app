import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

const Register = () => {
  
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  })
  // console.log(inputs) check
  const handleChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      const res = await axios.post("/auth/register", inputs)
      console.log(res);
      navigate("/login")

    } catch (error) {
      setError(error.response.data.message)
    }
  }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form action="">
        <input onChange={handleChange} type="text" name='username' placeholder='username' required />
        <input onChange={handleChange} type="email" name='email' placeholder='email' required />
        <input onChange={handleChange} type="password" name='password' placeholder='password' required />
        <button onClick={handleSubmit}>Register</button>
        {error && <p>{error}</p>}
        <span>
          Do you have an account?
          <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  )
}

export default Register