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
    if (res.data) {
        getAll()
    }
    return res.data
}

const getById = async (_id) => {
    const res = await axios.get(API_URL + "/posts/id/" + _id);
    return res.data
}

const getPostByName = async (title) => {
    const res = await axios.get(API_URL + "/posts/title/" + title);
    return res.data
}

const deletePosts = async (_id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.delete(API_URL + "/posts/" + _id, {
        headers: {
            authorization: user?.token,
        },
    });
    return res.data;
};

const updatePosts = async (formData) => {
    console.log(formData._id)
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(formData)
    const res = await axios.put(API_URL + "/posts/" + formData._id, formData,{
        headers: {
            authorization: user?.token,
        }
    })
    if (res.data) {
        getById()
    }
    return res.data;
}


const like = async (_id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + "/posts/like/" + _id, {}, {
        headers: {
            authorization: user?.token,
        },
    });
    return res.data;
};

const disLike = async (_id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + "/posts/disLike/" + _id, {}, {
        headers: {
            authorization: user?.token,
        },
    });
    return res.data;
};

const addComment = async (formData) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const res = await axios.put(API_URL + "/posts/comments/" + formData._id, formData, {
        headers: {
            authorization: user?.token,
        },
    })
    return res.data
}

const postService = {
    getAll,
    create,
    getById,
    getPostByName,
    deletePosts,
    like,
    disLike,
    addComment,
    updatePosts
};

export default postService;