<template>
  <div class='banlance'>
     <div class="headertitle">
       <h1 class="desc1">
          810.00
       </h1>
       <h2 class="desc2">账户余额（元）</h2>
     </div>
     <div class="banlancelist">
       <van-pull-refresh v-model="isLoading" @refresh="onRefresh" >
         <van-list
          v-model="loading"
          :immediate-check="false"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
        <div class="banlancelist_item" v-for="(item,index) in list" :key="index">
          <div class="banlancelist_item_fl">
            <p>{{item.title}}</p>
            <p>{{item.location}}</p>
          </div>
          <div class="banlancelist_item_fr">
            <p>{{item.time}}</p>
            <p v-bind:class="item.flag ==1 ? 'add':'reduce'">
              <span v-if="item.flag ==0">-</span>
              <span v-if="item.flag ==1">+</span>
              <span>{{item.money}}</span>
            </p>
          </div>
        </div>
        </van-list>
        </van-pull-refresh>

     </div>
  </div>
</template>

<script>
import { PullRefresh, List, Cell } from 'vant'
export default {
  name: '',
  data () {
    return {
      isLoading: false,
      loading: false,
      finished: false,
      list: [
        {
          title: '猫眼美甲套餐',
          location: '西溪银泰店',
          time: '02-28 10:00',
          flag: 1,
          money: '120'
        }, {
          title: '猫眼美甲套餐',
          location: '西溪银泰店',
          time: '02-28 10:00',
          flag: 0,
          money: '120'
        },
        {
          title: '猫眼美甲套餐',
          location: '西溪银泰店',
          time: '02-28 10:00',
          flag: 1,
          money: '120'
        }, {
          title: '猫眼美甲套餐',
          location: '西溪银泰店',
          time: '02-28 10:00',
          flag: 1,
          money: '120'
        }, {
          title: '猫眼美甲套餐',
          location: '西溪银泰店',
          time: '02-28 10:00',
          flag: 1,
          money: '120'
        }, {
          title: '猫眼美甲套餐',
          location: '西溪银泰店',
          time: '02-28 10:00',
          flag: 1,
          money: '120'
        }, {
          title: '猫眼美甲套餐',
          location: '西溪银泰店',
          time: '02-28 10:00',
          flag: 1,
          money: '120'
        }, {
          title: '猫眼美甲套餐',
          location: '西溪银泰店',
          time: '02-28 10:00',
          flag: 1,
          money: '120'
        }, {
          title: '猫眼美甲套餐',
          location: '西溪银泰店',
          time: '02-28 10:00',
          flag: 1,
          money: '120'
        }, {
          title: '猫眼美甲套餐',
          location: '西溪银泰店',
          time: '02-28 10:00',
          flag: 1,
          money: '120'
        }
      ]
    }
  },
  created () {
    // this.finished = false
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {
    onRefresh () {
      this.isLoading = true
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        // this.count++;
      }, 500)
    },
    onLoad () {
      // debugger
      this.loading = true
      // this.finished = true
      // 异步更新数据
      setTimeout(() => {
        this.list = this.list.concat(this.list)
        // 加载状态结束
        this.loading = false
        this.finished = false

        // 数据全部加载完成
        // if (this.list.length >= 40) {
        //   this.finished = true
        // }
      }, 500)
    }
  },
  components: {
    'van-pull-refresh': PullRefresh,
    'van-list': List,
    'van-cell': Cell
  }
}
</script>
<style>
 .van-pull-refresh{
   min-height: 100%;
   /* overflow-y: scroll;
   -webkit-overflow-scrolling: touch;  */
 }
</style>
<style lang='scss' scoped>
   .banlance{
     position: fixed;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     background: white;
     .headertitle{
       position: absolute;
       top:0;
       left: 0;
       text-align: center;
       height: 274px;
       width: 100%;
       border: 1px solid transparent;
       background-image: linear-gradient(-135deg, #FF0014 0%, #FC4C13 47%, #FF7900 100%);
       .desc1{
          margin-top: 70px;
          font-family: PingFangSC-Semibold;
          font-size: 60px;
          color: #FFFFFF;
       }
       .desc2{
         font-size: 28px;
         color: #FFFFFF;
         margin-top: 10px;
       }
     }
     .banlancelist{
       position: absolute;
       top: 274px;
       bottom: 0;
       left: 0;
       right: 0;
       overflow-y: scroll;
       -webkit-overflow-scrolling: touch;
       .banlancelist_item{
         border-bottom: 2px solid #F6F6F6;
         width: 690px;
         margin: 0 auto;
         display: flex;
         flex-direction: row;
         justify-content: space-between;
         align-items: center;
         height: 152px;
         .banlancelist_item_fl{
           text-align: left;
           p{
             &:nth-of-type(1){
               font-family: PingFang-SC-Medium;
               font-size: 32px;
               color: #3C3C3E;
               margin-bottom: 15px;
             }
              &:nth-of-type(2){
               font-size: 26px;
               color: #A5A5A8;
             }
           }
         }
          .banlancelist_item_fr{
           text-align: right;
           p{
             &:nth-of-type(1){
               font-size: 26px;
               color: #A5A5A8;
               margin-bottom: 15px;
             }
           }
         }
         .add{
           font-family: PingFangSC-Semibold;
           font-size: 32px;
           color: #0065FF;
         }
         .reduce{
           font-family: PingFangSC-Semibold;
           font-size: 32px;
           color: #FF7900;
         }
       }
     }
   }
</style>
