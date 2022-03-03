import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, getAll, like } from "../../../../Features/post/postSlice"
import { Link } from 'react-router-dom'
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

const Post = () => {
    const { posts } = useSelector((state) => state.post);
    const { user } = useSelector((state) => state.auth);
    const [formData, setFormData] = useState({ title: " ", description: " " })
    const { title, description } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAll());
    }, []);


    const post = posts.map((post) => {
        console.log(user)
        const isLiked = post.likes?.includes(user?.user._id);
        return (
            <div className="post" key={post._id}>
                <Link to={"/post/" + post._id}>
                    <p>{post.title}</p>

                </Link>
                    <span className="like">Like :{post.likes?.length}</span>
                    {isLiked ? (
                        <HeartFilled onClick={isLiked ? () => console.log("dislike") : () => dispatch(like(post._id))} />
                    ) : (
                        <HeartOutlined onClick={isLiked ? () => console.log("dislike") : () => dispatch(like(post._id))} />
                    )}
            </div>
        );
    });

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(create(formData))
    }
    return (
        <div className='tuitt-form'>
            <h2>Tuitea</h2>
            <form onSubmit={onSubmit}>
                <textarea maxLength="280" type="text" name="title" value={title} onChange={onChange} placeholder='Tuitt' />
                <button type="submit">Tuitt</button>
            </form>
            {post}
        </div>
    )
}

export default Post