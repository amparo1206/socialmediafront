import axios from "axios";

const API_URL = "http://localhost:3001";

const register = async (userData) => {
    try {
        const res = await axios.post(API_URL + "/users", userData);
        return res.data;
    } catch (error) {
        console.error(error)
    }
};

const login = async(userData)=>{
    const res = await axios.post(API_URL + '/users/login',userData)
    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
    return res.data
}

const authService = {
  register,
  login
};

export default authService;