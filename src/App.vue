<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"/>
      <router-link to="/about"/>
    </div>
    <router-view/>
  </div>
</template>

<style>
  .el-message--success{
    background-color: #67c23a !important;
  }
  .el-message--warning{
    background-color: #e6a23c !important;
  }
  .el-message--error{
    background-color: #f56c6c !important;
  }
  .el-message>p,i{
    color: #FFFFFF !important;
  }
</style>
