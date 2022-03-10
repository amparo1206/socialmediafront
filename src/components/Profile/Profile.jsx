import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getInfo } from '../../Features/auth/authSlice';
import { useDispatch } from 'react-redux';

const Profile = () => {
    const { userInfoProfile } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    console.log(userInfoProfile);
    useEffect(async () => {
        await dispatch(getInfo())
    }, [])
    return (
        <div>
            <h1>Profile</h1>
            {userInfoProfile.name}
            {userInfoProfile.postIds?.map(post => <h1>{post.title}</h1>)}

        </div>
        
    );
};

export default Profile;