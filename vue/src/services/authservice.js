import client from "../axios.js";

async function register(payload) {
    await get_csrf_cookie();
    return client.post("/account/register",payload);
}
async function login(payload) {
    return client.post(payload);
}
function getAuthUser() {
    return client.get("/users/auth");
}

async function get_csrf_cookie() {
    return await client.get("/sanctum/csrf-cookie");
}
export default {
    register,
    login,
    getAuthUser,
};
