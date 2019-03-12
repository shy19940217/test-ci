<template>
  <div id="home">
    <!-- 轮播图 -->
   <div class="sowingMap">
      <div class="swiper-container" id="topBanner">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in imgList" :key="index">
            <img :src="item.imageUrl"/>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="homecontent">
      <!-- 商标 -->
     <div class="brand">
        <div class="title">
          <img class="col-fl" src="@/assets/logo.png">
          <div class="col-fr">
            <p>西柚美学</p>
            <p>发现更好的自己</p>
          </div>
        </div>
        <div class="desc">
          <p>西柚美学是香港瑜伽协会在中国设立的导师培训基地及品质的标准。负责在中国推广瑜伽事业，培训并认证专职瑜伽导师。西柚美学推广的是一套简单易行，行之有效的健身方式现成为中国从事专职瑜伽研究基地。</p>
        </div>
     </div>
     <!-- 我的预约 -->
     <div class="reservation">
        <div class="title">
           <span>我的预约</span>
        </div>
        <div class="list" v-for="(item,index) in reservationlist" :key="index" @click="godetail()">
           <div class="reservation_col_fl">
               <img class="photo" :src="item.imageUrl">
               <div class="desc">
                 <p class="desc_first_rol">{{item.title}}</p>
                 <div class="desc_second_rol">
                   <div class="location">
                    <img style="width:11px;height:12px;margin-right:4px;" src="@/assets/icon/location.png">
                    <span>{{item.location}}</span>
                   </div>
                   <div v-if="item.category ==1">
                     <span>老师：</span>
                     <span>{{item.teacher}}</span>
                   </div>
                   <div v-if="item.category ==2">
                    <span>时间：</span>
                    <span>{{item.time}}</span>
                   </div>
                 </div>
               </div>
           </div>
           <div class="reservation_col_fr">
             <span>{{item.appointment_time}}</span>
           </div>
        </div>
     </div>
      <!-- 门店信息 -->
      <div class="shop">
        <div class="title">
           <span>门店信息</span>
        </div>
        <div class="list" v-for="(item,index) in shoplist" :key="index">
           <!-- <div class="shop_col"> -->
               <img class="photo" :src="item.imageUrl">
               <div class="desc">
                 <p class="desc_first_rol">{{item.title}}</p>
                 <p class="desc_second_rol">{{item.address}}</p>
                 <p class="desc_third_rol">
                   <span>{{item.distance}}</span>
                   <img style="width:11px;height:12px;" src="@/assets/icon/location.png">
                 </p>
               </div>
        </div>
     </div>
     <div class="footer">
       <img src="@/assets/c.png"><span>2019宇泛智能技术支持</span>
     </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {})
export default {
  name: 'home',
  data () {
    return {
      iptValue: '',
      reservationlist: [
        {
          imageUrl: require('@/assets/celebrity/person2.png'),
          title: '明星普拉提大器械课程',
          category: 1, // 1 为团体  2 为美容  3 为私教
          teacher: '小桃',
          location: '西溪银泰店',
          appointment_time: '今天 18:00'
        },
        {
          imageUrl: require('@/assets/celebrity/person1.png'),
          title: '西柚美学-美甲套餐',
          category: 2, // 1 为团体  2 为美容  3 为私教
          time: '90分钟',
          location: '西溪银泰店',
          appointment_time: '今天 18:00'
        }
      ],
      shoplist: [
        {
          imageUrl: require('@/assets/celebrity/person2.png'),
          title: '明星普拉提大器械课程',
          address: '弘德路和双龙街交叉口西溪银泰2号楼509-510',
          distance: '4.3km'
        },
        {
          imageUrl: require('@/assets/celebrity/person2.png'),
          title: '明星普拉提大器械课程',
          address: '弘德路和双龙街交叉口西溪银泰2号楼509-510',
          distance: '4.3km'
        }
      ],
      imgList: [{
        imageUrl: require('@/assets/celebrity/banner4.png')
      }, {
        imageUrl: require('@/assets/celebrity/banner4.png')
      }, {
        imageUrl: require('@/assets/celebrity/banner4.png')
      }, {
        imageUrl: require('@/assets/celebrity/banner4.png')
      }
      ]
    }
  },
  created () {
    this.initdata()
  },
  components: {
    Swiper
  },
  methods: {
    godetail () {
      this.$router.push({
        path: '/detail'
      })
    },
    gosearch (event) {
      if (event.keyCode === 13) {
        this.$router.push({
          path: '/search',
          query: {
            iptValue: this.iptValue
          }
        })
        event.preventDefault()
      }
    },
    initdata () {
      this.$nextTick(() => {
        let mySwiper3 = new Swiper('#topBanner', {
          direction: 'horizontal',
          loop: true,
          slidesPerView: 'auto',
          paginationClickable: true,
          pagination: {
            el: '.swiper-pagination'
          },
          autoplay: {
            delay: 5000
          }
          // centeredSlides: true,
          // observer: true,
          // observeParents: true
          // on: {
          //   click () {
          //     // const realIndex = this.realIndex
          //     // let url = result.data.graphicAdvertisementMap['JLX-SC-001'][realIndex].jumpUrl
          //     // _this.$jumpUrl(url)
          //   }
          // }
        })
        console.log(mySwiper3)
      })
    }
  }
}
</script>
<style lang="scss">
@import 'src/static/swiper.min.css';
//顶部轮播图
#home{
  .sowingMap{
    position: relative;
    // background-color: #f9f9f9;
    overflow: hidden;
  .swiper-container {
    width: 375px;
  }
  .swiper-container .swiper-wrapper {
    .swiper-slide{
      height:201px;
      width: 375px;
      img{
        height: 100%;
        width: 375px;
      }
    }
  }
  .swiper-pagination-bullet{
    background: rgba(255,255,255,0.50);
  }
  .swiper-pagination-bullet-active{
     background: #FFFFFF;
  }
  .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
    bottom: 25px;
  }
 }
 .homecontent{
     position: relative;
     .brand{
       z-index: 1000;
       position: relative;
       width: 345px;
       padding: 10px 0;
      //  height: 345px;
      //  top: -40px;
      //  left: 50%;
      //  transform: translateX(-50%);
       margin: -20px auto 0;
       background: #FFFFFF;
       box-shadow: 0 1px 15px 0 rgba(205,170,173,0.30);
       border-radius: 3px;
       .title{
        //  padding-top: 20px;
         display:flex;
         flex-direction: row;
         align-items: center;
         padding-left: 40px;
         .col-fl{
           background-image: linear-gradient(-135deg, #FF6C33 0%, #FC4C13 47%, #FF0014 100%);
           box-shadow: 0 1px 8px 0 rgba(255,0,16,0.70);
           border-radius: 12px;
           width: 60px;
           height: 60px;
          }
          .col-fr{
            margin-left: 15px;
            p{
              text-align: left;
              &:nth-of-type(1){
                font-family: PingFang-SC-Medium;
                font-size: 17px;
                color: #3C3C3E;

              }
              &:nth-of-type(2){
                margin-top: 5px;
                font-size: 13px;
                color: #A5A5A8;
              }
            }
          }
        }
        .desc{
          text-indent: 25px;
          font-size: 12px;
          color: #A5A5A8;
          margin: 17px 0 0 0;
          padding: 0 15px;
          text-align: justify;
          line-height: 20px;
        }
     }
     .reservation{
       margin-top: 20px;
       .title{
         padding-left: 15px;
         margin-bottom: 11px;
         font-family: PingFang-SC-Medium;
         font-size: 16px;
         color: #3C3C3E;
       }
       .list{
         height: 75px;
         border: 1px solid #F6F6F6;
         display: flex;
         flex-direction: row;
         align-items: center;
        //  margin: 25px 0;
         justify-content: space-between;
         padding: 0 15px;

         .reservation_col_fl{
           display: flex;
           flex-direction: row;
           align-items: center;
            .photo{
              width: 50px;
              height: 50px;
              border-radius: 50%;
            }
            .desc{
              margin-left: 10px;
              .desc_first_rol{
                font-family: PingFang-SC-Medium;
                font-size: 13px;
                color: #3C3C3E;
              }
              .desc_second_rol{
                align-items: center;
                margin-top: 8px;
                display: flex;
                flex-direction: row;
                .location{
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  margin-right:15px;
                }
                span{
                  font-size: 12px;
                  color: #A5A5A8;
                }
              }

            }
         }
         .reservation_col_fr{
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #3C3C3E;
         }

       }
     }
     .shop{
        margin-top: 20px;
       .title{
         padding-left: 15px;
         margin-bottom: 11px;
         font-family: PingFang-SC-Medium;
         font-size: 16px;
         color: #3C3C3E;
       }
       .list{
          height: 90px;
          border: 1px solid #F6F6F6;
          display: flex;
          flex-direction: row;
          align-items: center;
          //  margin: 25px 0;
          // justify-content: space-between;
          padding: 0 15px;
          .photo{
            width: 60px;
            height: 60px;
          }
          .desc{
            margin-left: 10px;
            .desc_first_rol{
              font-size: 13px;
              color: #3C3C3E;
              margin-bottom: 6px;
            }
            .desc_second_rol{
              font-size: 12px;
              color: #A5A5A8;
              margin-bottom: 6px;
            }
            .desc_third_rol{
              font-size: 12px;
              color: #A5A5A8;
            }
          }
       }
     }
     .footer{
       display: flex;
       justify-content: center;
       align-items: center;
       width: 100%;
       height: 60px;
       font-size: 10px;
       color: #A5A5A8;
       letter-spacing: 0;
       img{
         display: inline-block;
         margin-right: 3px;
       }
     }

 }

}
</style>
