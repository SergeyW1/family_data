import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: '/family_data/',
        name: 'main',
        component: () => import('./components/Index.vue')
    },
    {
        path: '/family_data/preview',
        name: 'preview',
        component: () => import('./components/Preview.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router