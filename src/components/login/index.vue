<template>
  <div class='login'>
    <div class="head-img">
      <div><img :src="resData.headImg" alt=""></div>
      <div><span>{{resData.name}}</span></div>
    </div>
    <div class="form">
      <div class="form-item" ref="phoneFocus">
        <img class="icon-left" :src="phoneIcon" alt="">
        <label for=""></label>
        <input v-model="form.phone" type="text" placeholder="请输入您的手机号" @focus="handelFocus('phoneFocus')" @blur="handelBlur('phoneFocus')">
      </div>
      <div class="form-item" ref="codeFocus">
        <img class="icon-left" :src="codeIcon" alt="">
        <label for=""></label>
        <input v-model="form.code" class="small-input" type="text" placeholder="请输入验证码" @focus="handelFocus('codeFocus')"  @blur="handelBlur('codeFocus')">
        <div class="getCode" @click="getCode">
          <span class="red-code" v-if="!codeStatus">获取验证码</span>
          <span class="second" v-if="codeStatus">{{timeNum}}s</span>
          </div>
      </div>
      <div class="form-button">
        <button @click="onSubmit">确认绑定</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
export default {
  name: 'login',
  data () {
    return {
      resData: {
        name: '微信会员',
        headImg: require('@/assets/logo.png')
      },
      codeStatus: false,
      timeNum: 60,
      form: {
        phone: '',
        code: ''
      }
    }
  },
  created () {},
  computed: {
    codeIcon () {
      return this.form.code.length > 0 ? require('@/assets/icon/code_checked.jpg') : require('@/assets/icon/code_unchecked.jpg')
    },
    phoneIcon () {
      return this.form.phone.length > 0 ? require('@/assets/icon/phone_checked.jpg') : require('@/assets/icon/phone_unchecked.jpg')
    }
  },
  watch: {},
  mounted () {},
  methods: {
    // 获取焦点黑色线条
    handelFocus (item) {
      this.$refs[item].style.borderBottomColor = '#3C3C3E'
    },
    // 失去焦点灰色线条
    handelBlur (item) {
      this.$refs[item].style.borderBottomColor = '#D3D1D1'
    },
    getCode () {
      this.codeStatus = true
      this.timeInterval('60')
      Toast('获取验证码成功')
    },
    onSubmit () {
      Toast('提交跳转')
    },
    // 60s倒计时过后做..
    doSomething () {
      this.codeStatus = false
      return false
    },
    // 倒计时
    timeInterval (allTime) {
      // let flag = 1
      let i = allTime
      setInterval(() => {
        i = i - 1
        this.timeNum = i
        if (i === 0) {
          this.doSomething()
        }
      }, 1000)
    }
  },
  components: {
  }
}
</script>

<style lang='scss' scoped>
  .login{
    padding: 0 37.5px;
    .head-img{
      div{
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #3C3C3E;
        img{
          width:65px;
          height: 65px;
          border-radius: 25%;
          overflow: hidden;
          margin-bottom: 15px;
          margin-top: 35px;
        }
      }
    }
    .form{
      width: 100%;
      font-family: PingFangSC-Regular;
      font-size: 15px;
      margin-top: 30px;
      .form-item{
        margin-bottom: 15px;
        padding: 15px 0;
        border-bottom:1px solid #D3D1D1;
        display: flex;
        flex-direction: row;
        align-items: center;
        input{
          display: flex;
          flex: 4;
          width: 80%;
          height:24px;
          line-height: 24px;
          padding: 0 3px 0 3px;
          color: #3C3C3E;
          letter-spacing: 0;
          border: none;
        }
        .icon-left{
          display: flex;
          flex: 0;
          margin-left: 10px;
          width: 13px;
        }
        .getCode{
          display: flex;
          flex: 2;
          width: 100%;
          text-align: right;
          font-size: 16px;
          letter-spacing: 0;
          .red-code{
            color: #FF0014;
            display: inline-block;
            width: 100%;
          }
          .second{
            color: #A5A5A8;
            display: inline-block;
            width: 100%;
          }
        }
      }
      .form-button{
        margin-top: 40px;
        background-image: linear-gradient(135deg, #FF7900 0%, #FC4C13 47%, #FF0014 100%);
        box-shadow: 0 6px 15px 0 rgba(255,0,16,0.30);
        border-radius: 25px;
        height: 50px;
        font-size: 16px;
        line-height: 50px;
        text-align: center;
        button{
          width: 100%;
          color: #FFFFFF;
          background: none;
          border: none;
        }
      }
    }
  }
</style>
