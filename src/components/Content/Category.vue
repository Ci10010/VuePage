<template>
  <div>
    <h4>分类</h4>
    <div class="categories">
      <div class="category" v-for="(item,index) in categories" :key="index">
        <a :href="item.categoryHref">{{ item.category }}</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Category",
    data(){
      return{
        categories:[
          {category: 'Git',categoryHref: ''},
          {category: 'Hexo',categoryHref: ''},
          {category: 'HTML',categoryHref: ''},
          {category: 'Linux',categoryHref: ''}
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .categories{
    /*border: 1px solid slateblue;*/
    margin-top: 10px;
    .category{
      /*padding: 0.5em 0.75em;*/
      a{
        color: #4a4a4a;
        font-weight: 500;
        text-decoration: none;
        /*border: 1px solid sienna;*/
        display: block;
        padding: 0.5em 0.75em;
        &:hover{
          background-color: rgb(245,245,245);
        }
      }
    }
  }
</style>