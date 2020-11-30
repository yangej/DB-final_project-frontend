import VueRouter from "vue-router";
import Login from "../views/Login";
import Register from "../views/Register";

const routes = [
    {
        path: '*',
        redirect: '/'
    },
    {
        path: '/',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    }
];
const router = new VueRouter({ routes });

export default router;