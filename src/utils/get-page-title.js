/*
 * @Author: your name
 * @Date: 2021-02-21 13:28:20
 * @LastEditTime: 2021-02-21 14:44:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin-template\src\utils\get-page-title.js
 */
import defaultSettings from '../setting.js'
const title = defaultSettings.title || 'Vue Element Admin'
export default function getPageTitle(pageTitle){
    if(pageTitle){
        return `${pageTitle}-${title}`
    }else{
        return `${title}`
    }
}