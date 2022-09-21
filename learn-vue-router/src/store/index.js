/*
 * @Author: coco
 * @Date: 2022-09-21 11:03:20
 * @LastEditors: coco
 * @LastEditTime: 2022-09-21 16:28:59
 * @FilePath: \mygithub-vue-learning\coco_first_repository\learn-vue-router\src\store\index.js
 * @Description: Vuex的入口管理文件
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const moduleB={

}

//推荐只使用一个store对象
const store = new Vuex.Store({
    state: {//保存共享状态  
        counter: 10000 //取得方法 在任意地方 $store.state.counter
    },
    //修改store里的state ,只有通过提交Mutations的方式
    //不要在里面进行异步操作
    mutations: {
        add(state) {   //add叫做事件类型 后面的方法叫做回调函数     这里的add也可以抽成常量放在其他文件中   [add](state){}
            state.counter++;
        },
        minus(state) {
            state.counter--;
        },
        addcount(state, count) {  //提交时也可以携带其他参数 payload 学名叫携带负载    建议将count改为payload,有时候会变为一个对象
            state.counter += count;
        }
    },
    actions: {//异步操作？

    },
    getters: {//类似于计算属性
        powercounter(state) {
            // return Math.pow(state.counter,2)
            return state.counter

        }
    },
    modules: { //专门划分模块儿
        a:moduleB
    }
});


/* const store = new Vuex.Store({

}); */
export default store

