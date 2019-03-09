<template>
  <div class="course">
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
import { Tab, Tabs } from 'vant'
export default {
  name: '',
  data () {
    return {
      active: 0,
      tablist: [
        {
          title: '团体课程',
          linkurl: '/course/teamlesson',
          category: 1
        },
        {
          title: '美容服务',
          linkurl: '/course/beautify',
          category: 2
        },
        {
          title: '健身私教',
          linkurl: '/course/fitness',
          category: 3
        },
        {
          title: '健身私教',
          category: 3
        },
        {
          title: '健身私教',
          category: 3
        },
        {
          title: '健身私教',
          category: 3
        },
        {
          title: '健身私教',
          category: 3
        },
        {
          title: '健身私教',
          category: 3
        }, {
          title: '健身私教',
          category: 3
        }, {
          title: '健身私教',
          category: 3
        }
      ]
    }
  },
  created () {
    if (sessionStorage.getItem('active')) {
      this.active = sessionStorage.getItem('active')
    } else {
      this.active = 0
    }
    this.initRouter()
  },
  components: {
    'van-tabs': Tabs,
    'van-tab': Tab
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {
    initRouter () {
      this.active = 0
      let path = this.tablist[0].linkurl
      this.$router.push({
        path: path
      })
    },
    checktab (item, index) {
      this.active = index
      sessionStorage.setItem('active', this.active)
      this.$router.push({
        path: item.linkurl
      })
    }
  }
}
</script>
<style>
   .van-tabs__wrap{
       height: 90px;
   }
   .van-tabs, .van-tabs--line{
     height: 60px !important;
   }
   .van-tabs--line .van-tabs__wrap{
     height: 90px;
   }
   .van-tab, .van-tab--active{
     /* padding: 29px 0 25px 0; */
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
   }
</style>
<style lang='scss' scoped>
    .course{
           position: fixed;
           top: 0;
           left: 0;
           right: 0;
           bottom: 0;
          //  background: rgb(250,250,250);
           .taboption{
               position:absolute;
               top: 0;
               left: 0;
               height: 100px;
               width: 100%;
           }
           .content{
               position: absolute;
               top: 100px;
               bottom: 0;
               left: 0;
               right: 0;
               overflow-y: scroll;
               -webkit-overflow-scrolling: touch;
           }

    }
   .tabs::-webkit-scrollbar { display: none }
   .tabs{
     display: flex;
     flex-direction: row;
     overflow-x: scroll;
     .tab{
       position: relative;
       height: 45px;
       min-width: 160px;
       padding: 25px 0;
       flex: 1;
       display: flex;
       align-items: center;
       justify-content: center;
       font-size: 32px;
       color: #A5A5A8;
       text-align: center;
      //  .line{
      //    position: absolute;
      //    bottom: 0;
      //    left: 50%;
      //    transform: translateX(-50%);
      //    width: 80px;
      //    height: 5px;
      //    background: #FF0014;
      //  }
      }
      .active{
          position: relative;
          height: 45px;
          min-width: 160px;
          padding: 25px 0;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          color: #FF0014;
          text-align: center;
        // border: 1px solid #FF0014;
          .line{
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 5px;
          background: #FF0014;
        }
      }
   }
</style>
