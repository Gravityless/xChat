<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: Xu Song
 * @Date: 2023-11-10 21:28:58
 * @LastEditors: Xu Song
 * @LastEditTime: 2021-03-18 00:10:42
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app,
html,
body {
  width: 100%;
  height: 100%;
}
body {
  display: block;
  margin: 0px;
}
.el-popover{
  height:200px;
  width:400px;
  overflow: scroll;
  overflow-x:auto;
}
</style>
