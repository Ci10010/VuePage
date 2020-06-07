<template>
  <div>
    <div>
      <BookmarkBanner></BookmarkBanner>
    </div>
    <div class="baseStyle">
      <h3>书签(Bookmark)</h3>
      <div id="bookmark">
        <div class="box" v-for="(bookmark,index) in bookmarks" :key="index">
          <div class="medias">
            <div class="img-box">
              <a :href="bookmark.Href"><img :src="bookmark.ImgSrc" :alt="bookmark.Title"/></a>
            </div>
            <div class="info-box">
              <div class="title">
                <i class="fa fa-bookmark"></i>
                <a :href="bookmark.Href">{{bookmark.Title}}</a>
              </div>
              <div class="description">
                <span>{{bookmark.Description}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {request} from "../../network/request";
  import BookmarkBanner from "../../components/Client/Content/Banner/BookmarkBanner";
  export default {
    name: "Share",
    components:{BookmarkBanner},
    data(){
      return{
        bookmarks: []
      }
    },
    mounted() {
      request({
        url: '/api/getbookmark',
        method: 'get'
      }).then(result => {
        this.bookmarks = result.data.result;
      }).catch(error => {
        console.log(error);
      })
    }
  }
</script>

<style scoped lang="less">
  #bookmark{
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    margin-top: 15px;
    .box {
      width: calc(100% / 3 - 11px);
      border-radius: 6px;
      box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
      margin: 5px;
      padding: 10px;
      .medias {
        height: 80px;
        display: flex;
        .img-box{
          margin-top: 5px;
          img{
            width: 60px;
            border-radius: 50%;
          }
        }
        .info-box{
          .title{
            font-weight: 600;
            margin-left: 15px;
            margin-top: 5px;
            margin-bottom: 4px;
            i {
              font-size: 16px;
              color: #606266;
              margin-right: 8px;
            }
            a{
              font-size: 16px;
              color: #606266;
              font-weight: 400;
              transition: all .5s;
              &:hover{
                color: #ee521c;
              }
            }
          }
          .description{
            font-size: 13px;
            color: #666666;
            margin-left: 15px;
            height: 40px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1450px) {
    .box {
      width: 100%;
    }
  }
</style>