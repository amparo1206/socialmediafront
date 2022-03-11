import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, like, disLike, deletePosts, updatePosts, getAll } from "../../../../Features/post/postSlice"
import { Link } from 'react-router-dom'
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import deletebutton from '../../../../img/delete.svg';
import updatebutton from '../../../../img/edit.svg';
import './Post.scss';
import moment from "moment"

const Post = () => {
    const { posts } = useSelector((state) => state.post);
    const { user } = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({ title: " " })
    const { title } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const dispatch = useDispatch();

    const onLike = async (_id) => {
        await dispatch(like(_id))
        await dispatch(getAll())
    }
    const onDisLike = async (_id) => {
        await dispatch(disLike(_id))
        await dispatch(getAll())
    }

    const post = posts.map((post) => {
        const isLiked = post.likes?.includes(user?.user._id);
        const createdAt = post.createdAt;
        return (
            <div className="post-map" key={post._id}>
                <strong>{post.userId.name}</strong>
                <span className="css-16my406">·</span>
                <span className="date-post">{moment(createdAt).fromNow()}</span>
                <Link to={"/post/" + post._id}>
                    <p>{post.title}</p>

                </Link>

                <span>Like :{post.likes?.length}</span>
                {isLiked
                    ? <HeartFilled onClick={isLiked ? () => onDisLike(post._id) : () => onLike(post._id)} />
                    : <HeartOutlined onClick={isLiked ? () => onDisLike(post._id) : () => onLike(post._id)} />
                }
                {user.user._id === post?.userId?._id
                    ?
                    <>
                        <section className="button-actions">
                            <button className="button-delete" onClick={() => dispatch(deletePosts(post._id))}>
                            <img src={deletebutton} />
                            </button>
                            <button className="button-update"><Link to={"/post/editPost/" + post._id}>
                            <img src={updatebutton} />
                            </Link></button>
                        </section>
                    </>
                    :
                    ''
                }
            </div>
        );
    });

    const onSubmit = async (e) => {
        e.preventDefault()
        await dispatch(create(formData))
        await dispatch(getAll(formData))
        setFormData({title: ''})
    }
    return (
        <div className='tuitt-form'>
            <h2 className="name-form">Tuitea</h2>
            <form className="form-post" onSubmit={onSubmit}>
                <textarea maxLength="280" type="text" name="title" value={title} onChange={onChange} placeholder='Tuitt' />
                <button className="button-form" type="submit">Tuitt</button>
            </form>
            {post}
        </div>
    )
}

export default Post;