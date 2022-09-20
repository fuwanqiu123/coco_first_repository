/*
 * @Author: coco
 * @Date: 2022-09-20 14:53:52
 * @LastEditors: coco
 * @LastEditTime: 2022-09-20 17:36:03
 * @FilePath: \mygithub-vue-learning\coco_first_repository\learn-vue-router\src\router\index.js
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorldSmall from '@/components/HelloWorldSmall'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'small'
    }, {
      path: '/small',
      name: 'small',
      component: HelloWorldSmall
    }, {
      path: '/big',
      name: 'big',
      component: HelloWorld
    }
  ],
  mode:'history'
})
