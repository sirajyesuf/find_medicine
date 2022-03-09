import AuthLayout from "./components/layouts/Auth.vue";
import Login from "./pages/auth/Login.vue";
import Logout from "./pages/auth/Logout.vue";
import Register from "./pages/auth/Register.vue";
import ForgotPassword from "./pages/auth/ForgotPassword.vue";
import ResetPassword from "./pages/auth/ResetPassword.vue";
import Landing from "./pages/Landing.vue";
import Dashboard from "./pages/Dashboard.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "landing",
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
                path: "logout",
                component: Logout,
            },
            {
                path: "register",
                name: "register",
                component: Register,
            },
            {
                path: "forgot-password",
                name: "forgotpassword",
                component: ForgotPassword,
            },
            {
                path: "reset-password",
                name: "resetpassword",
                component: ResetPassword,
            },
        ],
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
