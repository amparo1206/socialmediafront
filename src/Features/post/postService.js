import axios from "axios";

const API_URL = "http://localhost:3001";

const getAll = async () => {
    const res = await axios.get(API_URL + "/posts");
    return res.data
}

const create = async (post) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const res = await axios.post(API_URL + "/posts", post, {
        headers: {
            authorization: user?.token
        }
    })
    return res.data
}

const getById = async (_id) => {
    const res = await axios.get(API_URL + "/posts/_id/" + _id);
    return res.data
}

const deletePost = async (id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.delete(API_URL + "/posts/" + id, {
        headers: {
            authorization: user?.token,
        },
    });
    return res.data;
};


const postService = {
    getAll,
    create,
    getById,
    deletePost
};

export default postService;