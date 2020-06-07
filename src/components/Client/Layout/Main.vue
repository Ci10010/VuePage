<template>
  <div id="content">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
  import Article from "../Content/Article";
  import Category from "../../../views/Client/Category";
  import Statistic from "../../../views/Client/Statistic";
  import Gallery from "../../../views/Client/Gallery";
  import Bookmark from "../../../views/Client/Bookmark";
  import Message from "../../../views/Client/Message"
  import Profile from "../../../views/Client/Profile";
  import ArticleItem from "../Content/ArticleItem";
  import SearchResult from "../Content/SearchResult";
  export default {
    name: "Main",
    components:{
      Article,Category,Statistic,Gallery,Bookmark,Message,Profile,ArticleItem,SearchResult
    }
  }
</script>

<style scoped lang="less">
  #content{
    position: relative;
    border-radius: 3px;
  }
</style>