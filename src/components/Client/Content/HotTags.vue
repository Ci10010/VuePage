<template>
  <div>
    <div id="hotTags" v-for="(tag,index) in tags" :key="index">
      <a :href="tag.Href" class="commonStyle">{{ tag.Name }}</a>
    </div>
  </div>
</template>

<script>
  import {request} from "../../../network/request";

  export default {
    name: "HotTags",
    data(){
      return{
        tags:[]
      }
    },
    created() {
      request({
        url: '/api/getHotTags',
        method: 'get'
      }).then(result=>{
        this.tags = result.data.result;
      }).catch(error=>{
        console.log(error);
      })
    }
  }
</script>

<style scoped lang="less">
  #hotTags{
    margin-bottom: 10px;
    /*border: 1px green solid;*/
    background-color: transparent;
    display:inline-block;
    a{text-decoration: none; color: #fff;}
    a:hover {color: #fff;}
    .commonStyle{
      float: left;
      background-color: #23d160;
      border-radius: 3px;
      font-size: 12px;
      padding: 4px 7px;
      margin-right: 8px;
    }
  }



</style>