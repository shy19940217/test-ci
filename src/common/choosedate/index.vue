<template>
<div>
    <div class="days">
    <div @click="pick(day)" v-for="(day, index) in days" :key="index" :class="index==active ? 'checkedday':'day'">
     <span class="date">{{ day | flitertime }}</span>
     <span class="week">{{ day | filterweek }}</span>
     <span class="lesson">3节课</span>
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
          0: '星期日',
          1: '星期一',
          2: '星期二',
          3: '星期三',
          4: '星期四',
          5: '星期五',
          6: '星期六'
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
  },
  computed: {},
  watch: {},
  mounted () {},
  methods: {
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
      console.log(this.days)
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
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width:150px;
            height:200px;
            // padding: 0 40px;
            // border: 1px solid black;

            .date{
                width:120px;
                font-size: 24px;
                color: #A5A5A8;
                text-align: center;
                margin-bottom: 8px;
            }
            .week{
                width:120px;
                font-size: 32px;
                color: #A5A5A8;
                text-align: center;
                margin-bottom: 8px;
            }
            .lesson{
                 width:120px;
                font-size: 24px;
                color: #A5A5A8;
                text-align: center;
            }
        }
        .checkedday{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 150px;
            height:200px;
            .date{
                width: 120px;
                font-size: 24px;
                color: #FF0014;
                text-align: center;
                margin-bottom: 8px;
            }
            .week{
                width:120px;
                font-size: 32px;
                color: #FF0014;
                text-align: center;
                margin-bottom: 8px;
            }
            .lesson{
                width:120px;
                font-size: 24px;
                color: #FF0014;
                text-align: center;
            }
        }
    }
</style>
