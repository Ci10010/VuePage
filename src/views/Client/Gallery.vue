<template>
  <div>
    <div>
      <GalleryBanner></GalleryBanner>
    </div>
    <div class="baseStyle">
      <h3>图册(Gallery)</h3>
      <div class="gallery">
        <!--https://terryz.gitee.io/vue/#/gallery/demo-->
        <v-gallery :images="ImgList"></v-gallery>
      </div>
    </div>
  </div>
</template>

<script>
  import {request} from "../../network/request";
  import GalleryBanner from "../../components/Client/Content/Banner/GalleryBanner";
  export default {
    name: "Gallery",
    components: {GalleryBanner},
    data(){
      return{
        ImgList: []
      }
    },
    mounted() {
      request({
        url: '/api/getgallery',
        method: 'get'
      }).then(result => {
        this.ImgList = result.data.result;
      }).catch(error => {
        console.log(error);
      })
    }
  }
</script>

<style scoped>
  .gallery{
    margin-top: 15px;
  }
</style>