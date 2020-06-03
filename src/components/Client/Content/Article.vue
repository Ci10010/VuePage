<template>
  <div>
    <div class="article-item" v-for="(item,index) in articles" :key="index">
      <!--title-->
      <h1 class="title"><a :href="'article/' + item.Title">{{item.Title}}</a></h1>
      <div class="label">
        <!--Time-->
        <div class="time">
          <i class="fa fa-calendar" aria-hidden="true"></i>
          <a>{{ item.CreateTime }}</a>
        </div>
        <!--category-->
        <div class="categories">
          <i class="fa fa-folder" aria-hidden="true" v-if="item.Categories"></i>
          <span v-for="(category,index) in item.Categories.split(',')" v-if="item.Categories">{{ index === item.Categories.split(',').length-1 && category || (category + ' · ') }}</span>
        </div>
        <!--tags-->
        <div class="tags">
          <i class="fa fa-tags" aria-hidden="true" v-if="item.Tags"></i>
          <span v-for="(tag,index) in item.Tags.split(',')" v-if="item.Tags">{{ index === item.Tags.split(',').length-1 && tag || (tag + ' · ') }}</span>
        </div>
      </div>
      <div class="content" v-highlight v-html="markdown2html(item.Content)"></div>
    </div>
  </div>
</template>

<script>
  import {request} from "../../../network/request";
  import marked from 'marked';
  export default {
    name: "Article",
    data(){
      return{
        articles: []
      }
    },
    mounted() {
      request({
        url: '/api/getContent',
        method: 'get'
      }).then(result=>{
        this.articles = result.data.result;
        console.log(result.data.result);
        // let a = this.articles.map(v =>{ return v.Content});
      }).catch(error=>{
        console.log(error);
      })
    },
    methods:{
      markdown2html(str){
        return marked(str)
      }
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
    padding: 18px 18px 3px 18px;
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
      .categories,.tags{
        span{
          font-size: 14px;
          color: #5f6471;
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