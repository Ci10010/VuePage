<template>
  <div id="header">
    <div class="container">
      <div class="menuList">
        <div v-for="(menu,index) in menus" :key="index" class="item">
          <a :href="menu.path">{{ menu.name }}</a>
        </div>
      </div>
      <div>
        <Search></Search>
      </div>
    </div>
  </div>
</template>

<script>
  import Search from "../Content/Search";
  export default {
    name: "Header",
    components: {Search},
    data(){
      return{
        Search: '',
        menus:[
          {name: '首页',path: '/'},
          {name: '归档',path: '/statistic'},
          {name: '分类',path: '/category'},
          {name: '图册',path: '/gallery'},
          {name: '书签',path: '/bookmark'},
          {name: '留言',path: '/message'},
          {name: '关于',path: '/profile'},
        ]
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
        a{
          padding: 15px 10px;
          color: #565a5f;
          &:hover{
            color: #333333;
          }
        }
      }
    }
  }
</style>
