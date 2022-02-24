import React, { useState } from 'react'
import './Login.scss'
import logo from '../../img/logo.svg'
import { login } from '../../Features/auth/authSlice'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const { email, password } = formData
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }


    const onSubmit = (e) => {
        e.preventDefault()
        console.log('formData', formData)
    }
    return (
        <div className='login-form'>
            <div className='logo'>
                <img src={logo}/>
            </div>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <input type="email" name="email" value={email} onChange={onChange} placeholder='Email'/>
                <input type="password" name="password" value={password} onChange={onChange} placeholder='Password'/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login