import { createRouter, createWebHistory } from 'vue-router'
import { useAuth } from '@/composables/useAuth'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/login/index.vue')
    },
    {
        path: '/',
        name : 'dashboard',
        component: () => import('@/pages/dashboard/index.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/settings',
        name : 'settings',
        component: () => import('@/pages/settings/index.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/teachers',
        name : 'teachers',
        component: () => import('@/pages/teachers/index.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/teachers/edit',
        name : 'edit-teacher',
        component: () => import('@/pages/teachers/edit.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/students',
        name : 'students',
        component: () => import('@/pages/students/index.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/students/edit',
        name : 'edit-student',
        component: () => import('@/pages/students/edit.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/subjects',
        name : 'subjects',
        component: () => import('@/pages/subjects/index.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/subjects/edit',
        name : 'edit-subject',
        component: () => import('@/pages/subjects/edit.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/classes',
        name : 'classes',
        component: () => import('@/pages/classes/index.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/classes/edit',
        name : 'edit-class',
        component: () => import('@/pages/classes/edit.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/schedules',
        name : 'schedules',
        component: () => import('@/pages/schedules/index.vue'),
        meta: { requiresAuth: true }
    },
    {
        path: '/schedules/edit',
        name : 'edit-schedule',
        component: () => import('@/pages/schedules/edit.vue'),
        meta: { requiresAuth: true }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuth()
  
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next('/login')
  } else if (to.path === '/login' && isAuthenticated.value) {
    next('/')
  } else {
    next()
  }
})

export default router