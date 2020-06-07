<template>
  <div>
    <div v-if="true">
      <Banner></Banner>
    </div>
    <div v-if="true">
      <HotTags></HotTags>
    </div>
    <div>
      <div class="article-item" v-for="(item,index) in articles" :key="index">
        <!--title-->
        <h1 class="title"><router-link :to="/article/+item.Title">{{item.Title}}</router-link></h1>
        <div class="label">
          <!--Time-->
          <div class="time">
            <i class="fa fa-calendar" aria-hidden="true"></i>
            <span>{{ transform(item.CreateTime) }}</span>
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
        <viewer>
          <div class="content" v-highlight v-html="markdown2html(item.Content)"></div>
        </viewer>
      </div>
    </div>
    <el-pagination
            class="pagination"
            @current-change="handleCurrentChange"
            :current-page.sync="CurrentPage"
            :page-size="PageSize"
            layout="prev, pager, next, total"
            :total="parseInt(Total)"
            >
    </el-pagination>
  </div>
</template>

<script>
  import {request} from "../../../network/request";
  import marked from 'marked';
  import Banner from "./Banner/Banner";
  import HotTags from "./HotTags";
  export default {
    name: "Article",
    components: {HotTags, Banner},
    data(){
      return{
        articles: [],
        PageSize: 2,
        CurrentPage: 1,
        Total: ''
      }
    },
    mounted() {
      request({
        url: '/api/getContent',
        method: 'get',
        params:{
          PageSize: this.PageSize,
          CurrentPage : this.CurrentPage
        }
      }).then(result=>{
        this.articles = result.data.result;
      }).catch(error=>{
        console.log(error);
      })
      // 获取数据总数
      request({
        url: '/api/getTotal',
        method: 'get'
      }).then(result=>{
        this.Total = result.data.result.length;
      }).catch(error=>{
        console.log(error);
      })
    },
    methods:{
      markdown2html(str){
        return marked(str)
      },
      transform(date){
        return date.substring(0,10);
      },
      handleCurrentChange(CurrentPage) {
        request({
          url: '/api/getContent',
          method: 'get',
          params:{
            // 当前页
            CurrentPage: CurrentPage,
            // 每页条数
            PageSize: this.PageSize
          }
        }).then(result=>{
          this.articles = result.data.result;
          // console.log((result.data.result[3]).substring(0,5));
        }).catch(error=>{
          console.log(error);
        })
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
  .pagination{
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translate(-50%);
    background: transparent;
  }
</style>
<style>
  .pagination>.el-pager>li,.pagination>button{
    background: transparent !important;
  }
  .pagination>.el-pager>.active,.pagination>.el-pager>.active:hover{
    color: #5FB878;
  }
</style>