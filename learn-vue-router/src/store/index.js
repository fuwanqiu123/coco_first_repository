/*
 * @Author: coco
 * @Date: 2022-09-21 11:03:20
 * @LastEditors: coco
 * @LastEditTime: 2022-09-21 14:39:11
 * @FilePath: \mygithub-vue-learning\coco_first_repository\learn-vue-router\src\store\index.js
 * @Description: Vuex的入口管理文件
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//推荐只使用一个store对象
const store = new Vuex.Store({
    state: {//保存共享状态  
        counter: 10000 //取得方法 在任意地方 $store.state.counter
    },
    mutations: {
        add(state) {
            state.counter++;
        },
        minus(state) {
            state.counter--;
        }
    },
    actions: {//异步操作？

    },
    getters: {//类似于计算属性

    },
    modules: { //专门划分模块儿

    }
});


/* const store = new Vuex.Store({

}); */
export default store

