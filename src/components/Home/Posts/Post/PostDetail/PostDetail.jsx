import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const PostDetail = () => {
    const PostDetail = () => {
        const { _id } = useParams();
        const dispatch = useDispatch();
        const { post } = useSelector((state) => state.post);
        useEffect(() => {
            dispatch(getById(_id))
        })
    }
    return (
        <div>
            <h1>Post Detail</h1>
            <p>{post.title}</p>
        </div>
    )
}

export default PostDetail