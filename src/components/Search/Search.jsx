import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import{useParams} from "react-router-dom"
import { getPostByName } from "../../Features/post/postSlice";
import Post from "../Home/Posts/Post/Post";
const Search = () => {
    const { title } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostByName(title))
    }, [title])
    return <div><Post/></div>
}

export default Search