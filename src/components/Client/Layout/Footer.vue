<template>
  <div id="footer">
    <div class="footerInfo">
      <a href="http://beian.miit.gov.cn/" target="_blank">陕ICP备20002866号</a><br>
      <p>Copyright © 2020 <a href="https://www.leeio.cn">Leeio.cn</a> All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped lang="less">
  #footer{
    position: relative;
    background-color: #fafafa;
    display: inline-block;
    width: 100%;
    padding: 20px;
    border-top: 1px solid #eceff2;
    .footerInfo{
      text-align: center;
      font-size: 0.9em;
      font-weight: 500;
      a,p{
        text-decoration: none;
        color: #2c3e50;
        font-weight: normal;
      }
    }
  }
</style>