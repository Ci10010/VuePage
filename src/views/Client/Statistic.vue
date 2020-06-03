<template>
  <div class="block">
    <el-timeline>
      <div v-for="(item,index) in items" :key="index">
        <el-timeline-item :timestamp="item.CreateTime" placement="top">
          <el-card>
            <h3>{{ item.Title }}</h3>
<!--            <p>{{ item.content }}</p>-->
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
    </el-timeline>
  </div>
</template>

<script>
  import {request} from "../../network/request";
  export default {
    name: "Statistic",
    data(){
      return{
        items:[]
      }
    },
    mounted() {
      request({
        url: '/api/getContent',
        // method: 'get'
      }).then(result=>{
        this.items = result.data.result;
      }).catch(error=>{
        console.log(error);
      })
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
</style>