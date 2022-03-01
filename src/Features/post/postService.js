import axios from "axios";

const API_URL = "http://localhost:3001";

const getAll = async () => {
    const res = await axios.get(API_URL + "/posts");
    return res.data
}

/* const post = async () => {
    const res = await axios.post(API_URL + "/posts")
    return res
} */


const postService = {
    getAll
};

export default postService;