<template>
  <div class='coupon'>
    <div class="taboption">
     <van-tabs v-model="active"  title-active-color="#FF0014" title-inactive-color="#A5A5A8" :line-width="60" :line-height="5">
        <van-tab v-for="(item,index) in tablist" :key="index">
                <div class="tab-title" slot="title" @click="checktab(item,index)">{{ item.title }}</div>
        </van-tab>
     </van-tabs>
     </div>
     <div class="content">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh" >
        <van-list
          v-model="loading"
          :immediate-check="false"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
        <div class="banlancelist_item" v-for="(item,index) in list" :key="index" v-bind:class="active ===0 ? 'banlancelist_item':'disabled'">

          <div class="banlancelist_item_fl">
            <div class="money">{{item.money}}</div>
            <div class="desc">
                <p>{{item.title}}</p>
                <p>{{item.desc}}</p>
                <p>{{item.desc1}}</p>
            </div>
          </div>
          <div class="banlancelist_item_fr">
             <span>去使用</span>
          </div>
        </div>
        </van-list>
      </van-pull-refresh>
     </div>
  </div>
</template>

<script>
import { PullRefresh, List, Cell, tab, tabs } from 'vant'
export default {
  name: '',
  data () {
    return {
      isLoading: false,
      loading: false,
      finished: false,
      active: 0,
      tablist: [
        {
          title: '未使用',
          category: 1
        },
        {
          title: '已过期',
          category: 2
        }
      ],
      list: [
        {
          money: '100',
          title: '新用户优惠券',
          desc: '2019-02-28 到期',
          desc1: '仅可用于健身套餐购买',
          flag: 1
        },
        {
          money: '100',
          title: '新用户优惠券',
          desc: '2019-02-28 到期',
          desc1: '仅可用于健身套餐购买',
          flag: 0
        }
      ]
    }
  },
  created () {},
  computed: {},
  watch: {},
  mounted () {},
  methods: {
    checktab (item, index) {
      this.active = index
    },
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
    'van-cell': Cell,
    'van-tab': tab,
    'van-tabs': tabs
  }
}
</script>
<style>
   .van-pull-refresh{
     min-height: 100%;
   }
</style>
<style lang='scss' scoped>
    .coupon{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #FAFAFA;
        .taboption{
            position: absolute;
            top: 0;
            height: 45px;
            width: 100%;

        }
        .content{
            position: absolute;
            top: 45px;
            left: 0;
            right: 0;
            bottom: 0;
            overflow-y: scroll;
            -webkit-overflow-scrolling: touch;
            .banlancelist_item{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-between;
                width: 345px;
                height: 100px;
                margin: 0 auto 15px;
                background: url('~@/assets/coupon.png');
                background-size:345px 100px;
                .banlancelist_item_fl{
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    .money{
                        margin-left: 30px;
                        font-family: PingFangSC-Semibold;
                        font-size: 22px;
                        color: #FF7900;
                    }
                    .desc{
                        margin-left: 15px;
                        p{
                            &:nth-of-type(1){
                              font-size: 16px;
                              color: #3C3C3E;
                              margin-bottom: 6px;
                            }
                            &:nth-of-type(2){
                                font-size: 12px;
                                color: #3C3C3E;
                                margin-bottom: 4px;
                            }
                            &:nth-of-type(3){
                                font-size: 12px;
                                color: #A5A5A8;
                            }
                        }
                    }
                }
                .banlancelist_item_fr{
                    margin-right:30px;
                    span{
                        display: inline-block;
                        border: 1px solid #FF0014;
                        border-radius: 12px;
                        width: 60px;
                        height: 25px;
                        line-height: 25px;
                        font-size: 13px;
                        color: #FF0014;
                        text-align: center;
                    }

                }

            }
            .disabled{
                .banlancelist_item_fl{
                    .money{
                      color: #A5A5A8;
                    }
                    .desc{
                      p{
                        &:nth-of-type(1){
                            color: #A5A5A8;
                        }
                        &:nth-of-type(2){
                        color: #A5A5A8;
                        }
                        &:nth-of-type(3){
                            color: #A5A5A8;
                        }
                      }
                    }
                }
                .banlancelist_item_fr{
                    span{
                      border: 1px solid #A5A5A8;
                      color: #A5A5A8;
                    }

                }
            }
        }
    }
</style>
