<template>
  <div>
    <div class="article-item" v-for="(item,index) in articles" :key="index">
      <!--title-->
      <h1 class="title"><a :href="item.Title">{{ item.Title }}</a></h1>
      <div class="label">
        <!--Time-->
        <div class="time">
          <i class="fa fa-calendar" aria-hidden="true"></i>
          <a>{{ item.CreateTime }}</a>
        </div>
        <!--category-->
        <div class="categories">
          <i class="fa fa-folder" aria-hidden="true"></i>
<!--          <a :href="item.href" v-for="(category,index) in item.Categories">{{ index === item.Categories.length-1 && category || (category + ' · ') }}</a>-->
          <a :href="item.href" v-for="(category,index) in item.Categories">{{ category }}</a>
        </div>
        <!--tags-->
        <div class="tags">
          <i class="fa fa-tags" aria-hidden="true"></i>
<!--          <a :href="item.href" v-for="(tag,index) in item.Tags">{{ index === item.Tags.length-1 && tag || (tag + ' · ') }}</a>-->
          <a :href="item.href" v-for="(tag,index) in item.Tags">{{ tag }}</a>
        </div>
      </div>
      <div class="content">{{ item.Content }}</div>
    </div>
  </div>
</template>

<script>
  import {request} from "../../../network/request";

  export default {
    name: "Article",
    data(){
      return{
        articles: []
      }
    },
    created() {
      request({
        url: '/api/getContent',
        method: 'get'
      }).then(result=>{
        this.articles = result.data.result;
        // console.log(this.articles);
      }).catch(error=>{
        console.log(error);
      })
    }
  }
</script>

<style scoped lang="less">
  .article-item{
    /*border: 1px slateblue solid;*/
    position: relative;
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    margin-bottom: 10px;
    padding: 16px 24px 12px 24px;
    border-bottom: 1px solid #f0f2f5;
    .title{
      a{
        color: #565a5f;
        text-decoration: none;
        font-size: 22px;
        font-weight: 500;
        transition: all .5s;
        &:hover{
          color: #ee521c;
        }
      }
    }
    .label{
      margin: 7px 0;
      div{margin: 2px 0}
      i{
        font-size: 14px;
        color: #666666 !important;
        margin-right: 5px
      }
      a{text-decoration: none;
        color: #565a5f;
      }
      .categories,.tags{
        a{
          &:hover{
            color: #ee521c;
          }
        }
      }
      .time,.categories{display: inline-block}
      .time{a{margin-right: 10px}}
    }
    .content{
      margin: 15px 0;
      color: #565a5f;
      line-height: 1.7;
    }
    .time{
      color: #5f6471;
    }
  }
</style>