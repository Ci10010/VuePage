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
          <el-button size="mini" type="success" @click="Edit(scope.$index, scope.row)" icon="el-icon-edit">编辑</el-button>
          <el-button size="mini" type="danger" @click="Delete(scope.$index, scope.row)" icon="el-icon-delete">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
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
  import {request} from "../../network/request";
  export default {
    name: "ArticlesAdmin",
    data() {
      return {
        tableData: [],
        isShow: 'false',
        loading: true,
        PageSize: 10,
        CurrentPage: 1,
        Total: ''
      }
    },
    mounted() {
      setTimeout(() => {
        this.loading = false
      }, 1500);
    },
    methods: {
      transform(date){
        return date.substring(0,10);
      },
      Edit() {},
      Delete(index, row){
        request({
          url: '/api/delArticle',
          method: 'post',
          data:{
            title: row.Title
          }
        }).then(result=>{
          this.$router.go(0)
        }).catch(error=>{
          console.log(error);
        })
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
          this.tableData = result.data.result;
        }).catch(error=>{
          console.log(error);
        })
      }
    },
    created() {
      request({
        url: '/api/getContent',
        method: 'get',
        params:{
          PageSize: this.PageSize,
          CurrentPage : this.CurrentPage
        }
      }).then(result=>{
        this.tableData = result.data.result;
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
    }
  }
</script>

<style scoped lang="less">
  #articleAdmin{
    padding: 40px;
  }
  .pagination{
    position: relative;
    display: inline-block;
    left: 50%;
    transform: translate(-50%);
    background: transparent;
    margin-top: 20px;
  }
</style>