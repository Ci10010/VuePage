<template>
  <div>
    <h3>留言(Message)</h3>
    <div id="valine"></div>
  </div>
</template>

<script>
  import Valine from "../../plugins/Valine.min";
  import AV from "../../plugins/av-min";
  export default {
    name: "Message",
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
</style>