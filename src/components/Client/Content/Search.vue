<template>
  <div class="Search">
    <el-autocomplete
            popper-class="my-autocomplete"
            v-model="state"
            :fetch-suggestions="querySearch"
            placeholder="请输入搜索内容"
            @select="handleSelect">
      <i
              class="el-icon-search el-input__icon Search-icon"
              slot="suffix"
              @click="handleIconClick">
      </i>
      <template slot-scope="{ item }">
        <div class="title">{{ item.Title }}</div>
        <span class="tags">{{ item.Tags }}</span>
      </template>
    </el-autocomplete>
  </div>
</template>

<script>
  import {request} from "../../../network/request";
  export default {
    name: "Search",
    data(){
      return{
        // result -> 建议列表的数据
        SuggestResult: [],
        state: '',
        SearchResult: '',
        timeout: null
      }
    },
    methods: {
      querySearch(queryString, cb) {
        let Result = this.SuggestResult;
        let results = queryString ? Result.filter(this.createFilter(queryString)) : Result;
        // 调用 callback 返回建议列表的数据
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 1200 * Math.random());
      },
      // 过滤函数
      createFilter(queryString) {
        return (state) => {
          return (state.Title.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        }
      },
      // 选择item项事件
      handleSelect(item) {
        this.state = item.Title;
      },
      // 点击搜索图标事件
      handleIconClick(ev) {
        if(!this.state){
        //  搜索框为空
        }else{
          request({
            url: '/api/dimsearch',
            method: 'get',
            params:{
              state: this.state
            }
          }).then(result => {
            this.SearchResult = result.data.result;
            this.$router.push(`/result/${this.state}`)
          }).catch(error => {
            console.log(error);
          })
        }
      }
    },
    mounted() {
      request({
        url: '/api/searchinfo',
        method: 'get'
      }).then(result => {
        this.SuggestResult = result.data.result;
      }).catch(error => {
        console.log(error);
      })
    }
  }
</script>

<style scoped lang="less">
  .Search{
    margin-right: 10px;
    .Search-icon{
      cursor: pointer;
      line-height: 35px;
      &:hover{
         color: #565a5f;
      }
    }
  }
</style>
<style lang="less">
  .Search>.el-autocomplete>.el-input>.el-input__inner{
    height: 35px;
    border-radius: 21px !important;
  }
  .my-autocomplete {
    li {
      line-height: normal;
      padding: 7px 15px;
      .title {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .tags{
        font-size: 12px;
        color: #b4b4b4;
      }
      .highlighted .tags {
        color: #ddd;
      }
    }
  }
</style>