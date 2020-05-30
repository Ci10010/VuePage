<template>
  <div class="ProfileBanner">
    <img :src="ProfileImg" alt=""/>
  </div>
</template>

<script>
  export default {
    name: "ProfileBanner",
    data(){
      return{
        ProfileImg: 'https://dummyimage.com/1130x250/32CD32/fff.png'
      }
    }
  }
</script>

<style scoped lang="less">
  .ProfileBanner{
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