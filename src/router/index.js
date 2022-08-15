import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/',
        name: 'home',
        component: () => import( '../views/HomeVue.vue')
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
