<template>
  <div class='training_detail'>
    <div class="headimg">
       <div class="content">
           <div class="title">
              <div class="title_fl">
                  <div class="first">
                      <span class="fl">张晓晓</span>
                      <span class="fr">/</span>
                      <span class="fr">服务次数386次</span>
                  </div>
                  <div class="second">
                       <star-rate :value="2.5" type="star1" font-size="11" :disabled="true"
                        :star-half="true"
                        active-color="#FF7900"
                        />
                        <span class="scope">2.5分</span>
                  </div>
              </div>
              <img class="title_fr" src="@/assets/celebrity/person1.png">
           </div>
           <div class="desc">
              国家体育总局一级社会体育指导员，运动营养师导师，哥伦比亚运动营养师，健身营养师导师，私人教练培训导师 亚洲形体健身学院培训导师。
           </div>
       </div>
    </div>
    <div class="box">
        <div class="store_detail">
            <div class="first">
                <span>门店详情</span>
            </div>
            <div class="second">
                <span>西柚美学（西溪银泰店）</span>
            </div>
            <div class="third">
                <span>弘德路和双龙街交叉口西溪银泰2号楼509-510</span>
                <img src="@/assets/icon/location.png">
            </div>
        </div>
        <div class="booking_know">
            <div class="first">
                <span>预约须知</span>
            </div>
            <div class="second">
                <span>请遵守美甲师的指导及预约的预约程序。</span>
            </div>
        </div>
        <div class="graphic_detail">
            <div></div>
            <div></div>
        </div>
    </div>
    <span class="btn" @click="confirm()">立即预约</span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import StarRate from 'vue-cute-rate'
export default {
  name: '',
  data () {
    return {

    }
  },
  created () {},
  computed: {},
  watch: {},
  mounted () {},
  methods: {
    ...mapMutations('course', ['updateTime', 'updateServiceProject']),
    confirm () {
      this.updateTime('请选择预约时间')
      this.updateServiceProject('请选择服务项目')
      this.$router.push({
        path: '/training_order'
      })
    }
  },
  components: {
    StarRate
  }
}
</script>
<style>
  .star-main {
    margin: 0px auto !important;
  }
</style>
<style lang='scss' scoped>
   .training_detail{
       .headimg{
           width: 100%;
           height: 187px;
           background: url('~@/assets/fitness.png') no-repeat;
           background-size: 375px 187px;
           border: 1px solid transparent;
           .content{
               background: #FFFFFF;
               box-shadow: 0 1px 15px 0 rgba(205,170,173,0.30);
               border-radius: 3px;
               width:345px;
            //    height: 162px;
               margin: 15px auto 10px;
               padding-top: 18px;
               padding-bottom: 20px;
               .title{
                   display: flex;
                   flex-direction: row;
                   align-items: center;
                   justify-content: space-between;
                   .title_fl{
                       margin-left: 15px;
                      .first{
                          display: flex;
                          flex-direction: row;
                          align-items: center;
                         .fl{
                             font-family: PingFang-SC-Medium;
                             font-size: 19px;
                             color: #3C3C3E;
                         }
                         .fr{
                             margin-left: 5px;
                             font-size: 12px;
                             color: #A5A5A8;
                         }
                      }
                      .second{
                         margin-top: 12px;
                         .scope{
                              font-size: 11px;
                              color: #FF7900;
                         }
                      }
                   }
                   .title_fr{
                       width: 60px;
                       height: 60px;
                       border-radius: 50%;
                       margin-right: 20px;
                   }
                }
                .desc{
                    width: 315px;
                    margin: 18px auto 0;
                    font-size: 12px;
                    color: #A5A5A8;
                    text-align: justify;
                    line-height: 16px;
                }
           }
       }
       .box{
           width: 333px;
           margin: 0 auto;
       }
       .store_detail{
         padding-bottom: 15px;
         border-bottom: 1px solid #F6F6F6;
         .first{
             margin-top: 10px;
             font-family: PingFang-SC-Medium;
             font-size: 16px;
             color: #3C3C3E;
         }
         .second{
             margin-top: 10px;
             font-size: 12px;
             color: #3C3C3E;
             text-align: justify;
         }
         .third{
             margin-top: 5px;
             font-size: 12px;
             color: #A5A5A8;
             display: flex;
             flex-direction: row;
             align-items: center;
             img{
                 margin-left: 11px;
                 width: 11px;
                 height: 12px;
             }
         }
       }
       .booking_know{
            padding-bottom: 15px;
            border-bottom: 1px solid #F6F6F6;
            .first{
             margin-top: 10px;
             font-family: PingFang-SC-Medium;
             font-size: 16px;
             color: #3C3C3E;
            }
            .second{
                margin-top: 10px;
                font-size: 12px;
                color: #A5A5A8;
                text-align: justify;
            }
       }
       .btn{
           background-image: linear-gradient(-135deg, #FF7900 0%, #FC4C13 47%, #FF0014 100%);
           box-shadow: 0 6px 15px 0 rgba(255,0,16,0.30);
           width: 150px;
           height: 38px;
           line-height: 38px;
           font-size: 16px;
           color: #FFFFFF;
           text-align: center;
           position: fixed;
           bottom: 26px;
           left: 50%;
           transform: translateX(-50%);
           border-radius: 19px;
      }
   }
</style>
