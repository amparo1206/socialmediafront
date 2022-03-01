import { useSelector } from 'react-redux';

const Profile = () => {
    const { user } = useSelector((state) => state.auth);
    console.log('user', user)
    return (
        <div>
            <h1>Profile</h1>
        </div>
    );
};

export default Profile;