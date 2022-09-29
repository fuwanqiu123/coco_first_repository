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
    <!-- <button>Home</button>
    <button>About</button>
    <button>My</button> -->

    <router-link to="/home">Home</router-link>
    <router-link to="/bout">About</router-link>
    <router-link to="/my">My</router-link>
    <router-view></router-view>



  </div>
</template>
<script>

/* import Home from './components/testRouter/Home.vue'; */

export default {
    name: "App",
    data() {
        return {
            tn: "big"
        };
    },
    components: {  }
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
