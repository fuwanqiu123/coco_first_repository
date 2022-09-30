<template>
    <div>
     <h5>路由展示区域：我是My组件</h5>
     <!--注意$route和this.$router的区别 这里取出当前活跃路由的路径参数-->
    <h5>这是动态路由的参数演示：{{$route.params.username}}</h5>
    </div>
</template>

<script>
export default {
    name: "My",
    data() {
        return {

        };
    }
}

</script>

<style scoped>

</style>