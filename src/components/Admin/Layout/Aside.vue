<template>
  <div id="aside" :class="{hide:!isShow}">
    <div class="asideHead">
      <i class="fa fa-th-list" aria-hidden="true" @click="isClick"></i>
    </div>
    <el-aside width="125px" :class="{hide:!isShow}">
      <el-menu>
          <el-menu-item-group>
            <router-link to="/admin/statistic" tag="span">
              <el-menu-item index="1-1">
                <el-tooltip class="item" effect="dark" content="数据统计" placement="left">
                  <i class="el-icon-pie-chart icon"></i>
                </el-tooltip>
                <span v-show="isShow">数据统计</span>
              </el-menu-item>
            </router-link>
            <router-link to="/admin/post" tag="span">
              <el-menu-item index="1-2">
                <el-tooltip class="item" effect="dark" content="发布文章" placement="left">
                  <i class="el-icon-edit-outline icon"></i>
                </el-tooltip>
                <span v-show="isShow">发布文章</span>
              </el-menu-item>
            </router-link>
            <router-link to="/admin/articles" tag="span">
              <el-menu-item index="1-3">
                <el-tooltip class="item" effect="dark" content="文章管理" placement="left">
                  <i class="el-icon-c-scale-to-original icon"></i>
                </el-tooltip>
                <span v-show="isShow">文章管理</span>
              </el-menu-item>
            </router-link>
            <router-link to="/admin/4" tag="span">
              <el-menu-item index="1-4">
                <el-tooltip class="item" effect="dark" content="分类标签" placement="left">
                  <i class="el-icon-folder-opened icon"></i>
                </el-tooltip>
                <span v-show="isShow">分类标签</span>
              </el-menu-item>
            </router-link>
            <router-link to="/admin/5" tag="span">
              <el-menu-item index="1-5">
                <el-tooltip class="item" effect="dark" content="页面管理" placement="left">
                  <i class="el-icon-setting icon"></i>
                </el-tooltip>
                <span v-show="isShow">页面管理</span>
              </el-menu-item>
            </router-link>
          </el-menu-item-group>
      </el-menu>
    </el-aside>
  </div>
</template>

<script>
  export default {
    name: "Aside",
    data(){
      return{
        isShow: false
      }
    },
    methods:{
      isClick(){
        this.isShow = !this.isShow;
      }
    }
  }
</script>

<style scoped lang="less">
  #aside{
    position: relative;
    width: 125px;
    min-height: 700px;
    border-top: 1px #eee solid;
    transition: all .5s;
    .asideHead{
      padding: 10px 15px 0 15px;
      font-size: 20px;
      color: #4a4a4a;
      i{
        cursor: pointer;
      }
    }
    .icon{
      font-size: 18px;
      margin-right: 7px;
    }
  }
  .hide{
    width: 50px !important;
    transition: all .5s;
  }
</style>
