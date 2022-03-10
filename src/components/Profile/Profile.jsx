import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getInfo } from '../../Features/auth/authSlice';
import { deletePosts } from '../../Features/post/postSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import moment from 'moment'
import deletebutton from '../../img/delete.svg';
import updatebutton from '../../img/edit.svg';
import './Profile.scss'

const Profile = () => {
    const { userInfoProfile } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    useEffect(async () => {
        await dispatch(getInfo())
    }, [])
    return (
        <div className='profile-content'>
            <h1>Profile {userInfoProfile.name}</h1>
            <section className='post-profile-section'>
                {userInfoProfile.postIds?.map(
                    post =>
                        <div className='profile-map'>
                            <strong>{userInfoProfile.name}</strong>
                            <span className="username-post">@{userInfoProfile.email.split("@")[0]}</span>
                            <span className="css-16my406">·</span>
                            <span className="date-post">{moment(post.createdAt).fromNow()}</span>
                            <Link to={"/post/" + post._id}>
                                <p>{post.title}</p>

                            </Link>
                            <section className="button-actions">
                                <button className="button-delete" onClick={() => dispatch(deletePosts(post._id))}>
                                    <img src={deletebutton} />
                                </button>
                                <button className="button-update"><Link to={"/post/editPost/" + post._id}>
                                    <img src={updatebutton} />
                                </Link></button>
                            </section>
                        </div>
                )}
            </section>

        </div>

    );
};

export default Profile;