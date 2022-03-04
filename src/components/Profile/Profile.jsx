import { useSelector } from 'react-redux';
import Posts from '../../components/Home/Posts/Posts'

const Profile = () => {
    const { user } = useSelector((state) => state.auth);
    console.log('user', user)
    return (
        <div>
            <h1>Profile</h1>
            <Posts />
        </div>
        
    );
};

export default Profile;