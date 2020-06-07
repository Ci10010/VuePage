<template>
  <div>
    <div id="hotTags" v-for="(tag,index) in tags" :key="index">
      <span
         class="commonStyle"
         :style="{backgroundColor: colors[Math.round(Math.random() * (colors.length-1))]}"
         @click="search(tag.Name)"
      >{{ tag.Name }}</span>
    </div>
  </div>
</template>

<script>
  import {request} from "../../../network/request";
  export default {
    name: "HotTags",
    data(){
      return{
        tags:[],
        colors: ['#23d160','#ff3860','#ffdd57']
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
    },
    methods:{
      search(Title){
        request({
          url: '/api/dimSearch',
          method: 'get',
          params: {
            state: Title
          }
        }).then(result => {
          this.$router.push(`/result/${Title}`)
        }).catch(error => {
          console.log(error);
        })
      }
    }
  }
</script>

<style scoped lang="less">
  #hotTags{
    margin-bottom: 10px;
    display:inline-block;
    span{
      color: #fff;
      &:hover{
        cursor: pointer;
      }
    }
    .commonStyle{
      float: left;
      border-radius: 3px;
      font-weight: normal;
      font-size: 12px;
      padding: 4px 7px;
      margin-right: 8px;
    }
  }
</style>