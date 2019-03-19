<template>
<div>
    <div class="days">
      <div @click="pick(day,index)" class="day_item" v-for="(day, index) in days" :key="index" :class="index==active ? 'checkedday':'day'">
      <span class="date">{{ day | flitertime }}</span>
      <span class="week">{{ day | filterweek }}</span>
      <span class="lesson" v-if="day.lesson">{{day.lesson}}</span>
      <div class="line" v-if="(index==active)&&border"></div>
      </div>
    </div>
</div>

</template>

<script>
export default {
  name: '',
  filters: {
    filterweek: function (value) {
      if (new Date(value).toDateString() === new Date().toDateString()) {
        return '今天'
      } else {
        value = value.getDay()
        let obj = {
          0: '周日',
          1: '周一',
          2: '周二',
          3: '周三',
          4: '周四',
          5: '周五',
          6: '周六'
        }
        return obj[value]
      }
    },
    flitertime: function (value) {
      var month = value.getMonth() + 1
      month = month < 10 ? ('0' + month) : month
      var day = value.getDate()
      day = day < 10 ? ('0' + day) : day
      return month + '/' + day
    }
  },
  data () {
    return {
      active: 0,
      days: [],
      currentYear: 1970, // 年份
      currentMonth: 1, // 月份
      currentDay: 1, // 日期
      currentWeek: 1 // 星期
    }
  },
  created () {
    this.initData()
    console.log(this.border)
  },
  props: {
    border: {
      type: Boolean,
      default: false
    }
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {
    pick (day, index) {
      this.active = index
      this.$emit('onchange', day)
    },
    formatDate (year, month, day) {
      const y = year
      let m = month
      if (m < 10) m = `0${m}`
      let d = day
      if (d < 10) d = `0${d}`
      return `${y}/${m}/${d}`
    },
    initData (cur) {
      let date = ''
      if (cur) {
        date = new Date(cur)
      } else {
        date = new Date()
      }
      this.currentDay = date.getDate() // 今日日期 几号
      this.currentYear = date.getFullYear() // 当前年份
      this.currentMonth = date.getMonth() + 1 // 当前月份
      this.currentWeek = date.getDay() // 1...6,0  // 星期几
      const str = this.formatDate(this.currentYear, this.currentMonth, this.currentDay)// 今日日期 年-月-日
      this.days.length = 0
      for (let i = 0; i <= 15; i += 1) {
        const d = new Date(str)
        d.setDate(d.getDate() + i)
        this.days.push(d)
      }
      // console.log(this.days)
    }
  },
  components: {

  }
}
</script>

<style lang="scss">
    .days::-webkit-scrollbar { display: none }
    .days{
        display: flex;
        flex-direction: row;
        overflow-x: scroll;
        .day{
            padding-top: 15px;
            padding-bottom: 3px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width:75px;
            // height:100px;
            // padding: 0 40px;
            // border: 1px solid black;

            .date{
                width:60px;
                font-size: 12px;
                color: #A5A5A8;
                text-align: center;
                margin-bottom: 4px;
            }
            .week{
                width:60px;
                font-size: 16px;
                color: #A5A5A8;
                text-align: center;
                margin-bottom: 4px;
            }
            .lesson{
                 width:60px;
                font-size: 12px;
                color: #A5A5A8;
                text-align: center;
            }
        }
        .checkedday{
            padding-top: 15px;
            padding-bottom: 3px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 75px;
            // height:100px;
            .date{
                width: 60px;
                font-size: 12px;
                color: #FF0014;
                text-align: center;
                margin-bottom: 4px;
            }
            .week{
                width:60px;
                font-size: 16px;
                color: #FF0014;
                text-align: center;
                margin-bottom: 4px;
            }
            .lesson{
                width:60px;
                font-size: 12px;
                color: #FF0014;
                text-align: center;
            }
        }
        .day_item{
          position: relative;
          .line{
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80%;
            height: 2px;
            background: #FF0014;
          }
        }
    }
</style>
