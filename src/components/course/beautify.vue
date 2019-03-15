<template>
  <div class='beautify'>
     <div class="beautifylist" v-for="(item,index) in beautifylist" :key="index" @click="godetail()">
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
            <span class="fillbtn" v-on:click.stop="goorder(item)">预约</span>
        </div>
     </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
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
    ...mapMutations('course', ['updateTime', 'updateServicePerson', 'updateServiceStore', 'updateChooseDateObj', 'updatechoosePersonObj', 'updatechooseStoreObj']),
    goorder (item) {
      this.updateTime('请选择预约时间')
      this.updateServicePerson('请选择服务人员')
      this.updateServiceStore('请选择服务门店')
      let obj = {
        active: null,
        name: ''
      }
      this.updateChooseDateObj(obj)
      this.updatechoosePersonObj(obj)
      this.updatechooseStoreObj(obj)
      // this.updatechoosePersonObj(obj)
      this.$router.push({
        path: '/beautify_order',
        query: {
          from: 'list'
        }
      })
    },
    godetail () {
      this.$router.push({
        path: '/beautify_detail'
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
          .desc{
              font-size: 12px;
              color: #A5A5A8;
              margin-bottom: 8px;
          }
          .money{
             font-family: PingFangSC-Semibold;
             font-size: 16px;
             color: #FF7900;
          }
      }
    }
    .beautifylist_col_fr{
        margin-right: 15px;
    }

  }
</style>
