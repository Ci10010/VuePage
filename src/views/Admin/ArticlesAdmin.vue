<template>
  <div id="articleAdmin">
    <el-table :data="tableData" border style="width: 100%" v-loading="loading">
      <el-table-column prop="ID" label="ID" width="80"></el-table-column>

      <el-table-column prop="Title" label="文章标题" width="150"></el-table-column>

      <el-table-column prop="CreateTime" label="发布日期" width="150"></el-table-column>

      <el-table-column prop="Categories" label="文章分类" width="200"> </el-table-column>

      <el-table-column prop="Tags" label="文章标签" width="200"></el-table-column>

      <el-table-column prop="Status" label="状态" width="150">
        <el-switch
                v-model="isShow">
        </el-switch>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="Edit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="Delete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import {request} from "../../network/request";
  export default {
    name: "ArticlesAdmin",
    data() {
      return {
        tableData: [],
        isShow: 'true',
        loading: true
      }
    },
    mounted() {
      setTimeout(() => {
        this.loading = false
      }, 1500);
    },
    methods: {
      Edit() {

      },
      Delete(index, row){
        request({
          url: '/api/delArticle',
          method: 'post',
          data:{
            title: row.Title
          }
        }).then(result=>{
          console.log(result.data.message);
          this.$router.go(0)
        }).catch(error=>{
          console.log(error);
        })
      }
    },
    created() {
      request({
        url: '/api/getContent',
        method: 'get'
      }).then(result=>{
        this.tableData = result.data.result;
        // console.log(this.tableData);
      }).catch(error=>{
        console.log(error);
      })
    }
  }
</script>

<style scoped lang="less">
  #articleAdmin{
    padding: 40px;
  }
</style>