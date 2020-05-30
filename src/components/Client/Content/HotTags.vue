<template>
  <div>
    <div id="hotTags" v-for="(tag,index) in tags" :key="index">
      <a :href="tag.href" class="commonStyle">{{ tag.name }}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HotTags",
    data(){
      return{
        tags:[
          {name: '视频教程', href: 'https://www.geekinns.cn/tags/HTML/'},
          {name: 'Linux', href: 'https://www.geekinns.cn/tags/HTML/'},
          {name: 'Markdown', href: 'https://www.geekinns.cn/tags/HTML/'},
          {name: 'MySQL', href: 'https://www.geekinns.cn/tags/HTML/'},
          {name: 'MySQL', href: 'https://www.geekinns.cn/tags/HTML/'},
          {name: 'Git', href: 'https://www.geekinns.cn/tags/HTML/'},
          {name: 'Git', href: 'https://www.geekinns.cn/tags/HTML/'},
          {name: '视频教程', href: 'https://www.geekinns.cn/tags/HTML/'},
          {name: '视频教程', href: 'https://www.geekinns.cn/tags/HTML/'},
          {name: 'Markdown', href: 'https://www.geekinns.cn/tags/HTML/'},
          {name: 'MySQL', href: 'https://www.geekinns.cn/tags/HTML/'},
          {name: 'MySQL', href: 'https://www.geekinns.cn/tags/HTML/'},
          {name: 'Git', href: 'https://www.geekinns.cn/tags/HTML/'},
          {name: 'Git', href: 'https://www.geekinns.cn/tags/HTML/'},
          {name: '视频教程', href: 'https://www.geekinns.cn/tags/HTML/'},
          {name: '视频教程', href: 'https://www.geekinns.cn/tags/HTML/'},
        ],
        // backgroundColor:['#23d160','#ffdd57','#ff3860'],
        // bcolor: backgroundColor[Math.floor(Math.random() * backgroundColor.length)]
      }
    },
  }
</script>

<style scoped lang="less">
  #hotTags{
    margin-bottom: 10px;
    /*border: 1px green solid;*/
    background-color: transparent;
    display:inline-block;
    a{text-decoration: none; color: #fff;}
    a:hover {color: #fff;}
    .commonStyle{
      float: left;
      background-color: #23d160;
      border-radius: 3px;
      font-size: 12px;
      padding: 4px 7px;
      margin-right: 8px;
    }
  }



</style>