<template>
  <div class='exchange'>
      <div class="teamlessonlist" v-for="(item,index) in reservationlist" :key="index">
       <div class="teamlessonlist_col_fl">
         <img class="img" :src="item.imageUrl">
          <div class="desc">
              <p class="first">{{item.title}}</p>
              <p class="second">{{item.desc}}</p>
              <p class="third">{{item.result}}</p>
          </div>
       </div>
       <div class="teamlessonlist_col_fr" @click="confirmexchange()">
          <span v-bind:class="item.flag === 1 ? 'disabled':'canabled'">兑换</span>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      reservationlist: [
        {
          imageUrl: require('@/assets/celebrity/person2.png'),
          title: '商品名称',
          flag: 0,
          desc: '2000积分兑换',
          result: '已兑换123件'
        },
        {
          flag: 0,
          imageUrl: require('@/assets/celebrity/person2.png'),
          title: '商品名称',
          desc: '2000积分兑换',
          result: '已兑换123件'
        },
        {
          flag: 1,
          imageUrl: require('@/assets/celebrity/person2.png'),
          title: '商品名称',
          desc: '2000积分兑换',
          result: '已兑换123件'
        },
        {
          flag: 1,
          imageUrl: require('@/assets/celebrity/person1.png'),
          title: '商品名称',
          desc: '2000积分兑换',
          result: '已兑换123件'
        },
        {
          flag: 1,
          imageUrl: require('@/assets/celebrity/person1.png'),
          title: '商品名称',
          desc: '2000积分兑换',
          result: '已兑换123件'
        }
      ]
    }
  },
  created () {},
  computed: {},
  watch: {},
  mounted () {},
  methods: {
    confirmexchange () {
      this.$dialog.confirm({
        title: '提示',
        message: '您确认用2000积分兑换此商品吗？'
      }).then(() => {
        // on confirm
      }).catch(() => {
        // on cancel
      })
    }
  },
  components: {

  }
}
</script>

<style lang='scss' scoped>
    .exchange{
        padding-top: 15px;
       .teamlessonlist{
           display: flex;
           flex-direction: row;
           justify-content: space-between;
           align-items: center;
           width: 345px;
           height: 113px;
           margin: 0 auto 15px;
           background: #FFFFFF;
           box-shadow: 0 2px 10px 0 rgba(205,170,173,0.20);
           border-radius: 3px;
          .teamlessonlist_col_fl{
              display: flex;
              flex-direction: row;
              align-items: center;
              .img{
                width: 70px;
                height: 65px;
                margin-left: 15px;
              }
              .desc{
                  margin-left: 15px;
                  .first{
                     font-size: 16px;
                     margin-bottom: 6px;
                     color: #3C3C3E;
                  }
                  .second{
                      font-size: 12px;
                      margin-bottom: 4px;
                      color: #3C3C3E;
                  }
                  .third{
                      font-size: 12px;
                      color: #A5A5A8;
                  }
              }
          }
          .teamlessonlist_col_fr{
            margin-right: 15px;
            span{
                 display: inline-block;
                 width: 60px;
                 height: 25px;
                 line-height: 25px;
                 font-size: 13px;
                //  color: #FFFFFF;
                 text-align: center;
                 border-radius: 12px;
            }
            .canabled{
                 background-image: linear-gradient(-135deg, #FF0014 0%, #FC4C13 47%, #FF7900 100%);
                 box-shadow: 0 3px 8px 0 rgba(255,0,16,0.30);
                 color: #FFFFFF;
             }
             .disabled{
               background: #D3D1D1;
               color: #FFFFFF;
             }
          }

       }
    }
</style>
