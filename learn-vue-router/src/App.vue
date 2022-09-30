<!--
 * @Author: coco
 * @Date: 2022-09-20 14:53:52
 * @LastEditors: coco
 * @LastEditTime: 2022-09-21 10:36:28
 * @FilePath: \mygithub-vue-learning\coco_first_repository\learn-vue-router\src\App.vue
 * @Description: 路由演示
-->
<template>
  <div id="app">
    <img src="./assets/logo.png">

    <!--路由演示-->
    <div>
      <h4>演示路由</h4>
      <!--默认会被渲染成 a 标签-->
      <!--replace为什么不生效-->
      <router-link replace to="/home" active-class="fwqselect">Home</router-link>
      <router-link replace to="/about" active-class="fwqselect">About</router-link>
      <router-link replace to="/my" active-class="fwqselect">My</router-link>
      <!--将其渲染成 button 标签-->
      <router-link to="/fwq" tag="button">FWQ</router-link>
      <router-link to="/zs" tag="button">ZS</router-link>
      <router-link to="/gh" tag="button">GH</router-link>
      <router-link to="/xh" tag="button">XH</router-link>
      <button @click="handclickhome">手动-Home</button>
      <button @click="handclickabout">手动-About</button>

      <!--这里的组件不会被频繁的 create destroy-->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>

export default {
  name: "App",
  data() {
    return {
      tn: "big"
    };
  },
  components: {},
  methods: {
    /*用代码进行路由跳转 */
    handclickhome() {
      this.$router.push('/home');//this.$router.replace('/home');   但是 replace 为什么不生效
    },
    handclickabout() {
      this.$router.push('/about');
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

/**默认路由生效时的css样式 */
.router-link-active {
  color: red;
}

/**自定义路由生效时的css样式 */
.fwqselect {
  color: blue
}
</style>
