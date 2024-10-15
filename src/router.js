// src/router.js
import { createRouter, createWebHashHistory } from 'vue-router'; // Use createWebHashHistory instead
import Home from './views/Home.vue';
import Pricing from './views/Pricing.vue';

const routes = [
    {
        path: '/portobellodrivertraining/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/portobellodrivertraining/pricing',
        name: 'Pricing',
        component: Pricing,
    },
    // Add more routes here
];

const router = createRouter({
    history: createWebHashHistory(), // Change this to use hash history
    routes,
});

export default router;