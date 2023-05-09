import { createRouter,createWebHistory } from "vue-router";

const routes = [
    {
        path:'/:pathMatch(.*)*',
        name:'Home',
        component:()=> import('./views/main.vue')
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes
});


export default router;
