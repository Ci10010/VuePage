<template>
  <div id="content">
    <!--Index布局-->
    <div v-if="this.$route.path==='/index'">
      <div v-if="true">
        <Banner></Banner>
      </div>
      <div v-if="true">
        <HotTags></HotTags>
      </div>
      <Article></Article>
    </div>

    <!--Category-->
    <div v-if="this.$route.path==='/category'">
<!--      <div>-->
<!--                <StatisticBanner></StatisticBanner>-->
<!--      </div>-->
      <div class="baseStyle">
        <Category></Category>
      </div>
    </div>

    <!--Statistic-->
    <div v-if="this.$route.path==='/statistic'">
<!--      <div>-->
<!--        <StatisticBanner></StatisticBanner>-->
<!--      </div>-->
      <div class="baseStyle">
        <Statistic></Statistic>
      </div>
    </div>

    <!--Gallery-->
    <div v-if="this.$route.path==='/gallery'">
      <div>
        <GalleryBanner></GalleryBanner>
      </div>
      <div class="baseStyle">
        <Gallery></Gallery>
      </div>
    </div>

    <!--Bookmark-->
    <div v-if="this.$route.path==='/bookmark'">
      <div>
        <BookmarkBanner></BookmarkBanner>
      </div>
      <div class="baseStyle">
        <Bookmark></Bookmark>
      </div>
    </div>
    <!--Message-->
    <div v-if="this.$route.path==='/message'">
      <div>
        <MessageBanner></MessageBanner>
      </div>
      <div class="baseStyle">
        <Message></Message>
      </div>
    </div>

    <!--Profile-->
    <div v-if="this.$route.path==='/profile'">
      <div>
        <ProfileBanner></ProfileBanner>
      </div>
      <div class="baseStyle">
        <Profile></Profile>
      </div>
    </div>
    <!--ArticleShow-->
    <div v-if="this.$route.path==='/article/:title'">
      <div class="baseStyle">
        <ArticleItem></ArticleItem>
        123
      </div>
    </div>
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
  import ArticleItem from "../../../views/Client/ArticleItem";
  import Banner from "../Content/Banner/Banner";
  import HotTags from "../Content/HotTags";
  import GalleryBanner from "../Content/Banner/GalleryBanner";
  import BookmarkBanner from "../Content/Banner/BookmarkBanner";
  import ProfileBanner from "../Content/Banner/ProfileBanner";
  import MessageBanner from "../Content/Banner/MessageBanner";
  export default {
    name: "Main",
    components:{
      Article,Category,Statistic,Gallery,Bookmark,Message,Profile,Banner,HotTags,
      GalleryBanner,BookmarkBanner,MessageBanner,ProfileBanner,ArticleItem
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
      /*padding: 16px 24px 12px 24px;*/
      padding: 15px;
      border-bottom: 1px solid #f0f2f5;
    }
  }
</style>