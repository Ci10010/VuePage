<template>
  <div class="category">
    <h4>分类专栏</h4>
    <div class="content">
      <a :href="category.href" v-for="(category,index) in categories">
        <span>{{ category.name }}</span>
        <span class="counter">{{ category.counter }}</span>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Category",
    data(){
      return{
        categories:[
          {name: 'Git',href: '',counter: '21'},
          {name: 'HTML',href: '',counter: '22'},
          {name: 'MarkDown',href: '',counter: '12'},
          {name: 'MySQL',href: '',counter: '7'},
          {name: 'Linux',href: '',counter: '9'}
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .category {
    .content{
      /*padding: 5px 20px 10px 10px;*/
      margin-top: 8px;
      a{
        display: block;
        text-decoration: none;
        color: #565a5f;
        font-weight: 500;
        padding: 8px 15px;
        &:hover{
          background-color: rgb(245,245,245);
        }
        .counter{
          /*margin-left: 10px;*/
          float: right;
          font-size: 13px;
        }
      }
    }
  }
</style>