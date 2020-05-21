<template>
  <div>
    <Header></Header>
    <!--MainPage-->
    <div id="MainPage">
      <div class="container">
        <div class="widget">
        <!--Widget-->
          <Widget></Widget>
        </div>
        <div class="content">
          <!--MainContent-->
          <Main></Main>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "../components/Home/Header";
  import Widget from "../components/Home/Widget";
  import Main from "../components/Home/Main";
  import Footer from "../components/Home/Footer";
  export default {
    name: "Home",
    components:{
      Header,Widget,Main,Footer
    }
  }
</script>

<style scoped lang="less">
  #MainPage{
    position: relative;
    width: 1360px;
    margin: 30px auto;
    /*border: 1px solid #5FB878;*/
    .container{
      position: relative;
      /*border: 1px solid #5FB878;*/
      display: flex;
      justify-content: space-between;
      .widget{
        width: 22%;
        /*border: 1px solid #0366d6;*/
      }
      .content{
        width: 78%;
        padding: 10px 10px 10px 5px;
        /*border: 1px solid sandybrown;*/
      }
    }
  }
</style>
