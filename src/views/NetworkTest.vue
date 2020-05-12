<template>
  <div>
    <button @click="axios">发送网络请求</button>
  </div>
</template>

<script>
  import {request} from '../../network/request';
  export default {
    name: "NetworkTest",
    methods:{
      axios(){
        request({
          url: '/api/regist',
          method: 'post',
          data:{
            username: 'admin',
            password: 'admin'
          }
        }).then(result => {
          console.log("请求成功");
          console.log(result);
        }).catch(error => {
          console.log("请求失败");
        })
      }
    }
  }
</script>

<style scoped>

</style>