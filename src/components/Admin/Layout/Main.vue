<template>
  <div id="content">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import Statistic from "../../../views/Admin/Statistic";
  import Post from "../../../views/Admin/Post";
  import ArticlesAdmin from "../../../views/Admin/ArticlesAdmin";
  export default {
    name: "Main",
    components:{
      Statistic,Post,ArticlesAdmin
    }
  }
</script>

<style scoped lang="less">
  #content{
    position: relative;
    width: 100%;
    background: #ffffff;
  }
</style>