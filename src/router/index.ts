
import {createRouter, createWebHistory} from 'vue-router'
import Login from "../views/Login.vue"
import Dashboard from "../views/Dashboard.vue"
import GuruForm from '../views/GuruForm.vue'


const routes = [
    {
        path : '/',
        name : 'login',
        component : Login
    },
    {
        path: '/dashboard',
        name : 'dashboard',
        component: Dashboard
    },
    {
        path: '/guru-form',
        name : 'GuruForm',
        component: GuruForm
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router