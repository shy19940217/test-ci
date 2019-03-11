<template>
  <div class='record'>
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
            <p>{{item.time}}</p>
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
        </van-list>
        </van-pull-refresh>
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
  created () {},
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
</style>
