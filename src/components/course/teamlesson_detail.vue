<template>
  <div class='teamlesson_detail'>
     <div class="head_img">
        <img class="img" src="@/assets/celebrity/banner1.png">
     </div>
     <div class="content">
      <div class="head_detail">
        <div class="title">
          <span>普拉提</span>
          <span>已约 10/12</span>
        </div>
        <div class="sub_title">
          <div class="sub_title_fl">
            <img class="img" src="@/assets/icon/time.png">
            <span class="time">60分钟</span>
          </div>
          <div class="sub_title_fr">
            <span class="difficult">难度</span>
             <van-rate
                :readonly="true"
                v-model="value"
                :size="15"
                :count="5"
                color="#07c160"
                void-color="#ceefe8"
                icon="http://uniubi-front-end.oss-cn-hangzhou.aliyuncs.com/uni-ubi/light.png"
                void-icon="http://uniubi-front-end.oss-cn-hangzhou.aliyuncs.com/uni-ubi/dark.png"

                />
          </div>
        </div>
        <div class="desc">
          普拉提首先是一种运动。它主要是锻炼人体小肌肉群，维持和改善外观正常活动姿势、达到身体平衡。
        </div>
        <div class="desc1">
          <div class="desc1_item">
            <span class="field_type">适合人群：</span>
            <span class="field_desc">长期伏案 工作 久坐人员</span>
          </div>
          <div class="desc1_item">
            <span class="field_type">功效作用：</span>
            <span class="field_desc">强化小腿肌肉，减少腹部脂肪，美化线条</span>
          </div>
          <div class="desc1_item">
            <span class="field_type">注意事项：</span>
            <span class="field_desc">不宜饱腹练习，量力而行</span>
          </div>
        </div>
      </div>
      <div class="stores_detail">
        <div class="title">
          <span>门店详情</span>
        </div>
        <div class="content">
           <p class="name">西柚美学（西溪银泰店）</p>
           <p class="address">
             <span>弘德路和双龙街交叉口西溪银泰2号楼509-510</span>
             <img src="@/assets/icon/location.png">
           </p>
        </div>
      </div>
      <div class="teacher_intro">
        <div class="title">
          <span>教师介绍</span>
        </div>
        <div class="teacher_detail">
          <div class="teacher_detail_fl">
            <div class="title">CoCo老师</div>
            <div class="desc">擅长：减脂、增肌 证书：AASFP 专业体适能教练，获得高级私人体适能教练证书。</div>
          </div>
          <div class="teacher_detail_fr">
            <img class="img" src="@/assets/celebrity/person1.png">
          </div>
        </div>
      </div>
      <div class="booking_info">
        <div class="title">
          预约须知
        </div>
        <div class="content">请遵守教练的指导及课程的预约程序。</div>
      </div>
     </div>
     <div class="footerbtn">
       <span class="time">02月28日 12:00</span>
       <span class="btn" @click="order()">预约</span>
     </div>
  </div>
</template>

<script>
import { Rate } from 'vant'
export default {
  name: '',
  data () {
    return {
      value: 2
    }
  },
  created () {},
  computed: {},
  watch: {},
  mounted () {},
  methods: {
    order () {
      this.$router.push({
        path: '/teamlesson_order'
      })
    }
  },
  components: {
    'van-rate': Rate
  }
}
</script>

<style lang='scss' scoped>
  .teamlesson_detail{
      .head_img{
         width: 375px;
         height: 180px;
         img{
           width: 100%;
           height: 100%;
         }
      }
      .content{
        width: 333px;
        margin: 20px auto 0;
        .head_detail{
          padding-bottom: 10px;
          border-bottom: 1px solid#F6F6F6;
           .title{
             span{
               &:nth-of-type(1){
                font-family: PingFang-SC-Medium;
                font-size: 19px;
                color: #3C3C3E;
               }
               &:nth-of-type(2){
                  display: inline-block;
                  margin-left: 8px;
                  font-family: PingFang-SC-Medium;
                  font-size: 12px;
                  color: #3C3C3E;
               }
             }
           }
           .sub_title{
             margin-top: 10px;
             display: flex;
             flex-direction: row;
             justify-content: space-between;
             align-items: center;
             .sub_title_fl{
               display: flex;
               flex-direction: row;
               align-items: center;
               .img{
                 display: inline-block;
                 width: 9px;
                 height: 9px;
               }
               .time{
                 margin-left: 5px;
                 font-size: 12px;
                 color: #A5A5A8;
               }
             }
             .sub_title_fr{
               display: flex;
               flex-direction: row;
               align-items: center;
               .difficult{
                 margin-right: 5px;
                 font-size: 12px;
                 color: #A5A5A8;
               }
             }
           }
           .desc{
             line-height: 16px;
             margin-top: 10px;
             font-size: 12px;
             color: #A5A5A8;
             text-align: justify;
           }
           .desc1{
             margin-top: 15px;
             .desc1_item{
               margin-bottom: 5px;
               .field_type{
                 font-size:12px;
                 color: #A5A5A8;
                 text-align: justify;
               }
               .field_desc{
                 font-size: 12px;
                  color: #000000;
                  line-height: 16px;
               }
             }
           }
        }
        .stores_detail{
          padding-bottom: 15px;
          border-bottom: 1px solid #F6F6F6;
          .title{
            font-family: PingFang-SC-Medium;
            font-size: 16px;
            color: #3C3C3E;
            margin: 15px 0 10px 0;
          }
          .content{
            .name{
              font-size: 12px;
              color: #3C3C3E;
              margin-bottom: 5px;
            }
            .address{
               font-size: 12px;
               color: #A5A5A8;
               text-align: justify;
               img{
                 width: 11px;
                 height: 12px;
                 margin-left: 11px;
               }
            }
          }
        }
        .teacher_intro{
          padding-bottom: 15px;
          border-bottom: 1px solid #F6F6F6;
          .title{
            font-family: PingFang-SC-Medium;
            font-size: 16px;
            color: #3C3C3E;
            margin: 15px 0 10px 0;
          }
          .teacher_detail{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .teacher_detail_fl{
              .title{
                font-size: 12px;
                color: #3C3C3E;
              }
              .desc{
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #A5A5A8;
                line-height: 16px;
                text-align: justify;
              }
            }
            .teacher_detail_fr{
               margin-right: 10px;
              .img{
                width: 50px;
                height: 50px;
                border-radius: 50%;
              }
            }
          }
        }
        .booking_info{
            padding-bottom: 15px;
            border-bottom: 1px solid #F6F6F6;
            .title{
              font-family: PingFang-SC-Medium;
              font-size: 16px;
              color: #3C3C3E;
              margin: 15px 0 10px 0;
            }
            .content{
              font-size: 12px;
              color: #A5A5A8;
              text-align: justify;
            }
        }
      }
      .footerbtn{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 62px;
        background: #FFFFFF;
        box-shadow: 0 -4px 15px 0 rgba(205,170,173,0.12);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .time{
          margin-left: 20px;
          font-size: 16px;
          color: #3C3C3E;
          text-align: justify;
        }
        .btn{
          margin-right: 20px;
          background-image: linear-gradient(-135deg, #FF7900 0%, #FC4C13 47%, #FF0014 100%);
          box-shadow: 0 6px 15px 0 rgba(255,0,16,0.30);
          width: 150px;
          height: 36px;
          line-height: 36px;
          font-size: 16px;
          color: #FFFFFF;
          text-align: center;
          border-radius: 19px;
        }
      }
  }
</style>
