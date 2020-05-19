<template>
  <div id="widget">
    <Author></Author>
    <Category></Category>
    <News></News>
    <Statistic></Statistic>
  </div>
</template>

<script>
  import Author from "../Widget/Author";
  import Category from "../Widget/Category";
  import News from "../Widget/News";
  import Statistic from "../Widget/Statistic";
  export default {
    name: "Widget",
    components:{
      Author,Category,News,Statistic
    }
  }
</script>

<style scoped lang="less">
 #widget{
   padding: 10px;
   *{
     margin-bottom: 15px;
     position: relative;
     padding: 15px;
     background-color: #ffffff;
     border-radius: 3px;
     box-shadow: 0 1px 2px rgba(0,0,0,0.05);
   }
 }
</style>