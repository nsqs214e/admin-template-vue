/*
 * @Author: your name
 * @Date: 2021-02-11 00:28:30
 * @LastEditTime: 2021-02-12 05:02:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin-template\src\router\index.js
 */
import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);


import Layout from '@/layout'

export const constantRoutes = [
    {
        path:"/redirect/:path(.*)",
        component:()=>import ('@/views/redirect/index.vue')
    },
    {
        path:'/login',
        component:()=>import('@/views/login/index.vue'),
        hidden:true
    }
]


export const asyncRoutes = []


const createRouter = ()=> new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export default router