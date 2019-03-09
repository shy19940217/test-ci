<template>
  <div id="search">
    <!-- 搜索 -->
    <div class="search">
        <input
            class="ipt"
            v-model="iptValue"
            @input="searchGoods"
            type="search"
            @keyup="searchGoods"
            placeholder="搜索"
          />
          <img
            src="@/assets/sousuo.png"
            @click="searchDetail"
            class="searchicon"
          />
    </div>
    <div class="homecontent">
       <div class="content_item" v-for="(item,index) in datalist" :key="index">
        <div class="title">
            <span class="desc">{{item.title}}</span>
            <span class="more" @click="more(item.title)">更多</span>
        </div>
        <div :class="item.title=='旅游攻略'|| item.title=='网红模卡'||item.title=='热门活动' ? 'one-column':'two-column'">
          <div class="wanghong" v-if="item.title=='网红模卡'" v-for="(item1,index) in item.list" :key="index">
             <div class="fl">
                <img v-lazy="item1.imgurl">
             </div>
             <div class="fr">
                <div class="first">
                   <span class="name">{{item1.name}}</span>
                   <div class="label">
                       <span v-for="(item2,index1) in item1.labellist" :key="index1">
                           {{item2.label}}
                       </span>
                   </div>
                </div>
                <div class="second">
                    <div class="gender">
                        <img src="@/assets/celebrity/gender.png">
                        <span>{{item1.gender}}</span>
                    </div>
                    <div class="age">
                        <img src="@/assets/celebrity/age.png">
                        <span>{{item1.age}}</span>
                    </div>
                </div>
                <div class="third">
                    <span>粉丝数量：</span>
                    <span>{{item1.fansnumber}}</span>
                </div>
             </div>
          </div>
          <div v-if="item.title =='旅游攻略'||item.title=='热门活动'||item.title=='种草社区'" class="column_item"  v-for="(item1,index1) in item.list" :key="index1">
             <img class="img" v-lazy="item1.imgurl">
             <div class="desc">
                <span>{{item1.title}}</span>
             </div>
          </div>
        </div>
       </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import Swiper from 'swiper'
Vue.use(VueLazyload, {})
export default {
  name: 'home',
  data () {
    return {
      iptValue: '',
      datalist: [
        {
          title: '网红模卡',
          list: [{
            imgurl: require('@/assets/celebrity/person1.png'),
            name: 'BiggerMeng',
            labellist: [
              {
                label: '美妆'
              }, {
                label: '时尚'
              }, {
                label: '旅游'
              }
            ],
            gender: '男',
            age: '18岁',
            fansnumber: '150万'
          }, {
            imgurl: require('@/assets/celebrity/person2.png'),
            name: 'BiggerMeng',
            labellist: [
              {
                label: '美妆'
              }, {
                label: '时尚'
              }, {
                label: '旅游'
              }
            ],
            gender: '男',
            age: '18岁',
            fansnumber: '150万'
          }]
        },
        {
          title: '热门活动',
          list: [{
            imgurl: require('@/assets/celebrity/banner1.png')
          }]
        },
        {
          title: '种草社区',
          list: [{
            imgurl: require('@/assets/community/product1.png'),
            title: '网红同款！抹白防晒喷雾夏天出游晒不怕...!'
          }, {
            imgurl: require('@/assets/community/product2.png'),
            title: '网红同款！抹白防晒喷雾夏天出游晒不怕...!'
          }, {
            imgurl: require('@/assets/community/product3.png'),
            title: '网红同款！抹白防晒喷雾夏天出游晒不怕...!'
          }, {
            imgurl: require('@/assets/community/product4.png'),
            title: '网红同款！抹白防晒喷雾夏天出游晒不怕...!'
          }]
        },
        {
          title: '旅游攻略',
          list: [{
            imgurl: require('@/assets/celebrity/banner1.png'),
            title: '跟着大V去旅游!'
          }]
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
    this.iptValue = this.$route.query.iptValue
  },
  components: {
    Swiper
  },
  methods: {
    more (title) {
      if (title === '旅游攻略') {
        this.$router.push({
          path: '/strategy'
        })
      } else if (title === '种草社区') {
        this.$router.push({
          path: '/community'
        })
      } else if (title === '网红模卡') {
        this.$router.push({
          path: '/celebrity'
        })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
//顶部轮播图
#search{
  .search{
    position: relative;
    padding:15px 14px 16px 14px;
    .ipt{
      padding-left:40px;
      width:345px;
      height:40px;
      background:#ffffff;
      box-shadow:0px 2px 5px 0px rgba(0, 0, 0, 0.1);
      border-radius:7px;
      outline:none;
    }
    .searchicon{
     position: absolute;
     top: 50%;
     transform: translateY(-50%);
     left: 32px;
     width: 13px;
     height: 13px;
    }
  }
 .homecontent{
     padding:28px 14px 68px 14px;
     .content_item{
         margin-bottom: 35px;
        .title{
           display: flex;
           flex-direction: row;
           align-items:center;
           margin-bottom: 19px;
           justify-content: space-between;
           .desc{
              font-family: PingFang-SC-Bold;
              font-size: 20px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              color: #333333;
           }
           .more{
              font-family: PingFang-SC-Regular;
              font-size: 14px;
              font-weight: normal;
              font-stretch: normal;
              letter-spacing: 0px;
              color: #999999;
           }
        }
        .one-column{
            width:100%;
            .column_item{
                width:100%;
                margin-bottom:15px;
                img{
                  width:100%;
                }
            }
            .wanghong{
                display: flex;
                flex-direction: row;
                padding: 15px;
                box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.05);
                border-radius: 8px;
                margin-bottom: 10px;
                .fl{
                    img{
                        width:70px;
                        height:70px;
                        border-radius: 50%;
                    }
                }
                .fr{
                    margin-left: 16px;
                    .first{
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                        .name{
                            font-family: PingFang-SC-Bold;
                            font-size: 15px;
                            line-height: 20px;
                            color: #333333;
                        }
                        .label{
                            margin-left:20px;
                            span{
                                text-align: center;
                                display: inline-block;
                                margin-right:4px;
                                width: 30px;
                                height: 15px;
                                background-color: rgb(255,244,248);
                                border-radius: 2px;
                                line-height: 15px;
                                border: solid 1px #ff3170;
                                font-family: PingFang-SC-Medium;
                                font-size: 10px;
                                color: #ff3170;
                            }
                        }
                    }
                    .second{
                        margin-top: 20px;
                        display: flex;
                        flex-direction: row;
                        // justify-content: center;
                        align-items: center;
                       .gender{

                        img{
                            width:14px;
                            height:12px;
                        }
                        span{
                            display: inline-block;
                            margin-left: 6px;
                            font-size: 12px;
                            color: #333333;
                        }
                       }
                       .age{
                         margin-left: 20px;
                         img{
                            width:14px;
                            height:12px;
                        }
                        span{
                            display: inline-block;
                            margin-left: 6px;
                            font-size: 12px;
                            color: #333333;
                        }
                       }
                    }
                    .third{
                       margin-top: 20px;
                        display: flex;
                        flex-direction: row;
                        // justify-content: center;
                        align-items: center;
                        span{
                            font-family: PingFang-SC-Medium;
                            font-size: 14px;
                            color: #333333;
                            &:nth-of-type(2){
                                margin-left: 6px;
                            }
                        }
                    }
                }

            }

        }
        .two-column{
            border-bottom: 1px solid  #cecece;
            padding-bottom: 20px;
            display: flex;
            flex-direction: row;
            overflow-x: scroll;
            // width:105px;
            .column_item{
                width:155px;
                margin-right:15px;
                img{
                 width:155px;
                 height:150px;
                }
                .desc{
                  margin-top:10px;
                  font-family: PingFang-SC-Medium;
                  font-size: 14px;
                  font-weight: normal;
                  font-stretch: normal;
                  line-height: 20px;
                  letter-spacing: 0px;
                  color: #333333;
                }
            }
        }
     }
 }

}
</style>
