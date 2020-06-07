<template>
  <div>
    <div>
      <MessageBanner></MessageBanner>
    </div>
    <div class="baseStyle">
      <h3>留言(Message)</h3>
      <span class="tip-span">若留言未加载成功,请 <a href="/message" class="tip-a">刷新一下</a></span>
      <div id="valine"></div>
    </div>
  </div>
</template>

<script>
  import Valine from "../../plugins/Valine.min";
  import AV from "../../plugins/av-min";
  import MessageBanner from "../../components/Client/Content/Banner/MessageBanner";
  export default {
    name: "Message",
    components: {MessageBanner},
    mounted() {
      new Valine({
        av: AV,
        el: '#valine',
        app_id: 'efQfLzj64KkbvNT7WfRK9y9C-MdYXbMMI',
        app_key: 'U6DIgBh7tP06EpNQ3NJIru1p',
        avatar: 'monsterid',
        meta: ['nick','mail'],
        pageSize: 15,
        recordIP: true,
        enableQQ: true
      });
    }
  }
</script>

<style scoped>
  #valine{
    margin-top: 15px;
  }
  .tip-span{
    color: #909399;
    font-size: 12px;
    position: relative;
    top: 5px;
  }
  .tip-a{
    color: #666666;
  }
</style>