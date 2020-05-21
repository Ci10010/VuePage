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
   padding: 10px 5px 10px 10px;
   /*border: 1px solid slateblue;*/
   *{
     margin-bottom: 10px;
     position: relative;
     padding: 15px;
     background-color: #ffffff;
     border-radius: 3px;
     box-shadow: 0 2px 4px 0 rgba(0,0,0,0.05);
   }
 }
</style>