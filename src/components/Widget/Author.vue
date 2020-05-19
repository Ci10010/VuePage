<template>
  <div class="author">
    <div class="avatar">
<!--      <img :src="avatar" alt="avatar">-->
      <img src="../../assets/img/avatar.png" alt="avatar">
    </div>
    <div class="info">
      <p class="nickname">{{ nickname }}</p>
      <p class="description">{{ description }}</p>
      <div class="location">
        <img src="../../assets/img/location.png" alt="">
        <span>{{ location }}</span>
      </div>
      <div class="summary">
        <div class="articleNum">
          <p>文章</p>
          <a href="/statistic">{{ articleNum }}</a>
        </div>
        <div class="articleCat">
          <p>分类</p>
          <a href="/category">{{ articleCat }}</a>
        </div>
        <div class="articleLab">
          <p>标签</p>
          <a href="/label">{{ articleLab }}</a>
        </div>
        <div class="icon">
          <a :href="'http://wpa.qq.com/msgrd?v=3&uin='+QQ+'&site=qq&menu=yes'"><img src="../../assets/img/QQ.png" alt="icon"></a>
          <a :href="'https://github.com/'+GitHub"><img src="../../assets/img/GitHub.png" alt="icon"></a>
          <a :href="'mailto:'+Email"><img src="../../assets/img/Email.png" alt="icon"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {request} from "../../network/request";
  export default {
    name: "Author",
    data(){
      return{
        avatar: '../../assets/img/avatar.png',
        nickname: 'C',
        description: '一切皆源于兴趣!',
        location: '陕西·西安',
        articleNum: '9',
        articleCat: '8',
        articleLab: '10',
        QQ: '83974934',
        GitHub: 'Ci10010',
        Email: '83974934@qq.com'
      }
    },
    // 此处发送axios请求
    created() {
      request({
        url: '',
        method: '',
        data:{

        }
      }).then(result=>{

      }).catch(error=>{

      })
    }
  }
</script>

<style scoped lang="less">
  .author{
    .avatar{
      position: relative;
      width: 128px;
      height: 128px;
      border-radius: 50%;
      left: 50%;
      transform: translate(-50%);
      img{
        width: 128px;
        border-radius: 50%;
        box-shadow: 0 4px 10px rgba(0,0,0,0.15), 0 0 1px rgba(0,0,0,0.1);
      }
    }
    .info{
      position: relative;
      /*border: 1px solid salmon;*/
      text-align: center;
      .nickname{
        font-size: 18px;
        margin-top: 10px;
      }
      .description,.location{
        position: relative;
        margin: 7px auto;
      }
      .location{
        font-size: 12px;
        color: #7a7a7a !important;
        display: flex;
        justify-content: center;
        img{
          width: 16px;
          margin-right: 1px;
        }
      }
      .summary{
        .articleNum,.articleCat,.articleLab{
          display: inline-block;
          width: calc(100% / 3);
          margin-top: 5px;
          p{
            font-size: 16px;
            margin: 5px;
          }
          a{
            font-size: 22px;
            text-decoration: none;
            color: #000;
          }
        }
      .icon{
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        img{
          width: 15px;
        }
      }
      }
    }
  }
</style>