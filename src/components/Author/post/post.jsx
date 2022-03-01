import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, deletePost } from "../../../Features/post/postSlice";

const Post = () => {
  const { posts} = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(async () => {
    await dispatch(getAll());
  }, []);

  const post = posts.map((post) => {
    return (
      <div className="posts">
            <p>{post.title}</p>
            <button onClick={() => dispatch(deletePost(posts._id))}>Delete</button>
      </div>
    );
  });
  return <div>{post}</div>;
};

export default Post;