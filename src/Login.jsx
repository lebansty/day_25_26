import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {

    
        let navigate = useNavigate()
let login=()=>{
navigate('/Portal/Dashboard')

    }
  return (
    <div>
        <h1>Login</h1>
        <button onClick={login}>Login</button>
    </div>
  )
}

export default Login