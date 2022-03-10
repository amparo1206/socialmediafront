import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Login.scss';
import logo from '../../img/logo.svg';
import { login, reset } from '../../Features/auth/authSlice';
import { notification } from 'antd';

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const { email, password } = formData;
    const navigate = useNavigate();
    const { isError, isSuccess, message } = useSelector((state) => state.auth)
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError) {
            notification.error({ message: "Error", description: message, });
        }
        if (isSuccess) {
            notification.success({ message: "Success", description: message?.message, });
            setTimeout(() => {
                navigate("/profile")
            }, 2000);
        }
        dispatch(reset())
    }, [isError, isSuccess, message, navigate, dispatch]);

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(login(formData))
    }
    return (
        <div className='login-form'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <h2 className='login-size'>Login</h2>
            <form onSubmit={onSubmit}>
                <input type="email" name="email" value={email} onChange={onChange} required placeholder='Email' />
                <input type="password" name="password" value={password} onChange={onChange} required placeholder='Password' />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;