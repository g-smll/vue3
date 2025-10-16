import {createRouter, createWebHistory} from "vue-router";

export default createRouter({

    history: createWebHistory(),

    routes: [
        {
            path: "/home",
            component: () => import("@/pages/home/index.vue"),
            meta: {
                title: "首页",
            },
        },
        {
            path: "/detail",
            component: () => import("@/pages/detail/index.vue"),
        },
        {
            path: "/",
            redirect: "/home",
        }
    ]
});
