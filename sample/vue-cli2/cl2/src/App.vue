<!--
 * @Author: coco
 * @Date: 2022-09-20 11:07:50
 * @LastEditors: coco
 * @LastEditTime: 2022-09-20 11:40:29
 * @FilePath: \mygithub-vue-learning\coco_first_repository\sample\vue-cli2\cl2\src\App.vue
 * @Description: 
-->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
