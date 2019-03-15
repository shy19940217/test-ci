<template>
  <div class='order'>
     <div class="headimg">
        <img src="@/assets/celebrity/banner1.png">
     </div>
     <div class="content">
        <div class="title">
            <div class="name">明星普拉提大器械</div>
            <div class="time">02月21日  18:30-19:30</div>
        </div>
        <div class="address">
           <div class="name">门店：西柚美学（西溪银泰店）</div>
           <div class="desc">
               <span>弘德路和双龙街交叉口西溪银泰2号楼509-510</span>
               <img src="@/assets/icon/location.png">
            </div>
        </div>
        <div class="teacher">
          <div class="teacher_fl">
              <div class="name">老师：陶飞飞</div>
               <div class="desc">擅长：减脂、增肌 证书：AASFP 专业体适能教练，获得高级私人体适能教练证书。</div>
          </div>
          <div class="teacher_fr">
              <img class="img" src="@/assets/celebrity/person1.png">
          </div>
        </div>
     </div>
     <span class="btn" @click="order()">立即预约</span>

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
    order () {
      this.$toastinfo('预约成功')
      this.$router.go(-1)
    }
  },
  components: {

  }
}
</script>

<style lang='scss' scoped>
    .order{
       .headimg{
         width: 100%;
         height: 180px;
         img{
            width: 100%;
            height: 100%;
         }
       }
       .content{
           width: 345px;
           margin: 0 auto;
           .title{
               padding-bottom: 15px;
               border-bottom: 1px solid #F6F6F6;
               .name{
                   font-family: PingFang-SC-Medium;
                   font-size: 19px;
                   color: #3C3C3E;
                   margin: 20px 0 10px 0;
               }
               .time{
                   font-size: 16px;
                   color: #A5A5A8;
                   text-align: justify;
               }
           }
           .address{
               padding-bottom: 15px;
               border-bottom: 1px solid #F6F6F6;
               .name{
                  margin: 15px 0 5px 0;
                  font-size: 12px;
                  color: #3C3C3E;
                  text-align: justify;
               }
               .desc{
                 display: flex;
                 flex-direction: row;
                 align-items: center;
                 font-size: 12px;
                 color: #A5A5A8;
                 text-align: justify;
                   img{
                    width: 11px;
                    height: 12px;
                    margin-left: 11px;
                   }
               }
           }
           .teacher{
               display: flex;
               flex-direction: row;
               align-items: center;
               justify-content: space-between;
               .teacher_fl{
                   width: 261px;

                   .name{
                       margin: 15px 0 5px 0;
                      font-size: 12px;
                      color: #3C3C3E;
                      text-align: justify;
                   }
                   .desc{
                       font-size: 12px;
                       color: #A5A5A8;
                       line-height: 16px;
                   }
               }
                .teacher_fr{
                    margin-right: 10px;
                    margin-top: 18px;
                  .img{
                      width: 50px;
                      height: 50px;
                      border-radius: 50%;
                  }
               }
           }
       }
       .btn{
           background-image: linear-gradient(-135deg, #FF7900 0%, #FC4C13 47%, #FF0014 100%);
           box-shadow: 0 6px 15px 0 rgba(255,0,16,0.30);
           width: 150px;
           height: 38px;
           line-height: 38px;
           font-size: 16px;
           color: #FFFFFF;
           text-align: center;
           position: fixed;
           bottom: 26px;
           left: 50%;
           transform: translateX(-50%);
           border-radius: 19px;
       }
    }
</style>
