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
      <div class="loginBtn" v-show="false">
        <router-link to="/login" tag="span">登录</router-link>
        <span>|</span>
        <router-link to="/regist" tag="span">注册</router-link>
      </div>
      <div class="online" v-show="true">
        <i class="fa fa-bell"></i>
        <a href="#"><img alt="Avatar.jpg" src="../../assets/img/avatar.jpg" @mouseenter="mouseenter" @mouseleave="mouseleave"/></a>
        <div class="setting" v-show="isLogin">
          <div>
            <i class="fa fa-user" aria-hidden="true"></i>
            <a href="#">个人中心</a>
          </div>
          <div>
            <i class="fa fa-cog" aria-hidden="true"></i>
            <a href="#">博客管理</a>
          </div>
          <div>
            <i class="fa fa-sign-out" aria-hidden="true"></i>
            <a href="#">退出登录</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data(){
      return{
        isLogin: false
      }
    },
    methods:{
      mouseenter(){
        this.isLogin = true
      },
      mouseleave(){
        this.isLogin = false
      }
    }
  }
</script>

<style scoped lang="less">
  #header{
    position: relative;
    height: 45px;
    background-color: #ffffff;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
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
            background-color: #fafafa;
          }
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
          }
        }
      }
      .online{
        margin-right: 10px;
        padding-top: 8px;
        display: flex;
        color: #666;
        cursor: pointer;
        /*border: 1px slateblue solid;*/
        i{
          padding: 7px 10px 0 0;
        }
        img{
          width: 25px;
          border-radius: 50%;
        }
        .setting{
          position: absolute;
          padding: 10px;
          z-index: 100000;
          top: 45px;
          right: 80px;
          background-color: #ffffff;
          box-shadow: 0 6px 10px rgba(0,0,0,0.08), 0 0 1px rgba(0,0,0,0.1);
          border-radius: 5px;
          div{
            padding: 0 5px;
            &:hover{
              background-color: rgb(240,240,245);
              border-radius: 3px;
            }
          }
          div>i,a{
            display: inline-block;
            padding: 5px 3px;
            text-decoration: none;
            color: #666;
            font-size: 13px;
          }
        }
      }
    }
  }
</style>