<template>
  <div class='task'>
        <div class="banlancelist_item" v-for="(item,index) in list" :key="index">
          <div class="banlancelist_item_fl">
            <p>{{item.title}}</p>
            <p>{{item.desc}}</p>
          </div>
          <div class="banlancelist_item_fr">
            <!-- <p>{{item.time}}</p> -->
            <p v-bind:class="item.flag ==1 ? 'add':'reduce'">
              <span v-if="item.flag ==0">-</span>
              <span v-if="item.flag ==1">+</span>
              <span>{{item.money}}</span>
            </p>
          </div>
        </div>
        <div class="bottombtn">
          <span class="btn" @click="exchangeprice()">积分兑换好礼</span>
        </div>

  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      isLoading: false,
      loading: false,
      finished: false,
      list: [
        {
          title: '每日登录',
          location: '西溪银泰店',
          desc: '+10积分',
          time: '02-28 10:00',
          flag: 1,
          money: '120'
        }, {
          desc: '+150积分/课',
          title: '每日上课',
          location: '西溪银泰店',
          time: '02-28 10:00',
          flag: 0,
          money: '120'
        },
        {
          desc: '+200积分/人',
          title: '成功邀请好友',
          location: '西溪银泰店',
          time: '02-28 10:00',
          flag: 1,
          money: '120'
        }
      ]
    }
  },
  created () {},
  computed: {},
  watch: {},
  mounted () {},
  methods: {
    exchangeprice () {
      this.$router.push({
        path: '/exchange'
      })
    }
  }
}
</script>

<style lang='scss' scoped>
   .banlancelist_item{
         border-bottom: 1px solid #F6F6F6;
         width: 345px;
         margin: 0 auto;
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         align-items: center;
         height: 76px;
         .banlancelist_item_fl{
           text-align: left;
           p{
             &:nth-of-type(1){
               font-family: PingFang-SC-Medium;
               font-size: 16px;
               color: #3C3C3E;
               margin-bottom: 8px;
             }
              &:nth-of-type(2){
               font-size: 13px;
               color: #A5A5A8;
             }
           }
         }
          .banlancelist_item_fr{
           text-align: right;
         .add{
           font-family: PingFangSC-Semibold;
           font-size: 16px;
           color: #0065FF;
         }
         .reduce{
           font-family: PingFangSC-Semibold;
           font-size: 16px;
           color: #FF7900;
         }
         }
       }
       .bottombtn{
         background: #FFFFFF;
         box-shadow: 0 -2px 8px 0 rgba(205,170,173,0.12);
         position: fixed;
         display: flex;
         flex-direction: row;
         align-items: center;
         justify-content: center;
         bottom: 0;
         left: 0;
         height: 62px;
         width: 100%;
         .btn{
            background-image: linear-gradient(-135deg, #FF7900 0%, #FC4C13 47%, #FF0014 100%);
            box-shadow: 0 3px 8px 0 rgba(255,0,16,0.30);
            border-radius: 37.5px;
            display: inline-block;
            width: 250px;
            height: 38px;
            line-height: 38px;
            font-size: 16px;
            color: #FFFFFF;
            text-align: center;
         }
       }
</style>
