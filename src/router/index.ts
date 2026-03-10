import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "../pages/dashboard/index.vue"
import Teachers from "../pages/teachers/index.vue"
import Students from "../pages/students/index.vue"
import Subjects from "../pages/subjects/index.vue"
import Classes from "../pages/classes/index.vue"
import Schedules from "../pages/schedules/index.vue"
import Users from "../pages/users/index.vue"

const routes = [
    {
        path: '/',
        name : 'dashboard',
        component: Dashboard
    },
    {
        path: '/users',
        name : 'users',
        component: Users
    },
    {
        path: '/teachers',
        name : 'teachers',
        component: Teachers
    },
    {
        path: '/students',
        name : 'students',
        component: Students
    },
    {
        path: '/subjects',
        name : 'subjects',
        component: Subjects
    },
    {
        path: '/classes',
        name : 'classes',
        component: Classes
    },
    {
        path: '/schedules',
        name : 'schedules',
        component: Schedules
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router