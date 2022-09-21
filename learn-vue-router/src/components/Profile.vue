<!--
 * @Author: coco
 * @Date: 2022-09-20 16:09:36
 * @LastEditors: coco
 * @LastEditTime: 2022-09-21 09:10:03
 * @FilePath: \mygithub-vue-learning\coco_first_repository\learn-vue-router\src\components\profile.vue
 * @Description:
-->
<template>
  <div>
    <h5>{{msg}}</h5>
    <h5>{{thisid}}</h5>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      msg: 'profile'
    }
  },
  computed:{
    thisid(){
      return this.$route.params.id
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
