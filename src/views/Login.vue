<template>
  <div id="login">
    <div class="logo-container">
        <div class="logo">
          <a href="#"><img src="../assets/LOGO.png"/></a>
        </div>
    </div>
    <div class="login-main">
      <div class="login-box">
        <div class="title">登录GitHub</div>

        <div class="input-box">
          <label class="input-box-label">用户名</label>
          <input type="text" class="textBox" :class="{tipStyle:usIsLegal}" v-model="Form.username">
          <div :class="{errTip:usIsLegal}"><div v-show="usIsLegal">▲</div><span v-show="usIsLegal">此选项不可为空</span></div>

          <label class="input-box-label">密码</label>
          <input type="password" class="textBox" :class="{tipStyle:psIsLegal}" v-model="Form.password">
          <div :class="{errTip:psIsLegal}"><div v-show="psIsLegal">▲</div><span v-show="psIsLegal">此选项不可为空</span></div>

          <label class="input-box-label" id="Sidentify-span">验证码</label>
          <div id="verifyInput">
            <input type="text" class="textBox" :class="{tipStyle:vsIsLegal}" v-model="Form.verifyCode">
          </div>
          <div @click="refreshCode" id="Sidentify">
            <Sidentify :identifyCode="identifyCode"></Sidentify>
          </div>
          <div :class="{errTip:vsIsLegal}"><div v-show="vsIsLegal">▲</div><span v-show="vsIsLegal">此选项不可为空</span></div>
          <button class="loginBtn" @click="login" :plain="true">登录</button>
        </div>
        <div class="toLogin">
          <span>没有账号?</span>
          <a href="/regist">创建一个账户</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {request} from '../network/request'
  import Sidentify from "../components/Sidentify";
  export default {
    name: "Login",
    components: {Sidentify},
    data(){
      return{
        Form:{
          username: '',
          password: '',
          verifyCode: ''
        },
        identifyCode: '',
        identifyCodes: '1234567890',
        usIsLegal: false,
        psIsLegal: false,
        vsIsLegal: false,
      }
    },
    mounted() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    methods:{
      async login(){
        if(this.Form.username&&this.Form.password&&this.Form.verifyCode){
          if(this.Form.verifyCode === this.identifyCode){
            request({
              url: '/api/login',
              method: 'post',
              data:{
                username: this.Form.username,
                password: this.Form.password
              }
            }).then(result=>{
              console.log(result);
              if(result.data.status===0){
                this.$message({showClose: true,message: '登录成功!',type: 'success'});
                window.sessionStorage.setItem('token', result.data.token);
                this.$router.push('/profile');
              }else if(result.data.status===-1){
                this.$message({ showClose: true,message: '服务器繁忙,请稍等重试!',type: 'error'});
              }else{
                this.$message({showClose: true,message: '账号或密码错误,请检查后登录!',type: 'error'});
                this.refreshCode()
              }
            }).catch(error=>{
              this.$message({showClose: true,message: '服务器繁忙,请稍等重试!',type: 'error'});})
          }else{
            this.$message({showClose: true,message: '验证码输错了哦!',type: 'warning'});
            this.refreshCode()
          }
        }else{
          if(!this.Form.username){
            this.usIsLegal = true;
            setTimeout(()=>{
              this.usIsLegal = false;
            },3000);
          }
          else if(!this.Form.password){
            this.psIsLegal = true;
            setTimeout(()=>{
              this.psIsLegal = false;
            },3000)
          }
          else if(!this.Form.verifyCode){
            this.vsIsLegal = true;
            setTimeout(()=>{
              this.vsIsLegal = false;
            },3000)}
          // this.$message({showClose: true,message: '登录信息尚未填写完整,请检查后重试!',type: 'warning'});
        }
      },
      // 验证码区域
      randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
      },
      refreshCode() {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
      },
      makeCode(o, l) {
        for (let i = 0; i < l; i++) {
          this.identifyCode += this.identifyCodes[
              this.randomNum(0, this.identifyCodes.length)
          ]
        }
      }
    }
  }
</script>

<style scoped lang="less">
  .logo-container{
    position: relative;
    margin-top: 50px;
    width: 100%;
    height: 80px;
    .logo{
      position: relative;
      width: 80px;
      height: 80px;
      margin: 0 auto;
    }
    a>img{
      width: 80px;
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
      margin-top: 15px;
      border: 1px solid #d8dee2;
      border-radius: 5px;
      padding: 20px;
      .input-box-label{
        font-weight: 600;
        font-size: 14px;
        color: #363636;
      }
      // dev ----------------------------
      .tipStyle{
        border: 1px solid rgb(255,76,76) !important;
      }
      .errTip{
        position: absolute;
        background-color: rgb(255,76,76);
        border-radius: 3px;
        padding: 6px 12px;
        color: #FFFFFF;
        font-size: 12px;
        margin-top: -7px;
        transition: .1s cubic-bezier(.645,.045,.355,1);
        box-shadow: -1px 2px 1px rgba(0,0,0,.1);
        div{
          position: absolute;
          top: -19px;
          color: rgb(255,76,76);
          display: inline-block;
          font-size: 30px;
          z-index: -1;
        }
      }
      // dev ----------------------------
      #verifyInput{
        width: 60%;
        display: inline-block;
      }
      #Sidentify-span{
        display: block;
      }
      #Sidentify{
        float: right;
        margin-top: 8px;
        cursor: pointer;
      }
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
      .loginBtn{
        width: 100%;
        color: #fff;
        background-color: #28a745;
        background-image: linear-gradient(-180deg,#34d058,#28a745 90%);
        border-radius: 5px;
        border-style: solid;
        border-width: 1px;
        padding: 10px;
        font-size: 14px;
        font-weight: 600;
        cursor: pointer;
        outline: none;
        &:hover{
          background-color: #5FB878;;
          background-image: linear-gradient(-180deg,#2fcb53,#269f42 90%);
          background-position: -.5em;
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
        margin: 0 5px;
      }
    }
  }

</style>
