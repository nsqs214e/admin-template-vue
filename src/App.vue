<!--
 * @Author: your name
 * @Date: 2021-02-03 20:18:15
 * @LastEditTime: 2021-02-12 04:27:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin-template\src\App.vue
-->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted(){
    this.$axios('/getUserInfo').then(res=>{
      console.log(res)
    })
  },
  components: {
  }
}
</script>

<style lang="less">
</style>
