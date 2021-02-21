/*
 * @Author: your name
 * @Date: 2021-02-12 14:23:53
 * @LastEditTime: 2021-02-21 14:44:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin-template\src\permission.js
 */
import router from './router'
import NPprogress from 'nprogress'
import 'nprogress/nprogress.css'
import getPageTitle from '@/utils/get-page-title'
const whiteList = ['/login','/auth-redirect']
router.beforeEach((to,from,next)=>{
    NPprogress.start();
    next()
    
})
router.afterEach(()=>{
    NPprogress.done()
})
