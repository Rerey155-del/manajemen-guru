import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "../pages/dashboard/index.vue"
import Teachers from "../pages/teachers/index.vue"
import EditTeacher from "../pages/teachers/edit.vue"
import Students from "../pages/students/index.vue"
import EditStudent from "../pages/students/edit.vue"
import Subjects from "../pages/subjects/index.vue"
import EditSubject from "../pages/subjects/edit.vue"
import Classes from "../pages/classes/index.vue"
import EditClass from "../pages/classes/edit.vue"
import Schedules from "../pages/schedules/index.vue"
import EditSchedule from "../pages/schedules/edit.vue"
import Settings from "../pages/settings/index.vue"

const routes = [
    {
        path: '/',
        name : 'dashboard',
        component: Dashboard
    },
    {
        path: '/settings',
        name : 'settings',
        component: Settings
    },
    {
        path: '/teachers',
        name : 'teachers',
        component: Teachers
    },
    {
        path: '/teachers/edit',
        name : 'edit-teacher',
        component: EditTeacher
    },
    {
        path: '/students',
        name : 'students',
        component: Students
    },
    {
        path: '/students/edit',
        name : 'edit-student',
        component: EditStudent
    },
    {
        path: '/subjects',
        name : 'subjects',
        component: Subjects
    },
    {
        path: '/subjects/edit',
        name : 'edit-subject',
        component: EditSubject
    },
    {
        path: '/classes',
        name : 'classes',
        component: Classes
    },
    {
        path: '/classes/edit',
        name : 'edit-class',
        component: EditClass
    },
    {
        path: '/schedules',
        name : 'schedules',
        component: Schedules
    },
    {
        path: '/schedules/edit',
        name : 'edit-schedule',
        component: EditSchedule
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router