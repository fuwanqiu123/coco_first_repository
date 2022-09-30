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
import Home from '../components/testRouter/Home'
import About from '../components/testRouter/About'



Vue.use(Router)

const routes = [
  {
    /*
    默认路由的配置
    */
    path: '/',
    redirect: '/home'
  }
  , {
    path: '/about',
    component: About
  },
  /*有俩嵌套子路由*/
  {
    path: '/home',
    component: Home,
    //给路由添加属性以用来在全局导航守卫时
    meta: {
      title: '我是Home页面'
    },
    children: [
      {
        path: 'home_view1',
        component: () => import('../components/testRouter/Home_View1')
      },
      {
        path: 'home_view2',
        component: () => import('../components/testRouter/Home_View2')
      },
    ]
  },
  /*动态路由的配置方式， 用 ：  的 方式  动态路由的意思路由后面的参数是不固定的，可能是用户的输入*/
  {
    path: '/my/:username',
    component: () => import('../components/testRouter/My')   //用懒加载方式加载路由 
  }
];

const router = new Router({
  routes,
  mode: 'history'   // H5 history模式 去除路径中的 # 号
});

/* 全局路由导航守卫 */
router.beforeEach((to, from, next) => {
  console.log(to);
  document.title = to.matched[0].meta.title;  //取出路由的属性
  next(); //前置钩子函数必须手动执行 后置钩子不需要
})

export default router











/* export default new Router({
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
}) */
/* import HelloWorld from '@/components/HelloWorld'
import HelloWorldSmall from '@/components/HelloWorldSmall'
 */
/* const HelloWorld=()=> import('@/components/HelloWorld')
const HelloWorldSmall=()=> import('@/components/HelloWorldSmall') */

/* const HelloWorld=()=> import('@/components/HelloWorld')
const HelloWorldSmall=()=> import('@/components/HelloWorldSmall') 
const HelloWorldChildren1= ()=> import('../components/HelloWorldChildren1')
const HelloWorldChildren2= ()=> import('../components/HelloWorldChildren2')
const Profile= ()=> import('../components/Profile')
const Profile_New= ()=> import('../components/Profile_New') */