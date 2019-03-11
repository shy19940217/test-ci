<template>
  <div class="person">
    <div class="person_info_first">
      <div class="person_info_first_fl">
        <img class="photo" src="@/assets/celebrity/person1.png">
        <div class="desc">
          <p><span>struggle</span></p>
          <p><span>131****2890</span></p>
        </div>
      </div>
      <div class="person_info_first_fr" @click="gosetting()">
        <img class="icon" src="@/assets/icon/setting.png">
      </div>
    </div>
    <div class="person_info_second">
      <div class="person_info_second_item" @click="gopage(5)">
        <p><span>8.00</span></p>
        <p><span>余额</span></p>
      </div>
      <div class="person_info_second_item" @click="gopage(6)">
        <p><span>222</span></p>
        <p><span>积分</span></p>
      </div>
      <div class="person_info_second_item" @click="gopage(7)">
        <p><span>0</span></p>
        <p><span>优惠券</span></p>
      </div>
    </div>
    <div class="tabcolumn" @click="gopage(0)">
       <div class="tabcolumn_fl">
         <img src="@/assets/icon/subscribe.png">
         <span>我的预约</span>
       </div>
       <div class="tabcolumn_fr">
         <img src="@/assets/icon/jiantou.png">
       </div>
    </div>
    <div class="tabcolumn" @click="gopage(1)">
       <div class="tabcolumn_fl">
         <img src="@/assets/icon/invitate.png">
         <span>邀请有礼</span>
       </div>
       <div class="tabcolumn_fr">
         <img src="@/assets/icon/jiantou.png">
       </div>
    </div>
    <div class="tabcolumn" @click="gopage(2)">
       <div class="tabcolumn_fl">
         <img src="@/assets/icon/question.png">
         <span>常见问题</span>
       </div>
       <div class="tabcolumn_fr">
         <img src="@/assets/icon/jiantou.png">
       </div>
    </div>
    <div class="tabcolumn" @click="gopage(3)">
       <div class="tabcolumn_fl">
         <img src="@/assets/icon/kefu.png">
         <span>联系客服</span>
       </div>
       <div class="tabcolumn_fr">
         <img src="@/assets/icon/jiantou.png">
       </div>
    </div>
    <div class="tabcolumn" @click="gopage(4)">
       <div class="tabcolumn_fl">
         <img src="@/assets/icon/aboutus.png">
         <span>关于我们</span>
       </div>
       <div class="tabcolumn_fr">
         <img src="@/assets/icon/jiantou.png">
       </div>
    </div>
  </div>
</template>

<script>
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
    gosetting () {
      this.$router.push({
        path: '/setting'
      })
    },
    gopage (index) {
      var obj = {
        0: '/mysubscribe',
        1: '',
        2: '/question',
        3: '',
        4: '',
        5: '/banlance',
        6: '/integration/task',
        7: '/coupon'
      }
      this.$router.push({
        path: obj[index]
      })
    }
  },
  components: {

  }
}
</script>

<style lang='scss' scoped>
   .person{
     .person_info_first{
       padding: 25px 0;
       display: flex;
       flex-direction: row;
      //  align-items: center;
       justify-content: space-between;
       .person_info_first_fl{
         margin-left: 17px;
           display: flex;
           flex-direction: row;
           align-items: center;
           .photo{
             border-radius: 50%;
             width: 70px;
             height: 65px;
           }
           .desc{
             margin-left: 15px;
             p{
               &:nth-of-type(1){
                 font-family: PingFangSC-Semibold;
                 font-size: 17px;
                 color: #3C3C3E;
               }
               &:nth-of-type(2){
                 margin-top: 8px;
                 font-size: 15px;
                 color: #A5A5A8;
               }
             }

           }
       }
       .person_info_first_fr{
         margin-right: 30px;
         .icon{
           width: 18px;
         }
       }

     }
     .person_info_second{
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 15px;
        .person_info_second_item{
          text-align: center;
          flex: 1;
           p{
               &:nth-of-type(1){
                 font-family: PingFangSC-Semibold;
                 font-size: 17px;
                 color: #3C3C3E;
               }
               &:nth-of-type(2){
                 margin-top: 8px;
                 font-size: 14px;
                 color: #A5A5A8;
               }
             }
        }
    }
    .tabcolumn{
       height: 60px;
       display: flex;
       flex-direction: row;
       align-items: center;
       justify-content: space-between;
       border-top: 1px solid #F6F6F6;
       .tabcolumn_fl{
           display: flex;
           flex-direction: row;
           align-items: center;
           margin-left: 18px;
           img{
             width: 13px;
           }
           span{
             margin-left: 5px;
             font-size: 16px;
             color: #393939;
           }
       }
       .tabcolumn_fr{
          margin-right: 18px;
          img{
            width: 6px;
          }
       }
    }
   }
</style>
