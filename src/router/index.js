import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Contacts from '../pages/Contacts/ContactsIndex.vue';
import ContactsSingle from '../pages/Contacts/ContactsSingle.vue';
import Login from '../pages/Login.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contacts',
        name: 'Contacts Index',
        component: Contacts
    },
    {
        path: '/contacts/:id',
        name: 'Contacts Single',
        component: ContactsSingle
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from) => {
    let isAuthorized = localStorage.getItem('authorized')
    if(!isAuthorized && to.name !== 'Login') {
        return {name: 'Login'}
    }
})

export default router