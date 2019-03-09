<template>
  <div class='setting'>
    <div class="tabcolumn tabcolumn1">
       <div class="tabcolumn_fl">
         <span>头像</span>
       </div>
       <div class="tabcolumn_fr">
           <img  class="headimage" src="@/assets/celebrity/person2.png">
       </div>
    </div>
    <div class="tabcolumn">
       <div class="tabcolumn_fl">
         <span>昵称</span>
       </div>
       <div class="tabcolumn_fr" @click="showdialog()">{{nickname}}</div>
    </div>
    <div class="tabcolumn">
       <div class="tabcolumn_fl">
         <span>等级</span>
       </div>
       <div class="tabcolumn_fr">VIP 2</div>
    </div>
    <div class="tabcolumn" @click="gopage()">
       <div class="tabcolumn_fl">
         <span>手机号码</span>
       </div>
       <div class="tabcolumn_fr tabcolumn_fr1">
           <span>{{mobilenumber}}</span>
           <img class="jinatou" src="@/assets/icon/jiantou.png">

       </div>
    </div>
    <div class="tabcolumn">
       <div class="tabcolumn_fl">
         <span>性别</span>
       </div>
       <div class="tabcolumn_fr tabcolumn_fr1" @click="choosesex()">
           <span>男</span>
           <img class="jinatou" src="@/assets/icon/jiantou.png">
       </div>
    </div>
    <div>
    <van-dialog
      v-model="isShow"
      :before-close="beforeClose"
      show-cancel-button
      show-confirm-button
    >
      <van-field
        v-model="nickname"
        placeholder="请输入昵称"
      />
     </van-dialog>
    </div>
    <van-popup v-model="show" position="bottom" :overlay="false" >
       <van-picker
        show-toolbar
        title=""
        :columns="columns"
        @cancel="onCancel"
        @confirm="onConfirm"
        />
    </van-popup>
  </div>
</template>

<script>
import { Picker, Popup, Dialog, Field } from 'vant'
import Vue from 'vue'
Vue.use(Dialog)
export default {
  name: '',
  data () {
    return {
      username: '',
      nickname: 'struggle',
      show: false,
      isShow: false,
      mobilenumber: '13067392837',
      columns: ['男', '女']
    }
  },
  created () {
    this.$toast('提示文案')
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {
    showdialog () {
      // debugger
      this.isShow = true
    },
    beforeClose (action, done) {
      // debugger
      if (action === 'confirm') {
        setTimeout(done, 1000)
      } else {
        done()
      }
    },
    gopage () {
      this.$router.push({
        path: '/changemobile',
        query: {
          number: this.mobilenumber
        }
      })
    },
    choosesex () {
      this.show = true
    },
    onConfirm (value, index) {
      this.show = false
    },
    onCancel () {
    //   Toast('取消');
      this.show = false
    }
  },
  components: {
    'van-picker': Picker,
    'van-popup': Popup,
    Dialog,
    'van-field': Field
  }
}
</script>
<style>
  .van-picker__toolbar{
    height: 100px;
    line-height: 100px;
    font-size: 28px;
  }

</style>
<style lang='scss' scoped>
   .setting{
       position: fixed;
       top: 0;
       bottom: 0;
       left: 0;
       right: 0;
       background: rgb(250,250,250);
     .tabcolumn{
       background: #ffffff;
       height: 120px;
       display: flex;
       flex-direction: row;
       align-items: center;
       justify-content: space-between;
       border-top: 2px solid #F6F6F6;
       .tabcolumn_fl{
           display: flex;
           flex-direction: row;
           align-items: center;
           margin-left: 32px;
           span{
             margin-left: 10px;
             font-size: 32px;
             color: #393939;
           }
       }
       .tabcolumn_fr{
          margin-right: 68px;
          display: flex;
          flex-direction: row;
          align-items: center;
          .headimage{
               width: 96px;
               height: 96px;
               border-radius: 50%;
           }
           .jinatou{
               margin-left: 20px;
               width: 12px;
           }
       }
       .tabcolumn_fr1{
          margin-right: 35px;
       }
    }
    .tabcolumn1{
        background: #ffffff;
        height: 150px;
    }
   }
</style>
