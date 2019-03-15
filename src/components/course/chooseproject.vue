<template>
  <div class='chooseperson'>
    <div class="personlist" v-for ="(item,index) in list" :key="index" v-bind:class="index == choosePersonObj.active ? 'active':''" @click="choose(item,index)">
        <img class="img" src="@/assets/celebrity/person1.png">
        <div class="desc">
            <div class="title">
              <span>{{item.name}}</span>
              <span>/服务次数</span>
              <span>{{item.frequency}}</span>
            </div>
            <div class="rate">
             <star-rate :value="item.scope" type="star1" font-size="11" :disabled="true"
             :star-half="true"
             active-color="#FF7900"
             />
             <span class="scope">{{item.scope}}分</span>
            </div>
        </div>
    </div>
    <span class="btn" @click="confirm()">确认选择</span>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import StarRate from 'vue-cute-rate'
export default {
  name: '',
  data () {
    return {
      name: '',
      // active: null,
      list: [{
        name: '小美',
        frequency: '88次',
        scope: 2.5
      }, {
        name: '小美',
        frequency: '88次',
        scope: 2.5
      }, {
        name: '小美',
        frequency: '88次',
        scope: 2.5
      }]
    }
  },
  created () {},
  computed: {
    ...mapState('course', ['choosePersonObj'])
  },
  watch: {},
  mounted () {},
  methods: {
    ...mapMutations('course', ['updateServicePerson', 'updatechoosePersonObj']),
    choose (item, index) {
      let obj = {
        active: index,
        name: item.name
      }
      this.updatechoosePersonObj(obj)
      this.name = item.name
      // this.active = index
    },
    confirm () {
      if (this.choosePersonObj.name === '') {
        this.$toast('请选择服务人员')
      } else {
        this.updateServicePerson(this.name)
        this.$router.go(-1)
      }
    }
  },
  components: {
    StarRate
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
           width: 55px;
           height: 55px;
           border-radius: 50%;
           margin-left: 15px;
         }
         .desc{
             margin-left: 10px;
             .title{
                margin-bottom: 7px;
                span{
                    &:nth-of-type(1){
                        font-size: 13px;
                        color: #3C3C3E;
                    }
                    &:nth-of-type(2){
                        font-size: 12px;
                        color: #A5A5A8;
                    }
                    &:nth-of-type(3){
                        font-size: 12px;
                        color: #A5A5A8;
                    }
                }
             }
             .rate{
                 .scope{
                     font-size: 11px;
                     color: #FF7900;
                 }
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
