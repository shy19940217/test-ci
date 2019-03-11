<template>
  <div id="app" class="app">
    <div class="progress" :class="{active: showProgress}">
      <div class="progress-bar"></div>
    </div>
    <!-- <transition name="van-slide-right"> -->
      <keep-alive>
      <router-view  v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- </transition> -->
    <bottom></bottom>
  </div>
</template>

<script>
import bottom from '@/common/bottom/index.vue'
// import {getListByCode} from 'common/dictionary'
// import {Toast} from 'vant'
export default {
  name: 'App',
  data () {
    return {
      showProgress: false,
      showView: true,
      isDev: false,
      isNewUsers: false
    }
  },
  components: { bottom },
  mounted () {
    this.showProgress = true
    this.showView = true
    setTimeout(() => {
      this.showProgress = false
    }, 800)
    if (typeof window.WeixinJSBridge === 'object' && typeof window.WeixinJSBridge.invoke === 'function') {
      this.handleFontSize()
    } else {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', this.handleFontSize, false)
      } else if (document.attachEvent) {
        document.attachEvent('onWeixinJSBridgeReady', this.handleFontSize)
      }
    }
    let url = window.location.hash
    if (!/gameResult/.test(url)) {
      if (sessionStorage.getItem('subscribe') === '0') {
        // this.isNewUser()
        this.isNewUsers = true
      }
    }

    // judgeTiem().then(({isTrue, openDate}) => {
    //   if (!isTrue) {
    //     Toast('活动未开始')
    //   }
    // })

    // this.getServiceTel()
  },
  methods: {
    handleFontSize () {
      window.WeixinJSBridge.invoke('setFontSizeCallback', {'fontSize': 0})
      window.WeixinJSBridge.on('menu:setfont', () => {
        window.WeixinJSBridge.invoke('setFontSizeCallback', {'fontSize': 0})
      })
    }
    // async getServiceTel () {
    //   let _data = await getListByCode('custom_service_tel')
    //   this.$base.serviceTel = _data[0].name
    //   this.$base.serviceTime = _data[1].name
    // }
  }
}
</script>
<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  min-height: 100%;
  line-height: 1;
  -webkit-text-size-adjust: 100% !important;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

</style>

<style lang="scss">
// @import '~@/style/productDetail.less';
  /*....progress start....*/
  .progress {
    height: 0.2em;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999;
    width: 375px;
    display: none;
  }
  .progress.active {
    display: block;
  }
  .progress.active .progress-bar {
    animation-duration: 0.8s;
    animation-name: progress-bar-width;
    background-image: linear-gradient(to right, #5ac8fa, #5ac8fa);
    background-size: 24em 0.2em;
    height: 100%;
    position: relative;
  }
  @keyframes progress-bar-width {
    0%, 100% {
      transition-timing-function: cubic-bezier(1, 0, 0.65, 0.85);
    }
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
  /*....progress end....*/

  /*....van-slide-right start....*/
  // @keyframes van-slide-right-enter {
  //   from {
  //     opacity: 0;
  //     -webkit-transform: translate3d(100%,0,0);
  //     transform: translate3d(100%,0,0);
  //   }
  //   to {
  //     opacity: 1;
  //     -webkit-transform: translate3d(0,0,0);
  //     transform: translate3d(0,0,0);
  //   }
  // }
  // @-webkit-keyframes van-slide-right-enter {
  //   from {
  //     opacity: 0;
  //     -webkit-transform: translate3d(100%,0,0);
  //     transform: translate3d(100%,0,0);
  //   }
  //   to {
  //     opacity: 1;
  //     -webkit-transform: translate3d(0,0,0);
  //     transform: translate3d(0,0,0);
  //   }
  // }
  // @keyframes van-slide-right-leave {
  //   from {
  //     opacity: 0;
  //     -webkit-transform: translate3d(0,0,0);
  //     transform: translate3d(0,0,0);
  //   }
  //   to {
  //     opacity: 0;
  //     -webkit-transform: translate3d(-100%,0,0);
  //     transform: translate3d(-100%,0,0);
  //   }
  // }
  // @-webkit-keyframes van-slide-right-leave {
  //   from {
  //     opacity: 0;
  //     -webkit-transform: translate3d(0,0,0);
  //     transform: translate3d(0,0,0);
  //   }
  //   to {
  //     opacity: 0;
  //     -webkit-transform: translate3d(-100%,0,0);
  //     transform: translate3d(-100%,0,0);
  //   }
  // }
  // .van-slide-right-enter-active {
  //   -webkit-animation: van-slide-right-enter .3s both linear;
  //   animation: van-slide-right-enter .3s both linear;
  // }
  // .van-slide-right-leave-active {
  //   -webkit-animation: van-slide-right-leave .3s both linear;
  //   animation: van-slide-right-leave .3s both linear;
  // }
  /*....van-slide-right end....*/

#app {
  width: 100%;
  min-height: 100%;
  padding-bottom:55px;
  /* overflow-x: hidden; */
  font-family: '微软雅黑', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body{
  background: #ffffff;
}

/* loading */
.my-center-loading{
  padding: 10px;
}
.my-center-loading .van-loading{
    width: auto;
}

/* checkbox */
.my-blue-check-list .van-checkbox--checked{
    border-color: #2fb7fc;
    background-color: #2fb7fc;
}
</style>

<style lang="scss" scoped>
.app{
  max-width:375px;margin:0px auto;position: relative;
}

</style>
