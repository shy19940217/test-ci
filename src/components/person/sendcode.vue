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
        height: 50px;
        background: white;
        font-size: 16px;
        color: #FF0014;
    }
    .van-field__label{
        font-size: 16px;
        color: #3C3C3E;
        max-width: 85px;
    }
   .van-cell-group{
       background: #FAFAFA;
   }
   .van-field__body input{
       height: 20px;
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
           border: 1px solid #D3D1D1;
           border-radius: 3px;
           display: flex;
           flex-direction: row;
           align-items: center;
           background: #ffffff;
           margin: 20px auto 0;
           width: 335px;
           height: 52px;
           padding: 5px 8px;
           margin-top: 8px;
       }
      .btn_rol{
       margin-top: 40px;
       text-align: center;
       .btn{
         display: inline-block;
         background-image: linear-gradient(-135deg, #FF0014 0%, #FC4C13 47%, #FF7900 100%);
         box-shadow: 0 3px 8px 0 rgba(255,0,16,0.30);
         font-size: 16px;
         color: #FFFFFF;
         text-align: center;
         width: 315px;
         height: 50px;
         line-height: 50px;
         border-radius: 25px;
       }
     }
   }
</style>
