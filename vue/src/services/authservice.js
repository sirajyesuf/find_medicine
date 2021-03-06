import client from "../axios.js";

async function register(payload) {
    await get_csrf_cookie();
    return client.post("/account/register", payload);
}
async function login(payload) {
    await get_csrf_cookie();
    return client.post("/account/login", payload);
}
async function forgotPassword(payload) {
    await get_csrf_cookie();
    return client.post("/account/forgot-password", payload);
}
async function passwordReset(payload) {
    await get_csrf_cookie();
    return client.post("/account/reset-password", payload);
}
function logout() {
    return client.post("account/logout");
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
    forgotPassword,
    passwordReset,
    getAuthUser,
    logout,
};
