<!--
 * @Author: your name
 * @Date: 2021-02-03 20:18:15
 * @LastEditTime: 2021-02-11 15:31:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \admin-template\src\App.vue
-->
<template>
  <div id="app">
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
