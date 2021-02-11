/*
 * @Author: your name
 * @Date: 2021-02-03 20:18:15
 * @LastEditTime: 2021-02-11 15:33:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin-template\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import {useAntdFnc} from './antd.js'

if(process.env.NODE_ENV !== 'production') require('./mock')

import request from '@/lib/request.js'
Vue.prototype.$axios = request
useAntdFnc()
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')