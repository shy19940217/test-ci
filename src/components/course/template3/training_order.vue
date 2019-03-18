<template>
  <div class='traning_order'>
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
    <div class="option">
        <div class="option_item">
            <span class="title">预约时间</span>
            <div class="choose" @click="goOrderTime()"  v-bind:class="time === '请选择预约时间'?'':'checked'">
                   <span class="choose_content">{{time}}</span>
                   <img class="img" src="@/assets/icon/jiantou.png">
            </div>
        </div>
        <div class="option_item">
            <span class="title">服务项目</span>
            <div class="choose" @click="goServceStore()" v-bind:class="serviceProject === '请选择服务项目'?'':'checked'">
                   <span>{{serviceProject}}</span>
                   <img class="img" src="@/assets/icon/jiantou.png">
            </div>
        </div>
    </div>
     <span class="btn" @click="order()">立即预约</span>
  </div>
</template>

<script>
import StarRate from 'vue-cute-rate'
import { mapState } from 'vuex'
export default {
  name: '',
  data () {
    return {

    }
  },
  created () {},
  computed: {
    ...mapState('course', ['time', 'serviceProject'])
  },
  watch: {},
  mounted () {},
  methods: {
    goOrderTime () {
      this.$router.push({
        path: '/choosedate'
      })
    },
    order () {
      if (this.time === '请选择预约时间') {
        this.$toast('预约时间不能为空')
      } else if (this.serviceProject === '请选择服务项目') {
        this.$toast('服务项目不能为空')
      } else {
        this.$router.go(-1)
      }
    },
    goServceStore () {
      this.$router.push({
        path: '/chooseproject'
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
    .traning_order{
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
        .option{
            width: 333px;
            margin: 15px auto 0;
            //  margin-top: 15px;
            .option_item{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 15px;
                .title{
                    font-size: 16px;
                    color: #393939;
                }
                .choose{
                    background: #FFFFFF;
                    border: 1px solid #D3D1D1;
                    border-radius: 3px;
                    width: 261px;
                    height:36px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    span{
                      margin-left: 15px;
                      font-size: 14px;
                      color: #A5A5A8;
                    }
                    .img{
                        margin-right: 15px;
                        width: 8px;
                        height: 12px;
                    }
                }
                .checked{
                    span{
                        color: #3C3C3E;
                    }
                }

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
