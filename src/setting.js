/*
 * @Author: your name
 * @Date: 2021-02-21 13:30:39
 * @LastEditTime: 2021-02-22 23:29:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin-template\src\setting.js
 */  
module.exports = {
    title: 'Admin',
  
    /**
     * @type {boolean} true | false
     * @description Whether show the settings right-panel
     */
    showSettings: true,
  
    /**
     * @type {boolean} true | false
     * @description Whether need tagsView
     */
    tagsView: true,
  
    /**
     * @type {boolean} true | false
     * @description Whether fix the header
     */
    fixedHeader: false,
  
    /**
     * @type {boolean} true | false
     * @description Whether show the logo in sidebar
     */
    sidebarLogo: false,
  
    /**
     * @type {string | array} 'production' | ['production', 'development']
     * @description Need show err logs component.
     * The default is only used in the production env
     * If you want to also use it in dev, you can pass ['production', 'development']
     */
    errorLog: 'production'
  }