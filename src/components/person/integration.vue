<template>
  <div class='integgration'>
     <div class="headertitle">
       <h1 class="desc1">
          666
       </h1>
       <h2 class="desc2">我的积分</h2>
     </div>
     <div class="taboption">
       <van-tabs v-model="active"  title-active-color="#FF0014" title-inactive-color="#A5A5A8" :line-width="60" :line-height="5">
        <van-tab v-for="(item,index) in tablist" :key="index">
                <div class="tab-title" slot="title" @click="checktab(item,index)">{{ item.title }}</div>
        </van-tab>
     </van-tabs>
     </div>
     <div class="content">
        <router-view></router-view>
     </div>
  </div>
</template>

<script>
import { tab, tabs } from 'vant'
export default {
  name: '',
  data () {
    return {
      active: 0,
      tablist: [
        {
          title: '积分任务',
          linkurl: '/person/task',
          category: 1
        },
        {
          title: '积分记录',
          linkurl: '/person/record',
          category: 2
        }
      ]
    }
  },
  created () {
    this.initrouter()
    // this.finished = false
  },
  // watch: {
  //   '$route' () {
  //     this.initRouter()
  //   }
  // },
  computed: {},
  watch: {},
  mounted () {},
  methods: {
    initrouter () {
      let path = this.$route.path
      if (path === '/integration/task') {
        this.active = 0
      } else if (path === '/integration/record') {
        this.active = 1
      }
    },
    checktab (item, index) {
      if (index === 0) {
        this.$router.replace({
          path: '/integration/task'
        })
      } else if (index === 1) {
        this.$router.replace({
          path: '/integration/record'
        })
      }
    }
  },
  components: {
    'van-tab': tab,
    'van-tabs': tabs
  }
}
</script>
<style>
     /* .van-tabs__wrap{
       height: 90px;
   }
   .van-tabs, .van-tabs--line{
     height: 60px !important;
   }
   .van-tabs--line .van-tabs__wrap{
     height: 90px;
   }
   .van-tab, .van-tab--active{

   }
   .tab-title{
     font-size: 32px !important;
     padding: 29px 0 25px 0;
   }
   .van-tab--active{
     color: #FF0014;
   }
   .van-ellipsis{
     display: inline-block;
     font-size: 32px;
     text-align: center;
   } */
</style>
<style lang='scss' scoped>
   .integgration{
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
       height: 137px;
       width: 100%;
       border: 1px solid transparent;
       background: #FF7900;
       .desc1{
          margin-top: 35px;
          font-family: PingFangSC-Semibold;
          font-size: 30px;
          color: #FFFFFF;
       }
       .desc2{
         font-size: 14px;
         color: #FFFFFF;
         margin-top: 5px;
       }
     }
     .taboption{
        position:absolute;
        top: 137px;
        left: 0;
        height: 50px;
        width: 100%;
      }
      .content{
        background: #FAFAFA;
        position: absolute;
        top: 187px;
        bottom: 0;
        left: 0;
        right: 0;
        overflow-y: scroll;
        -webkit-overflow-scrolling: touch;
      }
   }
</style>
