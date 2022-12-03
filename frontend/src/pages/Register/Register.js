import React from 'react'
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from '../APIService'
import loginBtn from '../Login/Login'

export const Register = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useCookies(['mytoken'])
  let navigate = useNavigate()

  const handleSubmit = (e) => {
    if(username.trim().length !== 0 && password.trim().length !== 0) {
      console.log('Username and password are set');
      APIService.RegisterUser({username, password})
      .then(() => loginBtn())
      .catch(error => console.log(error))
      }else{
          //navigate('/')
          console.log('Username and password are not set');
      }
  }

  return (
    <div className='App'>
      <div className="auth-form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="youremail@gmail.com" id="username" name="username" />
          <label htmlFor="password">Password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
          <button type="submit">Register</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('/login')}>Already have an account? Login here.</button>
      </div>
    </div>
  )
}

export default Register