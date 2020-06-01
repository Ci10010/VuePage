<template>
  <div id="header">
    <div class="title">
      <span>Leeio.cn</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang="less">
  #header{
    width: 100%;
    /*height: 45px;*/
    background-color: #303133;
    color: #ffffff;
    .title{
      position: relative;
      left: 50%;
      transform: translate(-50%);
      display: inline-block;
      span{
        font-size: 30px;
        line-height: 50px;
      }
    }
  }
</style>