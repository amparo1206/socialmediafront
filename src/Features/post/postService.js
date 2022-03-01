import axios from "axios";

const API_URL = "http://localhost:3001";

const getAll = async () => {
    const res = await axios.get(API_URL + "/posts");
    return res.data
}

const create = async (post) => {
    console.log(post)
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    const res = await axios.post(API_URL + "/posts", post, {
        headers: {
            authorization: user?.token
        }
    })
    return res.data
}

const postService = {
    getAll,
    create
};

export default postService;