import React, { useState } from 'react'
import './Register.scss'
import logo from '../../img/logo.svg'
import { useDispatch } from 'react-redux'
import { register } from '../../Features/auth/authSlice'

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const { name, email, password } = formData
    const dispatch = useDispatch() 

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(register(formData))
    }
    return (
        <div className='register-form'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <h2>Register</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" value={name} onChange={onChange} placeholder='Name' />
                <input type="email" name="email" value={email} onChange={onChange} placeholder='Email'/>
                <input type="password" name="password" value={password} onChange={onChange} placeholder='Password'/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
export default Register