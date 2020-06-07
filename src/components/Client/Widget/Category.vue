<template>
  <div class="category">
    <h4>分类专栏</h4>
    <div class="content">
      <a :href="category.href" v-for="(category,index) in categories">
        <span>{{ category }}</span>
<!--        <span class="counter">{{ category.counter }}</span>-->
      </a>
    </div>
  </div>
</template>

<script>
  import {request} from "../../../network/request";
  export default {
    name: "Category",
    data(){
      return{
        categories:[]
      }
    },
    mounted() {
      request({
        url: '/api/category',
        method: 'get'
      }).then(result => {
        this.categories = result.data.Categories;
      }).catch(error => {
        console.log(error)
      })
    }
  }
</script>

<style scoped lang="less">
  .category {
    .content{
      margin-top: 8px;
      a{
        display: block;
        text-decoration: none;
        color: #565a5f;
        font-weight: 500;
        padding: 8px 15px;
        &:hover{
          background-color: #f2f8fd;
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