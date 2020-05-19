<template>
  <div id="header">
    <div class="container">
      <div class="menuList">
        <router-link to="/article" tag="span">首页</router-link>
        <router-link to="/statistic" tag="span">归档</router-link>
        <router-link to="/category" tag="span">分类</router-link>
        <router-link to="/gallery" tag="span">图册</router-link>
        <router-link to="/share" tag="span">分享</router-link>
        <router-link to="/message" tag="span">留言</router-link>
        <router-link to="/profile" tag="span">关于</router-link>
      </div>
      <div class="loginBtn">
        <router-link to="/login" tag="span">登录</router-link>
        <span>|</span>
        <router-link to="/regist" tag="span">注册</router-link>
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
    height: 50px;
    background-color: #ffffff;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    /*border: 1px sienna solid;*/
    .container {
      width: 1312px;
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
       }
      }
      .loginBtn{
        display: flex;
        align-items: center;
        right: 0;
        margin-right: 5px;
        span{
          padding: 2px;
          cursor: pointer;
          font-size: 13px;
          color: #566268;
          &:hover{
          color: #333333;
          font-size: 14px;
          }
        }
      }
     }
 }
</style>