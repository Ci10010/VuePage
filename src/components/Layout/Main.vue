<template>
  <div id="content">
    <div v-if="this.$route.path==='/index'">
      <slot name="banner">
        <Banner></Banner>
      </slot>
    </div>

    <div v-if="this.$route.path==='/index'">
      <slot name="HotTags">
        <HotTags></HotTags>
      </slot>
    </div>

    <div v-if="this.$route.path==='/index'">
      <Article></Article>
    </div>

    <div v-if="this.$route.path==='/category'" class="baseStyle">
      <Category></Category>
    </div>

    <div v-if="this.$route.path==='/statistic'" class="baseStyle">
      <Statistic></Statistic>
    </div>

    <div v-if="this.$route.path==='/message'" class="baseStyle">
      <Message></Message>
    </div>

    <div v-if="this.$route.path==='/profile'" class="baseStyle">
      <Profile></Profile>
    </div>

  </div>
</template>

<script>
  import Article from "../Content/Article";
  import Category from "../Content/Category";
  import Statistic from "../Content/Statistic";
  import Message from "../Content/Message"
  import Profile from "../Content/Profile";
  import Banner from "../Content/Banner";
  import HotTags from "../Content/HotTags";
  export default {
    name: "Main",
    components:{
      Article,Category,Statistic,Message,Profile,Banner,HotTags
    }
  }
</script>

<style scoped lang="less">
  #content{
    position: relative;
    border-radius: 3px;
    .baseStyle{
      position: relative;
      background-color: #ffffff;
      border-radius: 3px;
      box-shadow: 0 1px 2px rgba(0,0,0,0.05);
      margin-bottom: 15px;
      padding: 16px 24px 12px 24px;
      border-bottom: 1px solid #f0f2f5;
    }
  }
</style>