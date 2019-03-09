<template>
  <div id="strategory">
    <div class="advertising">
       <img src="@/assets/community/advertise.png">
    </div>
    <div class="category">
       <div class="category_item" v-for="(item,index) in imgList" :key="index">
           <img class="img" v-lazy="item.imageUrl">
           <div class="desc"><span>{{item.title}}</span></div>
       </div>
    </div>
    <div class="booth">
       <div class="title">
         <span>旅游攻略</span>
       </div>
       <div class="content">
         <!-- <div class="two-column" v-for="(item,index) in imgList" :key="index">
            <img v-lazy="item.imageUrl">
            <div class="desc"><span>{{item.title}}</span></div>
         </div> -->
         <div class="videolist" v-for="(item,index) in imgList" :key="index" @click="godetail()">
            <img class="backgrooud" src="@/assets/video.png">
            <img class="play" src="@/assets/play.png">
            <div class="desc">
                <span>跟着大V游蓬莱喽！</span>
            </div>
         </div>

       </div>
          <!-- <iframe src="//player.bilibili.com/player.html?aid=44661456&cid=78189958&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
          <iframe src="//player.bilibili.com/player.html?aid=44661456&cid=78189958&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe> -->
    </div>
  </div>
</template>

<script>
// import { Lazyload } from 'vant';
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {})
export default {
  name: 'community',
  //   components:{
  //    Lazyload
  //   },
  data () {
    return {
      imgList: [{
        imageUrl: require('@/assets/community/category1.png'),
        title: '户外装备'
      }, {
        imageUrl: require('@/assets/community/category2.png'),
        title: '网红同款！抹白防晒喷雾，夏天出游晒不怕夏天出游晒不怕'
      }, {
        imageUrl: require('@/assets/community/category3.png'),
        title: '户外装备'
      }
      ]
    }
  },
  methods: {
    godetail () {
      this.$router.push({
        path: ''
      })
    }
  }
}
</script>
<style lang="scss">
   .category::-webkit-scrollbar {display:none}
   #strategory{
     background: #ffffff;
     padding-bottom:50px;
    .advertising{
        // width: 345px;
        padding: 16px 14px 15px 14px;
        height: 130px;
        img{
            // box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
            width:100%;
            height:100%;
            border-radius: 8px;
        }
    }
    .category{
        padding:0 14px;
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        .category_item{
           margin-right:10px;
           width: 100px;
           background-color: #ffffff;
        //    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.1);
        //    border-radius: 8px;
           img{
               width:100px;
               border-radius: 8px;
           }
           .desc{
               margin-top:10px;
               font-family: PingFang-SC-Bold;
               font-size: 14px;
               color: #333333;
               overflow:hidden;
               text-overflow:ellipsis;
               white-space:nowrap;
               span{
                   font-family: PingFang-SC-Medium;
                   font-size: 14px;
                   line-height: 20px;
                   letter-spacing: 0px;
                   color: #333333;
               }
           }
        }
    }
    .booth{
        padding: 35px 15px 0 15px;
        .title{
            margin-bottom: 20px;
            span{
                font-family: PingFang-SC-Bold;
                font-size: 20px;
                color: #333333;
            }
        }
        .content{
           .videolist{
               height:138px;
               position: relative;
               margin-bottom: 15px;
               box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.5);
               border-radius: 8px;
            //    padding: 0 14px 0 14px;
               .backgrooud{
                   width:100%;
                   height:100%;
                   border-radius: 8px;
               }
               .play{
                   position: absolute;
                   top:50%;
                   left: 50%;
                   transform: translate(-50%,-50%);
               }
               .desc{
                   background-color: rgba(0,0,0,0.5);
                   position: absolute;
                   width: 100%;
                   bottom: 0;
                   left: 0;
                   height: 20px;
                //    padding-left:29px;
                   span{
                    display: inline-block;
                    margin-left: 15px;
                    font-family: PingFang-SC-Medium;
                    font-size: 13px;
                    line-height: 20px;
                    color: #ffffff;
                   }
               }
           }
        }

    }
   }
</style>
