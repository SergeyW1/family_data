import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('./components/Index.vue')
    },
    {
        path: '/preview',
        name: 'preview',
        component: () => import('./components/Preview.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router