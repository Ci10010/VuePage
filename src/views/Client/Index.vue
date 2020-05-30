<template>
  <div>
    <Header></Header>
    <!--MainPage-->
<!--    <div id="headerImg">-->
<!--      <img src="../assets/img/bg-title.png" alt=""/>-->
<!--    </div>-->
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
  import Header from "../../components/Client/Layout/Header";
  import Widget from "../../components/Client/Layout/Widget";
  import Main from "../../components/Client/Layout/Main";
  import Footer from "../../components/Client/Layout/Footer";
  export default {
    name: "Home",
    components:{
      Header,Widget,Main,Footer
    }
  }
</script>

<style scoped lang="less">
  /*#headerImg{*/
  /*  position: relative;*/
  /*  display: block;*/
  /*  !*border: 1px seagreen solid;*!*/
  /*  width: 1360px;*/
  /*  margin: 0 auto;*/
  /*  img{*/
  /*    z-index: 2;*/
  /*    width: 100%;*/
  /*  }*/
  /*}*/
  #MainPage{
    position: relative;
    width: 1360px;
    margin: 25px auto;
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
