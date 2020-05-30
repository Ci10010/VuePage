<template>
  <div>
    <Header></Header>
    <div class="main">
      <Aside></Aside>
      <Main></Main>
    </div>
<!--    <Footer></Footer>-->
  </div>
</template>

<script>
  import Aside from "../../components/Admin/Layout/Aside";
  import Header from "../../components/Admin/Layout/Header";
  import Main from "../../components/Admin/Layout/Main";
  import Footer from "../../components/Client/Layout/Footer";
  export default {
    name: "Index",
    components:{
      Aside,Header,Main,Footer
    }
  }
</script>

<style scoped>
  .main{
    position: relative;
    display: flex;
    justify-content: space-between;
  }
</style>