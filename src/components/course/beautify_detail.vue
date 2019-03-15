<template>
  <div class='beautiful_detail'>
     <div class="headimg">
        <img src="@/assets/celebrity/banner1.png">
     </div>
     <div class="content">
      <div class="head_title">
        <div class="first">
          <span>猫眼美甲套餐</span>
        </div>
        <div class="second">
          <img class="img" src="@/assets/icon/time.png">
          <span>服务时间：60分钟</span>
        </div>
        <div class="third">
          如果你问我今年的美甲什么元素最好看，我会毫不犹豫地告诉你—猫眼美甲！猫眼美甲是今年最火最热的美甲，很多人都喜欢变着花样来做猫眼美甲。
        </div>
      </div>
      <div class="store_detail">
        <div class="first">
          <span>门店详情</span>
        </div>
        <div class="second">
           <span>西柚美学（西溪银泰店）</span>
        </div>
        <div class="third">
           <span>弘德路和双龙街交叉口西溪银泰2号楼509-510</span>
           <img class="img" src="@/assets/icon/location.png">
        </div>
      </div>
      <div class="serviceperson">
          <div class="desc">
            <span>服务人员</span>
          </div>
          <div class="list">
            <img class="img" src="@/assets/celebrity/person1.png">
            <div class="detail">
              <div class="first">
                <span class="first_fl">小美</span>
                <span class="first_fr">服务次数：886次</span>
              </div>
              <div class="second">
                <star-rate :value="2.5" type="star1" font-size="11" :disabled="true"
                :star-half="true"
                active-color="#FF7900"
                />
                <span class="scope">2.5分</span>
              </div>
            </div>
          </div>
      </div>
      <div class="order">
         <div class="title">预约须知</div>
          <div class="content">请遵守美甲师的指导及预约的预约程序。</div>
      </div>
       <div class="detail">

      </div>
      <div class="footerbtn">
       <span class="time">￥120</span>
       <span class="btn" @click="order()">预约</span>
       </div>
     </div>
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
    ...mapMutations('course', ['updateTime', 'updateServicePerson', 'updateServiceStore', 'updateChooseDateObj', 'updatechoosePersonObj', 'updatechooseStoreObj']),
    order () {
      this.updateTime('请选择预约时间')
      this.updateServicePerson('请选择服务人员')
      this.updateServiceStore('请选择服务门店')
      let obj = {
        active: null,
        name: ''
      }
      this.updateChooseDateObj(obj)
      this.updatechoosePersonObj(obj)
      this.updatechooseStoreObj(obj)
      this.$router.push({
        path: '/beautify_order'
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
   .beautiful_detail{
     .headimg{
       height: 180px;
       width: 100%;
       img{
         width: 100%;
         height: 100%;
       }
     }
     .content{
        width: 333px;
        margin: 0 auto;
        .head_title{
          margin-top: 20px;
          padding-bottom:15px;
          border-bottom: 1px solid #F6F6F6;
          .first{
            font-family: PingFang-SC-Medium;
            font-size: 19px;
            color: #3C3C3E;
          }
          .second{
            margin-top: 10px;
            font-size: 12px;
            color: #A5A5A8;
            display: flex;
            flex-direction: row;
            align-items: center;
            color: #A5A5A8;
            margin-top: 10px;
            line-height: 16px;
            .img{
              display: inline-block;
              width: 9px;
              height: 9px;
              margin-right: 6px;
            }
            span{
                 font-size: 12px;
             }
          }
          .third{
             margin-top: 10px;
             font-family: PingFang-SC-Medium;
             font-size: 12px;
             color: #A5A5A8;
             line-height: 16px;

          }
        }
        .store_detail{
          margin-top: 16px;
          padding-bottom: 15px;
          border-bottom: 1px solid #F6F6F6;
          .first{
            font-family: PingFang-SC-Medium;
            font-size: 16px;
            color: #3C3C3E;
          }
          .second{
            margin-top: 10px;
            font-size: 12px;
            color: #3C3C3E;
          }
          .third{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 5px;
            font-size: 12px;
            color: #A5A5A8;
            img{
              width: 13px;
              height: 15px;
              margin-left: 10px;
            }
          }
        }
        .serviceperson{
          margin-top: 15px;
          padding-bottom: 10px;
          .desc{
            font-family: PingFang-SC-Medium;
            font-size: 16px;
            color: #3C3C3E;
          }
          .list{
            display: flex;
            flex-direction: row;
            align-items: center;
            border-bottom: 1px solid #F6F6F6;
            padding: 10px 0;
            .img{
              width: 50px;
              height: 50px;
              border-radius: 50%;
            }
            .detail{
              margin-left: 15px;
              .first{
                margin-bottom: 8px;
                .first_fl{
                  font-size: 12px;
                  color: #3C3C3E;
                }
                .first_fr{
                  font-size: 11px;
                  color: #A5A5A8;
                }
              }
              .second{
                font-size: 11px;
                color: #FF7900;
              }
            }
          }
        }
        .order{
          margin-top: 15px;
          padding-bottom: 15px;
          border-bottom: 1px solid #F6F6F6;
          .title{
            font-family: PingFang-SC-Medium;
            font-size: 16px;
            color: #3C3C3E;
          }
          .content{
            margin-top: 10px;
            font-size: 12px;
            color: #A5A5A8;
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
          font-family: PingFangSC-Semibold;
          font-size: 19px;
          color: #FF7900;
          margin-left: 20px;
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
