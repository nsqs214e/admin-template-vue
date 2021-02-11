/*
 * @Author: your name
 * @Date: 2021-02-11 12:32:46
 * @LastEditTime: 2021-02-11 15:32:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin-template\src\mock\service.js
 */

import Mock from 'mockjs'
Mock.setup({
    timeout: '500-800',
});
const context = require.context('./', true, /\.mock.js$/);
context.keys().forEach((key) => {
    Object.keys(context(key)).forEach((paramKey) => {
        Mock.mock(...context(key)[paramKey]);
    });
});

export default Mock