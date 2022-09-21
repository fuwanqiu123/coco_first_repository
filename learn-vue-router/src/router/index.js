/*
 * @Author: coco
 * @Date: 2022-09-20 14:53:52
 * @LastEditors: coco
 * @LastEditTime: 2022-09-21 10:36:32
 * @FilePath: \mygithub-vue-learning\coco_first_repository\learn-vue-router\src\router\index.js
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
/* import HelloWorld from '@/components/HelloWorld'
import HelloWorldSmall from '@/components/HelloWorldSmall'
 */
/* const HelloWorld=()=> import('@/components/HelloWorld')
const HelloWorldSmall=()=> import('@/components/HelloWorldSmall') */

const HelloWorld=()=> import('@/components/HelloWorld')
const HelloWorldSmall=()=> import('@/components/HelloWorldSmall') 
const HelloWorldChildren1= ()=> import('../components/HelloWorldChildren1')
const HelloWorldChildren2= ()=> import('../components/HelloWorldChildren2')
const Profile= ()=> import('../components/Profile')
const Profile_New= ()=> import('../components/Profile_New')

Vue.use(Router)
export default new Router({
  routes: [
     {
      path: '/',
      redirect: 'small'
    },  
    {
      path: '/profile/:id',
      name: 'Profile',
      component: Profile
    }, 
    {
      path: '/profile_new',
      name: 'Profile_new',
      component: Profile_New
    }, 
    
    {
      path: '/small',
      name: 'small',
      component: HelloWorldSmall
    }, {
      path: '/big',
      name: 'big',
      component: HelloWorld,
      children:[
        {
          path: '/',
          redirect: 'HelloWorldChildren2'
        },  
        {
          path: 'HelloWorldChildren1',
          name: 'HelloWorldChildren1',
          component: HelloWorldChildren1
        },
        {
          path: 'HelloWorldChildren2',
          name: 'HelloWorldChildren2',
          component: HelloWorldChildren2
        }
      ]
    }
  ],
  mode:'history'
})
