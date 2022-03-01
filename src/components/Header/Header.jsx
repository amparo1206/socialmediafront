import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Features/auth/authSlice";


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth)
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
                    <span>
                        <Link to='/' onClick={onLogout}>Logout</Link>
                    </span>
                    <span>
                    <Link to='/profile'>{user.name}</Link>
                    </span>
                </>
                :
                <>
                    <span><Link to='/login'> Login </Link></span>
                    <span><Link to='/register'> Register </Link></span>
                </>
            }
{/*             {user?.rol === 'author' ? <span><Link to="/author">Author</Link></span>:''}; */}
            </div>
        </nav>
    )
}

export default Header;