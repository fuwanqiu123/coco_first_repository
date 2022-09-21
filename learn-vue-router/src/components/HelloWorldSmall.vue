<!--
 * @Author: coco
 * @Date: 2022-09-20 16:09:36
 * @LastEditors: coco
 * @LastEditTime: 2022-09-21 15:00:42
 * @FilePath: \mygithub-vue-learning\coco_first_repository\learn-vue-router\src\components\HelloWorldSmall.vue
 * @Description:
-->
<template>
  <div>
    <h1>{{msg}}</h1>
    <!--使用store里的计算属性-->
    <h2>{{$store.getters.powercounter}}</h2>
    <button @click="add1">增加state里的count</button>
    <button @click="minus1">减少state里的count</button>
    <button @click="add(5)">每次加5</button>
    <button @click="add(10)">每次加10</button>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '我是小的HelloWorld'
    }
  },
  methods: {
    add1() {
      this.$store.commit('add');  //提交Mutations的修改
    },
    minus1() {
      this.$store.commit('minus'); //提交Mutations的修改
    },
    add(count) {
      this.$store.commit('addcount', count); //携带payload载荷提交Mutations的修改
      /*   
       //提交方式2
       this.$store.commit({
          type:"addcount",count
        }); */
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
