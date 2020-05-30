<template>
  <div>
    <h2>{{ year }}</h2>
    <div class="timeline">
      <span class="time">{{ time }}</span>
      <a class="title" :href="href">{{ title }}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Statistic",
    data(){
      return{
        year: '2020',
        time: '2020-04-20',
        title: 'Vue之组件通信',
        href: ''
      }
    }
  }
</script>

<style scoped lang="less">
  .timeline{
    border-left: 1px solid rgb(219,219,219);
    margin-top: 5px;
    margin-left: 20px;
    padding: 10px 10px 10px 20px;
    /*border: 1px solid slateblue;*/
    span,a{
      padding-right: 15px;
    }
    .time{
      color: #4a4a4a ;
      font-size: 15px;
      font-weight: 500;
    }
    .title{
      font-weight: 700;
      font-size: 1rem;
      color: #3eaf7c;
      text-decoration: none;
    }
  }
</style>