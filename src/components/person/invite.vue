<template>
  <div class='invite'>
      <div class="headimg">
         <img src="@/assets/celebrity/banner4.png">
      </div>
      <div class="rules">
          <h1 class="title">邀请规则说明</h1>
          <div class="desc">打开百度知道App，在【我】，选择“邀请好友“页面。选择“分享”，通过聊天工具分享给自己的好友。好友打开链接，识别图中二维码，输入手机号，可领取红包。好友下载“百度知道App”，登入账号。</div>
      </div>
      <div class="price">
          <h1 class="title">邀请成功奖励</h1>
          <div class="desc"> 即日起至1月31日，你只需邀请10名好友加入爱回扣成为有效会员，就可领取50元现金+1000爱币奖励，邀请3个好友可获得10元现金+200爱币奖励！</div>
      </div>
      <div class="bottombtn">
          <span class="btn">邀请好友</span>
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

  },
  components: {

  }
}
</script>

<style lang='scss' scoped>
   .headimg{
       width: 375px;
       height: 140px;
       img{
           width: 100%;
           height: 100%;
       }
   }
   .rules{
      width: 345px;
      padding-bottom: 14px;
      border-bottom: 1px solid #F6F6F6;
      margin: 15px auto 30px;
      .title{
          font-size: 17px;
          color: #3C3C3E;
          line-height: 16px;
      }
      .desc{
          line-height: 16px;
          margin-top: 5px;
          font-size: 12px;
          color: #A5A5A8;
      }

   }
   .price{
        width: 345px;
        margin: 0 auto;
        .title{
            line-height: 16px;
            font-size: 17px;
            color: #3C3C3E;
        }
        .desc{
             line-height: 16px;
            margin-top: 5px;
            font-size: 12px;
            color: #A5A5A8;
        }
   }
    .bottombtn{
        //  background: #FFFFFF;
        //  box-shadow: 0 -2px 8px 0 rgba(205,170,173,0.12);
         position: fixed;
         display: flex;
         flex-direction: row;
         align-items: center;
         justify-content: center;
         bottom: 61px;
         left: 0;
         height: 62px;
         width: 100%;
         .btn{
            background-image: linear-gradient(-135deg, #FF7900 0%, #FC4C13 47%, #FF0014 100%);
            box-shadow: 0 3px 8px 0 rgba(255,0,16,0.30);
            border-radius: 37.5px;
            display: inline-block;
            width: 315px;
            height: 50px;
            line-height: 50px;
            font-size: 16px;
            color: #FFFFFF;
            text-align: center;
         }
       }
</style>
