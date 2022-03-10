import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getInfo } from '../../Features/auth/authSlice';
import { useDispatch } from 'react-redux';

const Profile = () => {
    const { userInfoProfile } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(getInfo())
    }, [])
    console.log('user', userInfoProfile)
    return (
        <div>
            <h1>Profile</h1>
            {userInfoProfile.name}
            
        </div>
        
    );
};

export default Profile;