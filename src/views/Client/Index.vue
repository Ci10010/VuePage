<template>
  <div>
    <Header></Header>
    <div id="MainPage">
      <div class="container">
        <div class="widget">
        <!--Widget-->
          <Widget></Widget>
        </div>
        <div class="content">
          <!--MainContent-->
          <Main v-loading="isLoading"></Main>
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
    },
    data(){
      return{
        isLoading: true
      }
    },
    created() {
      setTimeout(() => {
        this.isLoading = false;
      },1500);
    }
  }
</script>

<style scoped lang="less">
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
