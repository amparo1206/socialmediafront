import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {getById, addComment} from "../../../../../Features/post/postSlice"

const PostDetail = () => {
    const { _id } = useParams();
    const dispatch = useDispatch();
    const { post } = useSelector((state) => state.post);
    const[formData, setFormData] = useState({ comment: " ",postId:_id })
    const { comment } = formData
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
        dispatch(addComment(formData))
        setFormData({comment:"",postId:post._id})
    }
    const singleComment = post.comments?.map((comment) => {
        return <h2 key={comment._id}>{comment.comment}</h2>
    })
    return (
        <div>
            <h1>Post Detail</h1>
            <p>{post.title}</p>
            <form onSubmit={onSubmit}>
                <textarea maxLength="280" name="comment" type="text" value={comment} onChange={onChange} placeholder='Comment' />
                <button type="submit">Comment</button>
            </form>
            {singleComment}
        </div>
    )
}

export default PostDetail;