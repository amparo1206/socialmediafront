import React, { useState } from 'react'
import './Register.scss'
import logo from '../../img/logo.svg'
import { useDispatch, useSelector } from 'react-redux'
import { register, reset } from '../../Features/auth/authSlice'
import { useEffect } from 'react'
import { notification } from "antd";
import "antd/dist/antd.css"

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })
    const { name, email, password, password2 } = formData

    const dispatch = useDispatch() 

    const { isError, isSuccess, message } = useSelector((state) => state.auth)
    useEffect(() => {
        if (isError) {
            notification.error({ message: "error", description: message });
        }
        if (isSuccess) {
            notification.success({ message: "Welcome", description: message?.message })
        }
        dispatch(reset())
    }, [isError, isSuccess, message, dispatch]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== password2) {
            return notification.error({
                message: "Error",
                description: "The password does not match",
            });
            
        } else {
            return dispatch(register(formData))
        }
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
                <input type="password" name="password" value={password} onChange={onChange} placeholder='Password' />
                <input type="password" name="password2" value={password2} onChange={onChange} placeholder='Password'/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
export default Register