<template>
  <div>
    <h1>Profile</h1>
    <button @click="logout">退出登录</button>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    methods:{
      logout(){
        window.sessionStorage.clear();
        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped>
  div{
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 20%;
  }
</style>