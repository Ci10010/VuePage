<template>
  <div>
    <div class="article-item" v-for="(item,index) in articles">
      <!--title-->
      <h1 class="title"><a :href="item.href">{{ item.title }}</a></h1>
      <div class="label">
        <!--Time-->
        <div class="time">
          <i class="fa fa-calendar" aria-hidden="true"></i>
          <a :href="item.href">{{ item.time }}</a>
        </div>
        <!--category-->
        <div class="category">
          <i class="fa fa-folder" aria-hidden="true"></i>
          <a :href="item.href" v-for="(category,index) in item.category">{{ category + ' · '}}</a>
        </div>
        <!--tags-->
        <div class="tags">
          <i class="fa fa-tags" aria-hidden="true"></i>
          <a :href="item.href" v-for="(tag,index) in item.tags">{{ tag + ' · '}}</a>
        </div>
      </div>
      <div class="content"><a :href="item.href">{{ item.content }}</a></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Article",
    data(){
      return{
        articles: [
          {
            title: 'ECMAScript 6 入门学习笔记',
            content: '这段时间在一个项目中用到了视频和图片轮播的广告，一开始我使用了 ExoPlayer 视频播放库，结果出现了一个奇葩的问题 ANR on player release #4352，我的设备系统是 Android 5.1.1 于是我尝试工程更新到 AndroidX 将 ExoPlayer 更新到最新版本，结果还是会出问题，貌似在 Android 7.0 中这个问题得到了修复。迫于这个问题的困扰，于是我放弃了 ExoPlayer 而选择系统默认的视频播放库，结果遇到了另一个令人不爽的 bug bug 详细描述。',
            href: '',
            time: '2020-04-24',
            category: ['工具MAC','终端美化'],
            tags: ['工具','终端美化', 'TERMINAL', 'ZSH', 'OH-MY-ZSH', '主题配色', '字体']
          },
          {
            title: '浅谈软件是如何控制硬件工作的',
            content: '我们都知道软件是服务于硬件的，因为单纯的软件如果不跑到具体的硬件上面将是没有任何价值的。如果单纯的去谈软件是没有任何价值的，软件的开发往往依附于所运行的硬件环境。关于这个话题涉及的知识比较多，而且比较深奥，这个话题其实是《微机原理》这门课程所要解决的问题，这篇文章不打算以晦涩难懂比较深奥的知识揭开这个问题的本质，而是想基于作者（水寒）的知识积累和实践，通过一些简单的电路知识和计算机软硬件知识来了解软件和硬件是怎么交织在一起的。',
            href: '',
            time: '2020-04-24',
            category: ['异常分析','HOMEBREW'],
            tags: ['HOMEBREW', 'BREW', '镜像替换默认源']
          }
        ]
      }
    }
  }
</script>

<style scoped lang="less">
  .article-item{
    /*border: 1px slateblue solid;*/
    position: relative;
    background-color: #ffffff;
    border-radius: 3px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.05);
    margin-bottom: 15px;
    padding: 16px 24px 12px 24px;
    border-bottom: 1px solid #f0f2f5;
    .title{
      a{
        color: #565a5f;
        text-decoration: none;
        font-weight: 400;
      }
    }
    .label{
      margin: 7px 0;
      div{margin: 2px 0}
      i{font-size: 14px;color: #666666;margin-right: 5px}
      a{text-decoration: none;color: #565a5f;}
      .time,.category{display: inline-block}
      .time{a{margin-right: 10px}}
    }
    .content{
      margin: 15px 0;
      a{
        font-size: 14px;
        line-height: 22px;
        white-space: normal;
        color: #999aaa;
        text-decoration: none;
      }
    }
    .time{
      color: #5f6471;
    }
  }
</style>