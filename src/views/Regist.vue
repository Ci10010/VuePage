<template>
  <div id="login">
    <div class="logo-container">
      <div class="logo">
        <a href="#"><img src="../assets/LOGO.png"/></a>
      </div>
    </div>
    <div class="login-main">
      <div class="login-box">
        <div class="title">注册GitHub</div>
        <div class="input-box">
          <label>用户名</label>
          <input type="text" class="textBox" v-model="Form.username" maxlength="16">

          <label>电子邮件地址</label>
          <input type="email" class="textBox" v-model="Form.email" maxlength="20">

          <label id="Sidentify-span">验证码</label>
          <input type="text" class="textBox verify" v-model="Form.verifyCode" maxlength="6">
          <button id="Sidentify" @click="sendVerifycode" :disabled="!disabledCodeBtn">{{codeText}}</button>

          <label style="display: block">密码</label>
          <input type="password" class="textBox" v-model="Form.password" maxlength="16">
          <label>确认密码</label>
          <input type="password" class="textBox" v-model="Form.confirm" maxlength="16">

          <button @click="regist" id="regist">立即注册</button>
        </div>
        <div class="toLogin">
          <span>已有账号?</span>&emsp;
          <a href="/login">立即登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {request} from '../network/request'
  export default {
    name: "Login",
    data(){
      return{
        Form:{
          username: '',
          email: '',
          password: '',
          confirm: '',
          verifyCode: ''
        },
        codeText:'获取验证码',
        disabledCodeBtn: true,
      }
    },
    methods: {
      regist() {
        if (this.Form.username && this.Form.email && this.Form.password && this.Form.confirm && this.Form.verifyCode) {
          if (this.Form.username.length >= 5) {
            if (this.Form.email.length >= 10) {
              if (this.Form.password.length >= 5) {
                if (this.Form.password === this.Form.confirm) {
                  request({
                    url: '/api/regist',
                    method: 'post',
                    data:{
                      username: this.Form.username,
                      email: this.Form.email,
                      password: this.Form.password,
                      verifyCode: this.Form.verifyCode
                    }
                  }).then(result => {
                    if (result.data.status === 0) {
                      this.$message({showClose: true, message: '注册成功!正在跳转登录页面...', type: 'success'});
                      setTimeout(() => {
                        this.$router.push('/login')
                      }, 2000)
                    }else if(result.data.status === 1) {
                      this.$message({showClose: true, message: '你来晚了,该用户名已被注册了！', type: 'warning'});
                      this.Form.password = '';
                      this.Form.confirm = '';
                    }else if(result.data.status === 2){
                      this.$message({showClose: true, message: '验证码错了哦！', type: 'error'});
                      this.Form.verifyCode = '';
                    } else {
                      this.$message({showClose: true, message: '服务器繁忙,请稍后再试！', type: 'error'});
                    }
                  }).catch(error => {
                    this.$message({showClose: true, message: '服务器繁忙,请稍后再试！', type: 'error'});
                  })
                } else {
                  this.$message({showClose: true, message: '两次密码不一致,请检查后重试！', type: 'warning'});
                  this.Form.password = '';
                  this.Form.confirm = '';
                }
              } else {
                this.$message({showClose: true, message: '密码长度限制为在5至16个字符！', type: 'warning'});
                this.Form.password = '';
                this.Form.confirm = ''
              }
            } else {
              this.$message({showClose: true, message: '请输入合法的电子邮件地址！', type: 'warning'});
            }
          } else {
            this.$message({showClose: true, message: '用户名长度限制为在5至16个字符！', type: 'warning'});
          }
        } else {
          this.$message({showClose: true, message: '登录信息尚未填写完整,请检查后重试！', type: 'warning'});
        }
      },
      async sendVerifycode(){
        if(this.Form.email.length>=10){
          this.countDown(10)
          // 此处填写验证码请求
          request({
            url: '/api/regist/verifycode',
            method: 'post',
            data: {email: this.Form.email}
          })
        }else{
          this.$message({showClose: true, message: '请输入合法的电子邮件地址！', type: 'warning'});
          this.Form.verifyCode = '';
        }
      },
      countDown(time) {
        if(time === 0) {
          this.codeText = '重新发送';
          this.disabledCodeBtn = true;
          return;
        }
        this.disabledCodeBtn = false;
        this.codeText = '重新发送(' + time + ')';
        time --;
        setTimeout(() => {
          this.countDown(time);
        }, 1000)
      }
    }
  }
</script>

<style scoped lang="less">
  .logo-container{
    position: relative;
    margin-top: 30px;
    width: 100%;
    height: 80px;
    .logo{
      position: relative;
      width: 80px;
      height: 80px;
      margin: 0 auto;
      a>img{
        width: 80px;
      }
    }
  }
  .login-main{
    width: 350px;
    margin: 0 auto;
    .title{
      font-size: 24px;
      font-weight: 600;
      letter-spacing: -.5px;
      color: #333;
      text-align: center;
    }
    .input-box{
      margin-top: 20px;
      border: 1px solid #d8dee2;
      border-radius: 5px;
      padding: 20px 20px 25px 20px;
      .textBox{
        margin-top: 7px;
        margin-bottom: 15px;
        background-color: #FFF;
        border-radius: 4px;
        border: 1px solid #DCDFE6;
        box-sizing: border-box;
        color: #606266;
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645,.045,.355,1);
        width: 100%;
        display: block;
        &:focus{
          border-color: #409EFF;
        }
      }
      label{
        font-weight: 600;
        font-size: 14px;
      }
      #Sidentify-span{
        display: block;
      }
      #Sidentify{
        float: right;
        margin-top: 8px;
        cursor: pointer;
        height: 38px;
        width: 35%;
        color: #666;
        background: #f4f4f5;
        border: 1px solid #d3d4d6;
        outline: none;
        border-radius: 4px;
        &:hover{
          background-color: #eee;
        }
      }
      .verify{
        width: 60% !important;
        display: inline-block;
      }
      #regist{
        width: 100%;
        color: #fff;
        background-color: #28a745;
        background-image: linear-gradient(-180deg,#34d058,#28a745 90%);
        border-radius: 5px;
        border-style: solid;
        border-width: 1px;
        padding: 8px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        outline: none;
        &:hover{
          background-color: #269f42;
          background-image: linear-gradient(-180deg,#2fcb53,#269f42 90%);
          background-position: -.5em;
          /*border-color: rgba(27,31,35,.5);*/
        }
      }
    }
    .toLogin{
      margin-top: 15px;
      border: 1px solid #d8dee2;
      padding: 10px 20px;
      border-radius: 5px;
      text-align: center;
      a{
        text-decoration: none;
        font-size: 12px;
        float: right;
        color: #0366d6;
        padding-top: 3px;
        font-weight: 600;
      }
      a,span{
        float: none;
        font-size: 14px;
        font-weight: 500;
      }
    }
  }
</style>