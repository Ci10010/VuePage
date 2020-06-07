<template>
  <div class="block baseStyle">
    <el-timeline>
      <div v-for="(item,index) in items" :key="index">
        <el-timeline-item :timestamp="transform(item.CreateTime)" placement="top">
          <el-card>
            <h3>{{ item.Title }}</h3>
            <div class="label">
              <i class="fa fa-folder" aria-hidden="true"></i>
              <span v-for="(category,index) in item.Categories">{{ category }}</span>
            </div>
            <div class="label">
              <i class="fa fa-tags" aria-hidden="true"></i>
              <span v-for="(tag,index) in item.Tags">{{ tag }}</span>
            </div>
          </el-card>
        </el-timeline-item>
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
    </el-timeline>
  </div>
</template>

<script>
  import {request} from "../../network/request";
  export default {
    name: "Statistic",
    data(){
      return{
        items:[],
        PageSize: 8,
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
        this.items = result.data.result;
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
    methods: {
      transform(date){
        let Date = date.substring(0,10);
        let Time = date.substring(11,19);
        return  Date + ' ' + Time;
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
          this.items = result.data.result;
        }).catch(error=>{
          console.log(error);
        })
      }
    }
  }
</script>

<style scoped lang="less">
  h4{
    color: #606266;
    font-weight: 600
  }
  .label{
    margin-top: 5px;
    i{
      color: #999999;
      margin-right: 5px;
      font-size: 13px;
    }
    span{
      color: #606266;
      font-size: 13px;
    }
  }
  .pagination{
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translate(-50%);
  }
</style>
<style>
  .pagination>.el-pager>.active,.pagination>.el-pager>.active:hover{
    color: #5FB878;
  }
</style>