import { useParams } from "react-router-dom";

const PostDetail = () => {
    const PostDetail = () => {
        const { _id } = useParams();
        console.log(_id)
    }
    return (
        <div>PostDetail</div>
    )
}

export default PostDetail