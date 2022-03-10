import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getById, updatePosts } from "../../../../Features/post/postSlice"
const EditPost = () => {
    const { _id } = useParams();
    const dispatch = useDispatch();
    const { post } = useSelector((state) => state.post);
    const [formData, setFormData] = useState({ title: " ", _id })
    const { title } = formData
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(getById(_id))
    }, [])
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(updatePosts(formData))
        setFormData({ title: "", _id })
        setTimeout(() => {
            navigate("/home")
        }, 1000);
    }
    useEffect(() => {
        setFormData({ title: post.title, _id})
      },[post.title]);
    return (
        <div className='tuitt-form'>
            <h2>Tuitea</h2>
            <form onSubmit={onSubmit}>
                <textarea maxLength="280" type="text" name="title" value={title} onChange={onChange} placeholder='Tuitt' />
                <button type="submit">Tuitt</button>
            </form>
        </div>
    )
}

export default EditPost