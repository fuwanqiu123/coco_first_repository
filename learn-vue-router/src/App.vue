<!--
 * @Author: coco
 * @Date: 2022-09-20 14:53:52
 * @LastEditors: coco
 * @LastEditTime: 2022-09-21 10:36:28
 * @FilePath: \mygithub-vue-learning\coco_first_repository\learn-vue-router\src\App.vue
 * @Description: 
-->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-link to="/small">HelloWorldSmall</router-link>
   <router-link :to="'/'+tn">HelloWorld1</router-link>
   <router-link to="/profile/13597869259">profile</router-link>
   <router-link v-bind:to="{path:'/profile_new',query:{name:'fwq'}}">profile_new</router-link>
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      tn:'big'
    }
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
