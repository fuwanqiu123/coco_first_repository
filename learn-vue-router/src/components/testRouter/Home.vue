<template>
    <div>
    <h5>路由展示区域：我是Home组件</h5>
    <router-link  to="/home/home_view1">Home嵌套路由1</router-link>
    <router-link  to="/home/home_view2">Home嵌套路由2</router-link>
    <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {

        };
    }
}

</script>

<style scoped>

</style>