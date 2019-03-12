<template>
  <div class="wrap">
    <van-tabbar v-if="isMain" v-model="active" @change="change" class="bottom">
      <!-- <div class="circle"></div> -->
      <van-tabbar-item class="tabitem" v-for="t in list" :key="t.name" :url="t.link">
      <img class="imgicon" v-if="t.active==active"  :src="t.imgsrcChecked">
      <img class="imgicon" v-else  :src="t.imgSrc">
      <div :class="t.active==active ?'active':'name'">{{t.name}}</div>
    </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'
// import wxConfig from 'js/mixins/wxConfig.js'
export default {
  name: 'srcMain',
  // mixins: [wxConfig],
  data () {
    return {
      isMain: false,
      active: 0,
      list: [
        {
          icon: 'homePage',
          activeIcon: 'homePageActive',
          name: '首页',
          imgSrc: require('@/assets/icon/home_unchecked.png'),
          imgsrcChecked: require('@/assets/icon/home_checked.png'),
          link: '#/',
          active: 0
        },
        {
          icon: 'communityPage',
          activeIcon: 'communityPageActive',
          name: '课程服务',
          imgSrc: require('@/assets/icon/course_unchecked.png'),
          imgsrcChecked: require('@/assets/icon/course_checked.png'),
          link: '#/course',
          active: 1
        },
        {
          icon: 'communityPage',
          activeIcon: 'communityPageActive',
          name: '我的',
          imgSrc: require('@/assets/icon/my_unchecked.png'),
          imgsrcChecked: require('@/assets/icon/my_checked.png'),
          link: '#/person',
          active: 2
        }
      ]
    }
  },

  computed: {
    activeDate () {
      return this.$route.name + new Date()
    }
  },
  async mounted () {
    // 判断哪些路由显示在某个下面
    // 判断哪些页面显示
    // this.initRouter()
    // await this.initWxConfig()
    this.initShare()
    this.initRouter()
  },
  watch: {
    '$route' () {
      this.initRouter()
    }
  },
  components: {
    'van-tabbar': Tabbar, 'van-tabbar-item': TabbarItem
  },
  methods: {
    change (i) {
      // this.$router.push({path: this.list[i].link})
    },
    initRouter () {
      let path = this.$route.path
      // this.isMain = true
      if (path === '/home') {
        this.active = 0
        this.isMain = true
      } else if (path === '/course/teamlesson' || path === '/course/beautify' || path === '/course/fitness') {
        this.active = 1
        this.isMain = true
      } else if (path === '/person') {
        this.active = 2
        this.isMain = true
      } else {
        this.isMain = false
      }
    },
    initShare () {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.bottom{
  max-width: 375px;
  height:55px;
  position: fixed;
  background-color: #ffffff;
  box-shadow: 0px 1px 10px 0px rgba(206, 206, 206, 0.35);
  bottom: 0;
  left: 0;
  right:0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  .imgicon{
    width:21px;
    height:21px;
  }
  .name{
    margin-top:1px;
    font-size: 10px;
    color: #A5A5A8;
  }
  .active{
    margin-top:1px;
    font-size: 10px;
    color: #ff3170;
  }
}
// ul{
//   background:#f5f5f5;
//   border:1px solid #d7d7d7;
//   width:168px;
//   height:auto;
//   li{
//     font-family:PingFangSC-Regular;
//     font-size:26px;
//     color:#555555;
//     letter-spacing:0;
//     text-align:center;
//     line-height: 80px;
//     height:80px;
//   }
// }
.van-tabbar-item--active{
    color: #666666;
    font-size: 5px;
}
.van-tabbar{

  // padding-bottom: 15px;
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  // justify-content: center;
  z-index: 999 !important;

}
</style>
