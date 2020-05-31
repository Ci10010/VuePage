<template>
  <div>
    <div>
      <label for="title">文章标题: </label>
        <input id="title" type="text" v-model="title"/>
      <label for="categories">文章类别: </label>
        <input id="categories" type="text" v-model="categories"/>
      <label for="tags">文章标签: </label>
        <input id="tags" type="text" v-model="tags"/>
      <button class="push" @click="push">发布文章</button>
    </div>
    <div>
      <mavon-editor
              v-model="content"
              :toolbars="toolbars"
              @keydown=""
              style="min-height: 500px;box-shadow: none;border-bottom: 1px solid silver"
      />
    </div>
  </div>
</template>

<script>
  import {request} from "../../network/request";
  export default {
    name: "Post",
    data(){
      return{
        toolbars: {
          bold: true, // 粗体
          italic: true, // 斜体
          header: true, // 标题
          underline: true, // 下划线
          mark: true, // 标记
          superscript: true, // 上角标
          quote: true, // 引用
          ol: true, // 有序列表
          ink: true, // 链接
          imagelink: false, // 图片链接
          help: true, // 帮助
          code: true, // code
          subfield: true, // 是否需要分栏
          fullscreen: true, // 全屏编辑
          readmodel: true, // 沉浸式阅读
          undo: true, // 上一步
          trash: true, // 清空
          save: false, // 保存（触发events中的save事件）
          navigation: true // 导航目录
        },
        title: '',
        categories: '',
        tags: '',
        content: ''
      }
    },
    methods:{
      push(){
      //  根据title检查是否文章存在，若不存在则push
        request({
          url: '/api/checkRep',
          method: 'post',
          data:{
            title: this.title,
            categories: this.categories,
            tags: this.tags,
            content: this.content
          }
        }).then(result=>{
          // console.log(result.data);
          if(result.data.status === 0){
            return this.$message({showClose: true,type: 'success',message: '文章发布成功!'});
          }
          this.$message({showClose: true,type: 'warning',message: '文章发布失败!'});
        }).catch(error=>{
          console.log(error);
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .push{
    position: relative;

  }
</style>