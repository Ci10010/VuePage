<template>
  <div id="header">
    <div class="container">
      <div class="menuList">
          <router-link to="/index" tag="span">首页</router-link>
          <router-link to="/statistic" tag="span">归档</router-link>
          <router-link to="/category" tag="span">分类</router-link>
          <router-link to="/gallery" tag="span">图册</router-link>
          <router-link to="/share" tag="span">分享</router-link>
          <router-link to="/message" tag="span">留言</router-link>
          <router-link to="/profile" tag="span">关于</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang="less">
  #header{
    position: relative;
    height: 45px;
    background-color: #ffffff;
    box-shadow: 1px 1px rgba(0,0,0,0.05);
    /*border: 1px sienna solid;*/
    .container {
      width: 1360px;
      margin: 0 auto;
      height: 100%;
      /*border: 1px slateblue solid;*/
      display: flex;
      justify-content: space-between;
      align-items: center;
      .menuList {
        display: flex;
        span {
          color: #565a5f;
          font-weight: 600;
          padding: 15px;
          cursor: pointer;
          &:hover{
            color: #333333;
          }
       }
      }
    }
  }
</style>