import { createRouter, createWebHistory } from 'vue-router'
import Card from '../components/Card.vue'
import Detail from '../components/Detail.vue'

const routes = [
    {
        path : '/',
        name : 'Card',
        component: Card
    },
    {
        path : '/Detail',
        name : 'Detail',
        component: Detail
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router