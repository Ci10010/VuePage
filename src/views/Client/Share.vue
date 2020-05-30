<template>
  <div>
    <h3>分享(Share)</h3>
    <div id="share">
      <div class="item" v-for="(item,index) in share">
        <img alt="" :src="item.src"/>
        <a :href="item.href">{{ item.name }}</a>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Share",
    data(){
      return{
        share:[
          {name: 'Flat UI Colors', src: 'https://image.uisdc.com/wp-content/uploads/2018/08/sdcnav-1-2.png', href: '', description: '国内最著名的图标搜索及管理平台，300万个图标下载'},
          {name: 'Font Awesome', src: 'https://image.uisdc.com/wp-content/uploads/2020/03/sdcnav-1-uu2.png', href: '', description: '推荐！高品质的免费写真素材站'},
          {name: 'jQuery Plugin', src: 'https://image.uisdc.com/wp-content/uploads/2018/08/sdcnav-1-4.png', href: '', description: '优设旗下灵感频道，每日都有新灵感'},
          {name: '阿里矢量图标库', src: 'https://image.uisdc.com/wp-content/uploads/2018/08/sdcnav-1-1.png', href: '', description: '推荐！免费视频创作神器！5200万素材任选'},
          {name: 'RGB颜色转换工具', src: 'https://image.uisdc.com/wp-content/uploads/2020/01/nav2020-qls.png', href: '', description: '强烈推荐！几十万张超高分辨率艺术作品欣赏'},
          {name: '觅元素', src: 'https://image.uisdc.com/wp-content/uploads/2018/08/sdcnav-1-11.png', href: '', description: '国际知名设计站点！资深设计师必备'},
          {name: 'Navicat Premium 15', src: 'https://image.uisdc.com/wp-content/uploads/2019/09/sdcnav-1-2png.png', href: '', description: '设计师寻找灵感的必备站点，启发设计灵感'},
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  #share{
    position: relative;
    .item{
      display: inline-block;
      padding: 10px;
      width: 18.99%;
      background-color: salmon;
      margin: 10px 10px 0 0;
      &:hover{
        background-color: #f2f8fd;
      }
      img{
        display: inline-block;
        border: 1px seagreen solid;
        width: 50px;
      }
      a{
        display: inline-block;
      }
    }
  }
</style>