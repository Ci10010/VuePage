<template>
  <div id="content">
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from "../Content/Home";
  import Category from "../Content/Category";
  import Statistic from "../Content/Statistic";
  import Message from "../Content/Message"
  import Profile from "../Content/Profile";
  export default {
    name: "Main",
    components:{
      Home,Category,Statistic,Message,Profile
    }
  }
</script>

<style scoped>
  #content{
    margin: 10px;
    position: relative;
    padding: 15px;
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
  }
</style>