<template>
  <div class="ShareBanner" slot="StatisticBanner">
    <img :src="ShareImg" alt=""/>
  </div>
</template>

<script>
  export default {
    name: "ShareBanner",
    data(){
      return{
        ShareImg: 'https://dummyimage.com/1130x250/FF8C00/fff.png'
      }
    }
  }
</script>

<style scoped lang="less">
  .ShareBanner{
    position: relative;
    display: block;
    img{
      margin-top: 1px;
      width: 100%;
      height: auto;
      display: block;
    }
  }
</style>