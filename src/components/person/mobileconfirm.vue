<template>
  <div class='confirmmobile'>
     <div class="mobileimage">
       <img src="@/assets/mobile.png">
     </div>
     <div>
       <p class="desc1">
        <span>你当前的手机号{{mobilenumber}}</span>
       </p>
       <p class="desc2">
         <span>更换手机号之后，其他个人信息不变</span>
       </p>
     </div>
     <div class="btn_rol">
       <span class="btn" @click="changemobile">更换手机号</span>
     </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      mobilenumber: ''
    }
  },
  created () {
    this.mobilenumber = this.$route.query.number
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {
    changemobile () {
      this.$router.push({
        path: '/sendcode',
        query: {
          number: this.mobilenumber
        }
      })
    }
  },
  components: {

  }
}
</script>

<style lang='scss'>
   .confirmmobile{
     position: fixed;
     top: 0;
     bottom: 0;
     left: 0;
     right: 0;
     background: #FAFAFA;
     .mobileimage{
       margin-top: 46px;
       text-align: center;
       img{
         width: 72px;
         height: 72px;
       }
     }
     .desc1{

       margin-top: 26px;
       font-size: 16px;
       color: #3C3C3E;
       text-align: center;
     }
     .desc2{
      margin-top: 10px;
      font-size: 12px;
      color: #A5A5A8;
      text-align: center;
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
