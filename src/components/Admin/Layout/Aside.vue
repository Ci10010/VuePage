<template>
  <div id="aside">
    <div class="item">
      <i class="fa fa-th-large" aria-hidden="true"></i>
      <router-link to="/admin/statistic" tag="span">数据统计</router-link>
    </div>
    <div class="item">
      <i class="fa fa-th-large" aria-hidden="true"></i>
      <router-link to="/admin/post" tag="span">发布文章</router-link>
    </div>
    <div class="item">
      <i class="fa fa-th-large" aria-hidden="true"></i>
      <router-link to="/admin/articles" tag="span">文章管理</router-link>
    </div>
    <div class="item">
      <i class="fa fa-th-large" aria-hidden="true"></i>
      <router-link to="/admin/4" tag="span">分类标签</router-link>
    </div>
    <div class="item">
      <i class="fa fa-th-large" aria-hidden="true"></i>
      <router-link to="/admin/5" tag="span">页面管理</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Aside"
  }
</script>

<style scoped lang="less">
  .RouterActive{
    color: red !important;
  }
  #aside{
    position: relative;
    width: 200px;
    padding: 30px 0;
    min-height: 700px;
    border-top: 1px #eee solid;
    .item{
      padding: 20px 40px;
      color: rgb(102, 102, 102);
      cursor: pointer;
      &:hover{background: rgb(204,204,204)}
      i{
        margin-right: 15px;
      }
    }
  }
</style>