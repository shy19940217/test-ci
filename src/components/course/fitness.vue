<template>
  <div class='beautify'>
     <div class="beautifylist" v-for="(item,index) in beautifylist" :key="index" @click="godetail()">
        <div class="beautifylist_col_fl">
           <img class="photo" :src="item.imageUrl">
           <div class="content">
              <div class="title">{{item.title}}</div>
              <!-- <div class="desc">
                  <span>服务时长：</span>
                  <span>{{item.servicetime}}</span>
              </div> -->
              <div class="lesson">
                  <span>累计上课：</span>
                  <span>{{item.money}}</span>
              </div>
           </div>
        </div>
        <div class="beautifylist_col_fr">
            <span class="fillbtn" v-on:click.stop="goorder(item)">预约</span>
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
    godetail () {
      this.$router.push({
        path: '/training_detail'
      })
    },
    goorder () {
      this.$router.push({
        path: '/training_order'
      })
    }
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
    width: 345px;
    height: 113px;
    margin: 0 auto 15px;
    background: #FFFFFF;
    box-shadow: 0 2px 10px 0 rgba(205,170,173,0.20);
    border-radius: 3px;
    .beautifylist_col_fl{
        margin-left: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
      .photo{
          width: 70px;
          height: 65px;
      }
      .content{
          margin-left: 15px;
          .title{
              font-size: 16px;
              color: #3C3C3E;
              margin-bottom: 8px;
          }
          .lesson{
            font-size: 12px;
            color: #A5A5A8;
          }
      }
    }
    .beautifylist_col_fr{
        margin-right: 15px;
    }

  }
</style>
