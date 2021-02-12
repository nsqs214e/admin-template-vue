/*
 * @Author: your name
 * @Date: 2021-02-03 20:18:15
 * @LastEditTime: 2021-02-12 14:10:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin-template\src\main.js
 */
import Vue from 'vue'

import App from './App.vue'

import 'normalize.css/normalize.css'

import {useAntdFnc} from './antd.js'

if(process.env.NODE_ENV !== 'production') require('./mock')

import request from './lib/request'

import router from './router/index'

Vue.prototype.$axios = request

useAntdFnc()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')