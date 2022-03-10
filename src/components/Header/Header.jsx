import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Features/auth/authSlice";
import { useState } from 'react';


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
    return (
        <nav>
            <span>header</span>
            <div>{user ?
                <>
                <input onKeyUp={handleChange} placeholder='Search' name='text' />
                    <span>
                        <Link to='/' onClick={onLogout}>Logout</Link>
                    </span>
                    <span>
                        <Link to='/profile'>{user.name}</Link>
                    </span>
                    <span>
                        <Link to='/home'>Home</Link>
                    </span>
                </>
                :
                <>
                    <span><Link to='/login'> Login </Link></span>
                    <span><Link to='/register'> Register </Link></span>
                </>
            }
            </div>
        </nav>
    )
}

export default Header;