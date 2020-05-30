<template>
  <div class="GalleryBanner" slot="GalleryBanner">
    <img :src="GalleryImg" alt=""/>
  </div>
</template>

<script>
  export default {
    name: "GalleryBanner",
    data(){
      return{
        GalleryImg: 'https://dummyimage.com/1130x250/7B68EE/fff.png'
      }
    }
  }
</script>

<style scoped lang="less">
  .GalleryBanner{
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