/*
 * @Author: your name
 * @Date: 2021-02-12 14:23:53
 * @LastEditTime: 2021-02-22 23:34:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin-template\src\permission.js
 */
import router from './router'
import NPprogress from 'nprogress'
import 'nprogress/nprogress.css'
import getPageTitle from '_u/get-page-title'
import storage from '_u/storage.js'
const whiteList = ['/login','/auth-redirect']
router.beforeEach((to,from,next)=>{
    const token = storage.getItem('token')
    NPprogress.start();
    document.title = getPageTitle(to.meta.title)
    next()
    
})
router.afterEach(()=>{
    NPprogress.done()
})
