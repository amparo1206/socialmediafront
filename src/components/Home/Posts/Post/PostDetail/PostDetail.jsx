import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getById, addComment } from "../../../../../Features/post/postSlice"
import "./PostDetail.scss"


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
        <div className="single-post">
            <p className="post-title-coment">{post.title}</p>
            <section className="coment-form">
            <form className="form-post" onSubmit={onSubmit}>
                <textarea maxLength="280" name="comment" type="text" value={comment} onChange={onChange} placeholder='Comment' />
                <button className="button-post" type="submit">Comment</button>
            </form>
            </section>
            {singleComment}
        </div>
    )
}

export default PostDetail;