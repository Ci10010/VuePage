<template>
  <div>
    <div class="header">
      <input class="title-input" type="text" v-model="title" placeholder="输入文章标题"/>
      <button class="SaveDrafts" @click="SaveDrafts">保存草稿</button>
      <button class="PublishArticle" @click="PublishArticle">发布文章</button>
    </div>
    <div class="ClickPublish" v-show="isShow">
      <div class="container">
        <div class="push-header">
          <span class="title">文章发布</span>
          <button class="close" @click="ClosePublish">×</button>
        </div>
        <!--Tip-->
        <div class="tip">
          <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
          <span>请勿发布涉及政治、广告、营销、翻墙、违反国家法律法规等内容。</span>
        </div>
        <div class="push-input">
          <!--Category-->
          <span class="label">文章分类</span>
          <el-tag
                  :key="index"
                  v-for="(category,index) in categories"
                  closable
                  type="danger"
                  effect="dark"
                  :disable-transitions="false"
                  @close="handleCloseCategory(category)">
            {{category}}
          </el-tag>
          <el-input
                  class="input-new-tag"
                  v-if="inputVisibleCategory"
                  v-model="inputValueCategory"
                  ref="saveTagInputCategory"
                  size="small"
                  @keyup.enter.native="handleInputConfirmCategory"
                  @blur="handleInputConfirmCategory"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInputCategory">+ New One</el-button>
          <!--Tags-->
          <span class="label">文章标签</span>
          <el-tag
                  :key="tag"
                  v-for="tag in tags"
                  closable
                  type="success"
                  effect="dark"
                  :disable-transitions="false"
                  @close="handleClose(tag)">
            {{tag}}
          </el-tag>
          <el-input
                  class="input-new-tag"
                  v-if="inputVisible"
                  v-model="inputValue"
                  ref="saveTagInput"
                  size="small"
                  @keyup.enter.native="handleInputConfirm"
                  @blur="handleInputConfirm"
          >
          </el-input>
          <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New One</el-button>
        </div>
        <div class="push-footer">
          <el-button type="warning" @click="Save">保存为草稿</el-button>
          <el-button type="success" @click="Publish">发布文章</el-button>
        </div>
      </div>
    </div>
    <div>
      <mavon-editor
              v-model="content"
              :toolbars="toolbars"
              @keydown=""
              style="min-height: 700px;box-shadow: none;"
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
        isShow: false,
        title: '',
        content: '',
        // Categories
        categories: [],
        inputVisibleCategory: false,
        inputValueCategory: '',
        // Tags
        tags: [],
        inputVisible: false,
        inputValue: ''
      }
    },
    methods:{
      SaveDrafts(){
      //  保存草稿
        this.isShow = true;
      },
      PublishArticle(){
      //  根据title检查是否文章存在，若不存在则push
      //   request({
      //     url: '/api/checkRep',
      //     method: 'post',
      //     data:{
      //       title: this.title,
      //       categories: this.categories,
      //       tags: this.tags,
      //       content: this.content
      //     }
      //   }).then(result=>{
      //     // console.log(result.data);
      //     if(result.data.status === 0){
      //       return this.$message({showClose: true,type: 'success',message: '文章发布成功!'});
      //     }
      //     this.$message({showClose: true,type: 'warning',message: '文章发布失败!'});
      //   }).catch(error=>{
      //     console.log(error);
      //   })
        this.isShow = true;
      },
      ClosePublish(){
      //  关闭文章发布Div
        this.isShow = false;
      },
      // Input(Category)
      handleCloseCategory(category) {
        this.categories.splice(this.categories.indexOf(category), 1);
      },
      showInputCategory() {
        this.inputVisibleCategory = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInputCategory.$refs.input.focus();
        });
      },
      handleInputConfirmCategory() {
        let inputValueCategory = this.inputValueCategory;
        if (inputValueCategory) {
          this.categories.push(inputValueCategory);
        }
        this.inputVisibleCategory = false;
        this.inputValueCategory = '';
      },
      // Input(Tag)
      handleClose(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1);
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.tags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      Save(){
        this.$message({
          message: '保存成功！',
          type: 'success'
        });
        this.isShow = false;
      },
      Publish(){
        this.$message({
          message: '发布成功！',
          type: 'success'
        });
        this.isShow = false;
      }
    }
  }
</script>

<style scoped lang="less">
  .header{
    background: #f5f5f5;
    .title-input{
      width: 60%;
      margin: 8px 16px 8px 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
      background-color: #fff;
      height: 40px;
      font-size: 18px;
      padding-left: 15px;
      outline: none;
      transition: all .5s ease;
      &:focus{
        border-color: #666666;
      }
    }
    .SaveDrafts,.PublishArticle{
      margin-right: 16px;
      padding: 6px 16px;
      font-size: 16px;
      color: #ca0c16;
      border: 1px solid #ca0c16;
      border-radius: 4px;
      background-color: #fff;
      outline: none;
      cursor: pointer;
    }
  }
  .ClickPublish{
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translate(-50%);
    width: 600px;
    /*height: 500px;*/
    background: #ffffff;
    z-index: 9999;
    padding: 20px;
    box-shadow: -3px 2px 4px rgba(0,0,0,0.1),3px -2px 4px rgba(0,0,0,0.1);
    border-radius: 5px;
    .container{
      height: 100%;
      /*border: 1px silver solid;*/
      .push-header{
        .title{
          font-size: 16px;
          color: #3c3c3c;
          line-height: 24px;
          font-weight: 600;
        }
        .close{
          float: right;
          width: 24px;
          height: 24px;
          border: none;
          outline: none;
          cursor: pointer;
          font-size: 14px;
          color: #4a4a4a;
          background: #ffffff;
          border-radius: 3px;
          &:hover{
            background: rgba(0,0,0,.05);
          }
        }
      }
      .tip{
        color: #e33e33;
        margin: 10px 0;
        padding: 8px 16px;
        background: #fdf6ec;
        border-radius: 5px;
        i,span{
          color: #e33e33 !important;
          font-size: 13px;
        }
        i{
          margin-right: 10px;
        }
      }
      .push-input{
        .label{
          display: block;
          font-size: 13px;
        }
      }
      .push-footer{
        /*position: absolute;*/
        bottom: 20px;
        float: right;
        button{
          padding: 8px;
          font-size: 13px;
        }
      }
    }
  }
</style>