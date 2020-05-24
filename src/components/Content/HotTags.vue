<template>
  <div>
    <div id="hotTags">
      <a href="https://www.geekinns.cn/tags/HTML/" class="red_tags">HTML</a>
      <a href="https://www.geekinns.cn/tags/Linux/" class="green_tags">Linux</a>
      <a href="https://www.geekinns.cn/tags/Markdown/" class="yellow_tags">Markdown</a>
      <a href="https://www.geekinns.cn/tags/MySQL/" class="red_tags">MySQL</a>
      <a href="https://www.geekinns.cn/tags/Git/" class="yellow_tags">Git</a>
      <a href="https://www.geekinns.cn/tags/SSL%E8%AF%81%E4%B9%A6%E5%AE%89%E8%A3%85/" class="green_tags">SSL证书安装</a>
      <a href="https://www.geekinns.cn/tags/%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1/" class="yellow_tags">负载均衡</a>
      <a href="https://www.geekinns.cn/tags/%E4%B8%8D%E8%92%9C%E5%AD%90/" class="green_tags">网页计数器</a>
      <a href="https://www.geekinns.cn/tags/Vim/" class="yellow_tags">Vim</a>
      <a href="https://www.geekinns.cn/tags/Hexo/" class="red_tags">Hexo</a>
      <a href="https://www.geekinns.cn/tags/Web%E5%BC%80%E5%8F%91/" class="green_tags">Web开发</a>
      <a href="https://www.geekinns.cn/tags/flex/" class="yellow_tags">Flex布局</a>

      <a href="https://www.geekinns.cn/tags/Markdown/" class="green_tags">Markdown</a>
      <a href="https://www.geekinns.cn/tags/Git/" class="red_tags">Git</a>
      <a href="https://www.geekinns.cn/tags/Nginx/" class="yellow_tags">Nginx</a>
      <a href="https://www.geekinns.cn/tags/SSL%E8%AF%81%E4%B9%A6%E5%AE%89%E8%A3%85/" class="green_tags">SSL证书安装</a>
      <a href="https://www.geekinns.cn/tags/%E4%B8%8D%E8%92%9C%E5%AD%90/" class="red_tags">网页计数器</a>
      <a href="https://www.geekinns.cn/tags/%E4%BB%A3%E7%90%86/" class="yellow_tags">Nginx代理</a>
      <a href="https://www.geekinns.cn/tags/Vim/" class="green_tags">Vim</a>
      <a href="https://www.geekinns.cn/tags/Hexo/" class="red_tags">Hexo</a>
      <a href="https://www.geekinns.cn/tags/" class="more_tags">查看更多</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HotTags"
  }
</script>

<style scoped>
  #hotTags{
    /*height: 200px;*/
    background-color: #e6a23c;
    margin-bottom: 10px;
  }
  #hotTags
  {
    width: 100%;
     /*border: 1px green solid;*/
    background-color: transparent;
    /*box-shadow: 0 0 0 rgba(0,0,0,0.05);*/
    display:inline-block !important;
  }
  a{text-decoration: none; color: #fff;}
  a:hover {color: #fff;}
  .red_tags{
    position: relative;
    float: left;
    background-color: #ff3860;
    align-items: center;
    border-radius: 4px;
    font-size: 13px;
    line-height: 1;
    padding: 0.5em 0.65em;
    margin-right: 0.5rem;
    margin-bottom: 10px;
  }
  .green_tags{
    float: left;
    position: relative;
    background-color: #23d160;
    align-items: center;
    border-radius: 4px;
    font-size: 13px;
    line-height: 1;
    padding: 0.5em 0.65em;
    margin-right: 0.5rem;
    margin-bottom: 10px;
  }
  .yellow_tags
  {
    float: left;
    position: relative;
    background-color: #ffdd57;
    align-items: center;
    border-radius: 4px;
    font-size: 13px;
    line-height: 1;
    padding: 0.5em 0.65em;
    margin-right: 0.5rem;
    margin-bottom: 10px;
    /* color: rgba(0, 0, 0, 0.7); */
  }
  .more_tags
  {
    float: left;
    position: relative;
    background-color: #95a5a6;
    align-items: center;
    border-radius: 4px;
    font-size: 13px;
    line-height: 1;
    padding: 0.5em 0.65em;
    margin-right: 0.5rem;
    margin-bottom: 10px;
  }
</style>