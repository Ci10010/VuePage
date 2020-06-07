<template>
  <div class="baseStyle">
    <!--title-->
    <h1 class="title">{{article.Title}}</h1>
    <div class="label">
      <!--Time-->
      <div class="time">
        <i class="fa fa-calendar" aria-hidden="true"></i>
        <span>{{ transform(article.CreateTime) }}</span>
      </div>
      <!--category-->
      <div class="categories">
        <i class="fa fa-folder" aria-hidden="true" v-if="article.Categories"></i>
        <span v-for="(category,index) in article.Categories.split(',')" v-if="article.Categories">{{ index === article.Categories.split(',').length-1 && category || (category + ' · ') }}</span>
      </div>
      <!--tags-->
      <div class="tags">
        <i class="fa fa-tags" aria-hidden="true" v-if="article.Tags"></i>
        <span v-for="(tag,index) in article.Tags.split(',')" v-if="article.Tags">{{ index === article.Tags.split(',').length-1 && tag || (tag + ' · ') }}</span>
      </div>
    </div>
    <viewer>
      <div class="content" v-highlight v-html="markdown2html(article.Content)"></div>
    </viewer>
  </div>
</template>

<script>
  import {request} from "../../../network/request";
  import marked from "marked";
  export default {
    name: "ArticleItem",
    data(){
      return{
        article: '',
        CurrentArticleTitle: ''
      }
    },
    methods: {
      markdown2html(str){
        return marked(str)
      },
      transform(date){
        return date.substring(0,10);
      }
    },
    created(){
      this.CurrentArticleTitle = this.$route.path.split('/')[2];
      request({
        url: '/api/getoneinfo',
        method: 'get',
        params:{
          ArticleTitle: this.CurrentArticleTitle
        }
      }).then(result => {
        this.article = result.data.result[0];
        // console.log(this.article);
      }).catch(error => {
        console.log(error);
      })
    }
  }
</script>

<style scoped lang="less">
  .baseStyle{
    padding-bottom: 2px !important;
    .label{
      margin: 7px 0;
      div{margin: 2px 0}
      i{
        font-size: 14px;
        color: #5f6471 !important;
        margin-right: 5px
      }
      .categories,.tags{
        span{
          font-size: 14px;
          color: #5f6471;
        }
      }
      .time,.categories{display: inline-block}
    }
    .content{
      margin: 15px 0;
      color: #565a5f;
      line-height: 1.7;
    }
    .time{
      color: #5f6471;
      span{
        margin-right: 10px;
      }
    }
  }
</style>