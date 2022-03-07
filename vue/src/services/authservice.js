import client from "../axios.js";
import axios from "axios"
async function register(payload) {
    await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie");
    await client.post("/register");
}
async function login(payload) {
    await client.get("/sanctum/csrf-cookie");
    return client.post(payload);
}
function getAuthUser() {
    return client.get("/api/users/auth");
}

export default {
    register,
    login,
    getAuthUser,
};
