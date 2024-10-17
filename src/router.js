// src/router.js
import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'; // Use createWebHashHistory instead
import Home from './views/Home.vue';
import Pricing from './views/Pricing.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        props: true,
        component: Home,
    },
    {
        path: '/pricing',
        name: 'Pricing',
        component: Pricing,
    },
    // Add more routes here
];

const router = createRouter({
    history: createWebHistory("/portobellodrivertraining/"), // Change this to use hash history
    routes,
});

export default router;