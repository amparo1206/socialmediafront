import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../../Features/post/postSlice"
import {Link} from 'react-router-dom'

const Post = () => {
    const  posts = useSelector((state) => state.post);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getAll());
    }, []);

    const post = posts.posts.map((post) => {
        return (
            <div className="post" key={post._id}>
                <Link to={"/post/" + post._id} />
            <p>{post.title}</p>
          </div>
        );
      });
    return (
    <div>{post}</div>
  )
}

export default Post