import axios from "axios";

export const registerUser = async ({username, email, password}) => {
    const {data} = await axios.post("/api/auth/register", {username, email, password});
    return data;
}

export const loginUser = async ({username, password}) => {
    const {data} = await axios.post("/api/auth/login", {username, password});
    return data;
}