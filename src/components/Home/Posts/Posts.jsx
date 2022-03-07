import React, { useEffect } from 'react'
import Post from "./Post/Post"
import  { getAll } from "../../../Features/post/postSlice"
import { useDispatch } from 'react-redux'

const Posts = () => {
  const dispatch = useDispatch()
  useEffect(async () => {
    await dispatch(getAll());
}, []);
    return (
        <Post />
  )
}

export default Posts;