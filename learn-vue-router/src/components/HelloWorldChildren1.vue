<!--
 * @Author: coco
 * @Date: 2022-09-20 16:09:36
 * @LastEditors: coco
 * @LastEditTime: 2022-09-21 08:39:59
 * @FilePath: \mygithub-vue-learning\coco_first_repository\learn-vue-router\src\components\HelloWorldChildren1.vue
 * @Description:
-->
<template>
  <div>
    <ul>
    <li>
      {{msg}} 
      </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorldChildren1',
  data () {
    return {
      msg: 'HelloWorldChildren1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul li{
  color: #42b983;
}
</style>
