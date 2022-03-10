import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logout, register } from "../../Features/auth/authSlice";
import { useState } from 'react';
import './Header.scss';
import logoutimg from '../../img/logout.svg';
import home from '../../img/home.svg';
import profile from '../../img/profile.svg';
import logo from '../../img/logo.svg'



const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth)
    const [text, setText] = useState("");
    const handleChange = (e) => {
        setText(e.target.value);
        if (e.key === "Enter") {
            navigate('/search/' + text)
        }
    };
    const onLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        navigate('/login')
    };
/*     if (window.location.pathname === '/register') {
        document.getElementsByClassName("nav-header").classList.add("registerHeader");

        
    }; */
    return (
        <nav className='nav-header'>
            <span className='header-out'>header</span>
            <div>{user ?
                <>
                    <img className='logo-header' src={logo} />
                    <input className='search-header' onKeyUp={handleChange} placeholder='Search' name='text' type="search" />
                    <ul>
                        <li>
                            <Link to='/home'>
                                <img src={home} />
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to='/profile'>
                            <img src={profile} />
                                {user.user?.name}</Link>
                        </li>
                        <li>
                            <Link to='/' onClick={onLogout}>
                                <img src={logoutimg} />
                                Logout
                            </Link>
                        </li>
                    </ul>
                </>
                :
                <>
                    <ul>
                        <li><Link to='/login'> Login </Link></li>
                        <li><Link to='/register'> Register </Link></li>
                    </ul>
                </>
            }
            </div>
        </nav>
    )
}

export default Header;