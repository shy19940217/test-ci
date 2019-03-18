<template>
  <div class="choosedate">
    <div class='date'>
        <choosedate @onchange="changedate"></choosedate>
    </div>
     <div class="timequantum">
        <div class="item" v-for="(item,index) in timelist" :key="index" v-bind:class="[index==active ? 'active' : '', item.disabled ? 'disabled':'']"  @click="!item.disabled&&checktab(item,index)">
            <span>{{item.time}}</span>
        </div>
     </div>
     <span class="btn" @click="confirm()">确认选择</span>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { formattime } from '@/js/util'
import choosedate from '@/common/choosedate'
export default {
  name: '',
  data () {
    return {
      date: new Date(),
      active: null,
      time: '',
      timelist: [
        {
          time: '10:00-10:30',
          disabled: true
        },
        {
          time: '10:00-10:30',
          disabled: true
        },
        {
          time: '10:00-10:30',
          disabled: true
        },
        {
          time: '10:00-10:30',
          disabled: false
        },
        {
          time: '10:00-10:30',
          disabled: false
        },
        {
          time: '10:00-10:30',
          disabled: false
        }
      ]
    }
  },
  created () {
    this.date = formattime(this.date)
  },
  computed: {
    ...mapState('course', ['chooseDateObj'])
  },
  watch: {},
  mounted () {},
  methods: {
    ...mapMutations('course', ['updateTime', 'updateChooseDateObj']),
    changedate (date) {
      this.date = formattime(date)
    },
    confirm () {
      if (this.time === '') {
        this.$toast('请选择时间段')
      } else {
        let date = this.date + '  ' + this.time
        this.updateTime(date)
        this.$router.go(-1)
      }
    },
    checktab (item, index) {
      // this.updateChooseDateObj(obj)
      // this.chooseDateObj.active = index
      this.time = item.time
      this.active = index
      let obj = {
        active: index,
        name: item.time,
        time: this.time
      }
      this.updateChooseDateObj(obj)
    }
  },
  components: {
    choosedate
  }
}
</script>

<style lang='scss' scoped>
   .choosedate{
     .timequantum{
       width: 345px;
       margin: 15px auto 0;
       margin-top: 15px;
       display: flex;
       flex-direction: row;
       justify-content: space-between;
       flex-wrap: wrap;
       .item{
            font-size: 13px;
            width: 100px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            border: 1px solid #A5A5A8;
            border-radius: 3px;
            // margin-right: 10px;
            margin-bottom: 10px;
       }
       .disabled{
           border: none;
           background: #F6F6F6;
           color: #A5A5A8;
       }
       .active{
           border: 1px solid #FF0014;
           border-radius: 3px;
           color: #FF0014;
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
