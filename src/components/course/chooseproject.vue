<template>
  <div class='chooseperson'>
    <div class="personlist" v-for ="(item,index) in list" :key="index" v-bind:class="index == active ? 'active':''" @click="choose(item,index)">
        <img class="img" src="@/assets/celebrity/person1.png">
        <div class="desc">
            <div class="title">
              <span>{{item.name}}</span>
            </div>
            <div class="time">
             <span>时长:</span>
             <span class="scope">{{item.time}}分钟</span>
            </div>
            <div class="money">
             <span>￥</span><span>{{item.money}}</span>
            </div>
        </div>
    </div>
    <span class="btn" @click="confirm()">确认选择</span>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: '',
  data () {
    return {
      name: '',
      active: null,
      list: [{
        name: '核心提升',
        time: '88次',
        money: '20'
      }, {
        name: '核心提升',
        time: '88次',
        money: '20'
      }, {
        name: '核心提升',
        time: '88次',
        money: '20'
      }]
    }
  },
  created () {},
  computed: {
    ...mapState('course', ['serviceProject'])
  },
  watch: {},
  mounted () {},
  methods: {
    ...mapMutations('course', ['updateServiceProject']),
    choose (item, index) {
      this.name = item.name
      this.updateServiceProject(this.name)
      this.active = index
    },
    confirm () {
      if (this.name === '') {
        this.$toast('请选择服务项目')
      } else {
        this.$router.go(-1)
      }
    }
  },
  components: {

  }
}
</script>
<style>
  .star-main {
    margin: 0px auto !important;
  }
</style>
<style lang='scss' scoped>
  .chooseperson{
      width: 345px;
      margin: 0 auto;
      .personlist{
          margin-top: 15px;
          padding: 12px 0;
          background: #FFFFFF;
        //   border: 1px solid #FF0014;
          box-shadow: 0 2px 10px 0 rgba(205,170,173,0.20);
          border-radius: 3px;
          display: flex;
          flex-direction: row;
          align-items: center;
         .img{
           width: 70px;
           height: 83px;
           border-radius: 3px;
           margin-left: 15px;
         }
         .desc{
             margin-left: 10px;
             .title{
                margin-bottom: 7px;
                span{
                    &:nth-of-type(1){
                       font-size: 16px;
                       color: #3C3C3E;
                    }
                }
             }
             .time{
                span{
                  font-size: 12px;
                  color: #A5A5A8;
                }
             }
             .money{
               margin-top: 8px;
               font-family: PingFangSC-Semibold;
               font-size: 16px;
               color: #FF7900;
             }
         }
      }
      .active{
          border: 1px solid #FF0014;
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
