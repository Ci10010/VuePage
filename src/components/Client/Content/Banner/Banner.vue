<template>
  <div id="banner">
    <el-carousel :interval="5000" arrow="hover" height="280px">
      <el-carousel-item v-for="(image,index) in images" :key="index">
        <a :href="image.Href"><img :src="image.URL" :alt="image.Alt"/></a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import {request} from "../../../../network/request";

  export default {
    name: "Banner",
    data(){
      return{
        images:[]
      }
    },
    created() {
      request({
        url: '/api/getBanners',
        method: 'get'
      }).then(result=>{
        this.images = result.data.result;
      }).catch(error=>{
        console.log(error);
      })
    }
  }
</script>

<style scoped lang="less">
  #banner{
    margin-bottom: 10px;
    img{
      width: 100%;
    }
  }
</style>
<style>
  .el-carousel__arrow{
    background-color: rgba(0,0,0,.5);
    height: 60px;
    width: 40px;
  }
  .el-carousel__arrow:hover{
    background-color: rgba(0,0,0,.4);
  }
  .el-carousel__arrow>i{
    font-size: 20px;
  }
  .el-carousel__arrow--left{
    border-radius: 0 2px 2px 0;
    left: 0;
  }
  .el-carousel__arrow--right{
    border-radius: 2px 0 0 2px;
    right: 0;
  }
</style>

