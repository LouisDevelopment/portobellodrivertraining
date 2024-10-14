// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Pricing from './views/Pricing.vue';

const routes = [
    {
        path: 'portobellodrivertraining/',
        name: 'Home',
        component: Home,
    },
    {
        path: 'portobellodrivertraining/pricing',
        name: 'Pricing',
        component: Pricing,
    },
    // Add more routes here
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;