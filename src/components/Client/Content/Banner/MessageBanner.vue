<template>
  <div class="MessageBanner">
    <img :src="MessageImg" alt=""/>
  </div>
</template>

<script>
  export default {
    name: "MessageBanner",
    data(){
      return{
        MessageImg: 'https://dummyimage.com/1130x250/FFA500/fff.png'
      }
    }
  }
</script>

<style scoped lang="less">
  .MessageBanner{
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