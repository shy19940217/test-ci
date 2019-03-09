<template>
  <div class='beautify'>
     <div class="beautifylist" v-for="(item,index) in beautifylist" :key="index">
        <div class="beautifylist_col_fl">
           <img class="photo" :src="item.imageUrl">
           <div class="content">
              <div class="title">{{item.title}}</div>
              <div class="desc">
                  <span>服务时长：</span>
                  <span>{{item.servicetime}}</span>
              </div>
              <div class="money">
                  <span>{{item.money}}</span>
              </div>
           </div>
        </div>
        <div class="beautifylist_col_fr">
            <span class="fillbtn">预约</span>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      beautifylist: [
        {
          imageUrl: require('@/assets/celebrity/person2.png'),
          title: '明星普拉提大器械课程',
          servicetime: '90分钟',
          money: '￥2000'
        },
        {
          imageUrl: require('@/assets/celebrity/person2.png'),
          title: '明星普拉提大器械课程',
          servicetime: '90分钟',
          money: '￥2000'
        },
        {
          imageUrl: require('@/assets/celebrity/person2.png'),
          title: '明星普拉提大器械课程',
          servicetime: '90分钟',
          money: '￥2000'
        }
      ]
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

<style lang='scss'>
   @import "src/styles/index.scss";
  .beautifylist{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 690px;
    height: 226px;
    margin: 0 auto 80px;
    background: #FFFFFF;
    box-shadow: 0 4px 20px 0 rgba(205,170,173,0.20);
    border-radius: 6px;
    .beautifylist_col_fl{
        margin-left: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
      .photo{
          width: 140px;
          height: 130px;
      }
      .content{
          margin-left: 30px;
          .title{
              font-size: 32px;
              color: #3C3C3E;
              margin-bottom: 15px;
          }
          .desc{
              font-size: 24px;
              color: #A5A5A8;
              margin-bottom: 15px;
          }
          .money{
             font-family: PingFangSC-Semibold;
             font-size: 32px;
             color: #FF7900;
          }
      }
    }
    .beautifylist_col_fr{
        margin-right: 30px;
    }

  }
</style>
