<template>
  <div id="header">
    <div class="container">
      <div class="menuList">
          <router-link to="/index" tag="span">首页</router-link>
          <router-link to="/statistic" tag="span">归档</router-link>
          <router-link to="/category" tag="span">分类</router-link>
          <router-link to="/gallery" tag="span">图册</router-link>
          <router-link to="/bookmark" tag="span">书签</router-link>
          <router-link to="/message" tag="span">留言</router-link>
          <router-link to="/profile" tag="span">关于</router-link>
<!--        <div v-for="(menu,index) in menus" :key="index" class="item">-->
<!--          <a :href="menu.path">{{ menu.name }}</a>-->
<!--        </div>-->
      </div>
      <div class="Search">
        <el-input class="SearchInput" placeholder="请输入内容" v-model="Search">
        <i class="el-icon-search el-input__icon Search-icon" slot="suffix"></i>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data(){
      return{
        Search: '',
        // menus:[
        //   {name: '首页',path: '/index'},
        //   {name: '归档',path: '/statistic'},
        //   {name: '分类',path: '/category'},
        //   {name: '图册',path: '/gallery'},
        //   {name: '书签',path: '/bookmark'},
        //   {name: '留言',path: '/message'},
        //   {name: '关于',path: '/profile'},
        // ]
      }
    },
    methods:{
      to(path){
        this.$router.push(path);
      }
    }
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
        span{
          font-weight: 600;
          padding: 15px;
          color: #565a5f;
          cursor: pointer;
          &:hover{
            color: #333333;
          }
          /*display: inline;*/
          /*a{*/
          /*  text-decoration: none;*/
          /*  color: #565a5f;*/
          /*  &:hover{*/
          /*    color: #333333;*/
          /*  }*/
          /*}*/
       }
      }
      .Search{
        margin-right: 10px;
        .Search-icon{
          cursor: pointer;
          line-height: 35px;
          &:hover{
            color: #565a5f;
          }
        }
      }
    }
  }
</style>
<style>
  .SearchInput>.el-input__inner{
    height: 35px;
    border-radius: 21px !important;
  }
</style>