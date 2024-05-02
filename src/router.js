import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),//createWebHistory(import.meta.env.BASE_URL)
    routes: [
        {
            path: '/',
            name: 'home',
            text: '首頁',
            component: () => import('./views/Home.vue')
            // meta: { requiresAuth: true }
        },
        {
            path: '/shop-data-table',
            name: 'shopDataTable',
            text: '產品數據表',
            component: () => import('./views/shopDataTable.vue')
        },
        {
            path: '/note',
            name: 'note',
            text: '筆記',
            component: () => import('./views/Note.vue')
        },
        {
            path: '/shopping',
            name: 'shopping',
            text: '購物',
            component: () => import('./views/Shopping.vue')
        },
        // {
        //     path: '/chat',
        //     name: 'chat',
        //     text: '聊天AI',
        //     component: () => import('./views/Chat.vue')
        //     // meta: { requiresAuth: true }
        // },
        // {
        //     path: '/map',
        //     name: 'map',
        //     text: '地圖',
        //     component: () => import('./views/Map.vue')
        //     // meta: { requiresAuth: true }
        // },
        {
            path: '/travel',
            name: 'travel',
            text: '旅遊',
            component: () => import('./views/Travel.vue')
            // meta: { requiresAuth: true }
        },
        // {
        //     path: '/parking-seats',
        //     name: 'parkingSeats',
        //     text: '停車場選擇',
        //     component: () => import('./views/ParkingSeats.vue')
        //     // meta: { requiresAuth: true }
        // },
        {
            path: "/product",
            name: "product",
            component: () => import('./views/Product.vue')
        },
        {
            path: '/login',
            name: 'login',
            text: '登入',
            component: () => import('./views/Login.vue')
            // meta: { requiresAuth: true }
        }
    ]
})

export default router
