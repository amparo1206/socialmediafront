import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create, getAll} from "../../../../Features/post/postSlice"
import { Link } from 'react-router-dom'

const Post = () => {
    const { posts } = useSelector((state) => state.post);
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


    const post = posts.posts.map((post) => {
        return (
            <div className="post" key={post._id}>
                <Link to={"/post" + post._id}>
                    <p>{post.title}</p>
                </Link>
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
                <input type="text" name="title" value={title} onChange={onChange} placeholder='Tuitt' />

                <button type="submit">Tuitt</button>
            </form>
            {post}
        </div>
    )
}

export default Post