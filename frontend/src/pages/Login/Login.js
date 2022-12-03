import React from 'react'
import './Login.css';
import {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import {useCookies} from 'react-cookie'
import APIService from '../APIService.js'

export const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [token, setToken] = useCookies(['mytoken'])
  let navigate = useNavigate()

  const loginBtn = () => {
    if(username.trim().length !==0 && password.trim().length){
        console.log('Username And Password Are Set')
        APIService.LoginUser({username,password})
        .then(resp => setToken('mytoken', resp.token))
        .catch(error => console.log(error))
    }else{
       console.log('Username And Password Are Not Set')
        navigate('/')
    }
  } 
  const handleSubmit = (e) => {
    loginBtn()
    var user_token = token['mytoken']
    console.log('Login User token is',user_token)
    console.log('Data type',typeof(token['mytoken']))

    if(String(user_token) === 'undefined'){
        navigate('/')
    }else{
        navigate('/articles')
    }
  }

  return (
    <div className='App'>
      <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">email</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="youremail@gmail.com" id="username" name="username" />
          <label htmlFor="password">password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
          <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
      </div>
    </div>
  )
}

export default Login