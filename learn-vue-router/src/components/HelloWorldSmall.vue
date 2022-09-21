<!--
 * @Author: coco
 * @Date: 2022-09-20 16:09:36
 * @LastEditors: coco
 * @LastEditTime: 2022-09-21 14:29:06
 * @FilePath: \mygithub-vue-learning\coco_first_repository\learn-vue-router\src\components\HelloWorldSmall.vue
 * @Description:
-->
<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>{{$store.state.counter}}</h2>
    <button @click="add1">增加state里的count</button>
    <button @click="minus1">减少state里的count</button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return {
      msg: '我是小的HelloWorld'
    }
  },
  methods:{
    add1(){
      this.$store.commit('add');
    },
    minus1(){
      this.$store.commit('minus');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  color: #42b983;
}
</style>
