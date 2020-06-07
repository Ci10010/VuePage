<template>
  <div>
    <div class="baseStyle header" v-if="this.articles.length !== 0">
      <h2>"{{title}}"的搜索结果:</h2>
    </div>
    <div class="baseStyle article-item" v-if="this.articles.length === 0">
      <div class="no-result">
        <i class="el-icon-warning-outline no-result-i"></i>
        <span class="no-result-span">未找到关于"{{title}}"的内容.</span>
      </div>
    </div>
    <div v-for="(article,index) in articles" :key="index" class="baseStyle article-item">
      <!--title-->
      <h1 class="title"><router-link :to="/article/+article.Title">{{article.Title}}</router-link></h1>
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
  </div>
</template>

<script>
  import {request} from "../../../network/request";
  import marked from "marked";
  export default {
    name: "SearchResult",
    data(){
      return{
        title: '',
        articles: ''
      }
    },
    methods:{
      markdown2html(str){
        return marked(str)
      },
      transform(date){
        return date.substring(0,10);
      }
    },
    created() {
      this.title = this.$route.path.split('/')[2];
      request({
        url: '/api/dimsearch',
        method: 'get',
        params:{
          state: this.title
        }
      }).then(result => {
        this.articles = result.data.result;
      }).catch(error => {
        console.log(error);
      })
    }
  }
</script>

<style scoped lang="less">
  .header{
    margin-bottom: 10px;
  }
  .no-result{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    margin-bottom: 115px;
  }
  .no-result-i{
    font-size: 45px;
    margin-right: 8px;
    padding-top: 3px;
    color: #909399;
  }
  .no-result-span{
    font-size: 30px;
    color: #909399;
  }
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
<style>

</style>