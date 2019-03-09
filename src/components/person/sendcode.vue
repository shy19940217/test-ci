<template>
  <div class='sendcode'>
    <van-cell-group>
        <van-field
            class="username"
            v-model="username"
            placeholder="请输入新手机号"
            label="新手机号："
            left-icon="contact"
        />
         <van-field
            class="sms"
            v-model="sms"
            center
            clearable
            left-icon="contact"
            label="验证码："
            placeholder="请输入短信验证码"
        >
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
        </van-field>
    </van-cell-group>
     <div class="btn_rol">
       <span class="btn" @click="changemobile">更换手机号</span>
     </div>

  </div>
</template>

<script>
import { Field, CellGroup, Button } from 'vant'
export default {
  name: '',
  data () {
    return {
      username: '',
      sms: ''

    }
  },
  created () {},
  computed: {},
  watch: {},
  mounted () {},
  methods: {

  },
  components: {
    'van-field': Field,
    'van-cell-group': CellGroup,
    'van-button': Button
  }
}
</script>
<style>
    .van-button{
        height: 100px;
        background: white;
        font-size: 32px;
        color: #FF0014;
    }
    .van-field__label{
        font-size: 32px;
        color: #3C3C3E;
        max-width: 170px;
    }
   .van-cell-group{
       background: #FAFAFA;
   }
   .van-field__body input{
       height: 40px;
   }
</style>
<style lang='scss' scoped>
   .sendcode{
       position: fixed;
       top: 0;
       bottom: 0;
       right: 0;
       left: 0;
       background: #FAFAFA;
       .username, .sms{
           border: 2px solid #D3D1D1;
           border-radius: 6px;
           display: flex;
           flex-direction: row;
           align-items: center;
           background: #ffffff;
           margin: 40px auto 0;
           width: 670px;
           height: 105px;
           padding: 11px 15px;
           margin-top: 15px;
       }
      .btn_rol{
       margin-top: 80px;
       text-align: center;
       .btn{
         display: inline-block;
         background-image: linear-gradient(-135deg, #FF0014 0%, #FC4C13 47%, #FF7900 100%);
         box-shadow: 0 6px 15px 0 rgba(255,0,16,0.30);
         font-size: 32px;
         color: #FFFFFF;
         text-align: center;
         width: 630px;
         height: 100px;
         line-height: 100px;
         border-radius: 50px;
       }
     }
   }
</style>
