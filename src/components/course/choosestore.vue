<template>
  <div class='chooseperson'>
    <div class="personlist" v-for ="(item,index) in list" :key="index" v-bind:class="index == active ? 'active':''" @click="choose(item,index)">
        <img class="img" src="@/assets/celebrity/person1.png">
        <div class="desc">
           <div class="name">
               <span>{{item.name}}</span>
           </div>
           <div class="address">
               <span>{{item.address}}</span>
           </div>
           <div class="distance">
               <span>{{item.distance}}</span>
               <img src="@/assets/icon/location.png">
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
        name: '西溪银泰店',
        address: '弘德路和双龙街交叉口西溪银泰2号楼509-510',
        distance: 2.5
      }, {
        name: '西溪银泰店',
        address: '弘德路和双龙街交叉口西溪银泰2号楼509-510',
        distance: 2.5
      }, {
        name: '西溪银泰店',
        address: '弘德路和双龙街交叉口西溪银泰2号楼509-510',
        distance: 2.5
      }]
    }
  },
  created () {},
  computed: {
    ...mapState('course', ['chooseStoreObj'])
  },
  watch: {},
  mounted () {},
  methods: {
    ...mapMutations('course', ['updateServiceStore', 'updatechooseStoreObj']),
    choose (item, index) {
      let obj = {
        active: index,
        name: item.name
      }
      this.updatechooseStoreObj(obj)
      this.name = item.name
      this.active = index
    },
    confirm () {
      if (this.name === '') {
        this.$toast('请选择服务门店')
      } else {
        this.updateServiceStore(this.name)
        this.$router.go(-1)
      }
    }
  },
  components: {

  }
}
</script>

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
           width: 60px;
           height: 60px;
           margin-left: 15px;
         }
         .desc{
             margin-left: 10px;
             .name{
               font-size: 13px;
               color: #3C3C3E;
               margin-bottom: 4px;

             }
             .address{
                 font-size: 12px;
                 color: #A5A5A8;
                 margin-bottom: 5px;
             }
             .distance{
                 font-size: 12px;
                 color: #A5A5A8;
                 img{
                     width: 13px;
                     height: 15px;
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
