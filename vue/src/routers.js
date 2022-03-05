import AuthLayout from "./components/layouts/Auth.vue";
import Login from "./pages/auth/Login.vue";
import Register from "./pages/auth/Register.vue";
import ForgotPassword from "./pages/auth/ForgotPassword.vue";
import ResetPassword from "./pages/auth/ResetPassword.vue";
import Landing from "./pages/Landing.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: Landing,
    },
    {
        path: "/account",
        component: AuthLayout,
        children: [
            {
                path: "login",
                name: "login",
                component: Login,
            },
            {
                path: "register",
                name: "register",
                component: Register,
            },
            {
                path: "forgotpassword",
                name: "forgotpassword",
                component: ForgotPassword,
            },
            {
                path: "resetpassword",
                name: "resetpassword",
                component: ResetPassword,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
