<template>
  <div class='order'>
     <div class="headimg">
        <img src="@/assets/celebrity/banner1.png">
     </div>
     <div class="content">
        <div class="detail">
            <div class="title">
                <span class="title_fl">猫眼美甲套餐</span>
                <span class="title_fr">￥120</span>
            </div>
            <div class="desc">
                <img class="img" src="@/assets/icon/time.png">
                <span class="time">服务时间：60分钟</span>
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
               <span class="title">服务门店</span>
               <div class="choose" @click="goServceStore()" v-bind:class="serviceStore === '请选择服务门店'?'':'checked'">
                   <span>{{serviceStore}}</span>
                   <img class="img" src="@/assets/icon/jiantou.png">
               </div>
           </div>
           <div class="option_item">
               <span class="title">服务人员</span>
               <div class="choose" @click="goServicePerson()" v-bind:class="servicePerson === '请选择服务人员'?'':'checked'">
                   <span>{{servicePerson}}</span>
                   <img class="img" src="@/assets/icon/jiantou.png">
               </div>
           </div>
        </div>
     </div>
      <span class="btn" @click="order()">立即预约</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: '',
  data () {
    return {

    }
  },

  created () {

  },
  computed: {
    ...mapState('course', ['time', 'serviceStore', 'servicePerson'])
  },

  mounted () {},
  methods: {
    ...mapMutations('course', ['updateTime', 'updateServicePerson', 'updateServiceStore']),
    goOrderTime () {
      this.$router.push({
        path: '/choosedate'
      })
    },
    goServceStore () {
      this.$router.push({
        path: '/choosestore'
      })
    },
    goServicePerson () {
      if (this.serviceStore === '请选择服务门店') {
        this.$toast('请先选择服务门店')
      } else {
        this.$router.push({
          path: '/chooseperson'
        })
      }
    },
    order () {
      if (this.time === '请选择预约时间') {
        this.$toast('预约时间不能为空')
      } else if (this.serviceStore === '请选择服务门店') {
        this.$toast('服务门店不能为空')
      } else if (this.servicePerson === '请选择服务人员') {
        this.$toast('服务人员不能为空')
      } else {
        this.$router.push({
          path: '/course'
        })
      }
    }
  },
  components: {

  }
}
</script>

<style lang='scss' scoped>
   .order{
       .headimg{
           width: 100%;
           height: 180px;
           img{
             width: 100%;
             height: 100%;
           }
       }
       .content{
           width: 345px;
           margin: 0 auto;
          .detail{
              padding-bottom: 15px;
              border-bottom: 1px solid #F6F6F6;
           .title{
               margin: 20px 0 10px 0;
               .title_fl{
                  font-family: PingFang-SC-Medium;
                  font-size: 19px;
                  color: #3C3C3E;
               }
               .title_fr{
                  font-family: PingFangSC-Semibold;
                  font-size: 17px;
                  color: #FF7900;
               }
           }
           .desc{
               .img{
                   width: 9px;
                   height: 9px;
               }
               .time{
                   font-size: 12px;
                   color: #A5A5A8;
               }
           }
         }
         .option{
             margin-top: 15px;
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
