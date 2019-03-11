<template>
  <div class="teamlesson">
     <choosedate></choosedate>
     <div class="teamlessonlist" v-for="(item,index) in reservationlist" :key="index" v-bind:class="item.status ==0 || item.status ==1 ? 'teamlessonlist':'teamlessonend'">
       <img class="teamlessonlist_col_fl" :src="item.imageUrl">
       <div class="teamlessonlist_col_fr">
         <div class="title">
             <span>{{item.title}}</span>
         </div>
          <div class="desc">
              <span class="first">{{item.location}}</span>
              <span class="second">{{item.person}}</span>
              <span class="third">{{item.time}}</span>
          </div>
          <div class="operate">
             <div class="operate_col_fl">
                <span class="operate_desc">难度：</span>
                <van-rate
                :readonly="true"
                v-model="item.difficulty"
                :size="15"
                :count="5"
                color="#07c160"
                void-color="#ceefe8"
                :icon="item.iconurl"
                void-icon="http://uniubi-front-end.oss-cn-hangzhou.aliyuncs.com/uni-ubi/dark.png"

                />
             </div>
             <div class="operate_col_fr">
                <span v-if="item.status == 0" class="fillbtn">预约</span>
                <span v-if="item.status == 1" class="emptybtn">已预约</span>
                <span v-if="item.status == 2" class="disabledbtn">已结束</span>
             </div>
        </div>
       </div>
     </div>

  </div>
</template>

<script>
import { Rate } from 'vant'
import choosedate from '@/common/choosedate'
export default {
  name: '',
  data () {
    return {
      reservationlist: [
        {
          imageUrl: require('@/assets/celebrity/person2.png'),
          title: '明星普拉提大器械课程',
          person: '10/12人',
          time: '12:00-13:00',
          difficulty: 2.5,
          teacher: '小桃',
          status: 0, // 0为预约  1 为已预约  2为已结束
          location: '西溪银泰店',
          iconurl: 'http://uniubi-front-end.oss-cn-hangzhou.aliyuncs.com/uni-ubi/light.png'
        },
        {
          imageUrl: require('@/assets/celebrity/person2.png'),
          title: '明星普拉提大器械课程',
          person: '10/12人',
          time: '12:00-13:00',
          difficulty: 2.5,
          teacher: '小桃',
          status: 0, // 0为预约  1 为已预约  2为已结束
          location: '西溪银泰店',
          iconurl: 'http://uniubi-front-end.oss-cn-hangzhou.aliyuncs.com/uni-ubi/light.png'
        },
        {
          imageUrl: require('@/assets/celebrity/person2.png'),
          title: '明星普拉提大器械课程',
          person: '10/12人',
          time: '12:00-13:00',
          difficulty: 2.5,
          teacher: '小桃',
          status: 0, // 0为预约  1 为已预约  2为已结束
          location: '西溪银泰店',
          iconurl: 'http://uniubi-front-end.oss-cn-hangzhou.aliyuncs.com/uni-ubi/light.png'
        },
        {
          imageUrl: require('@/assets/celebrity/person1.png'),
          title: '西柚美学-美甲套餐',
          person: '10/12人',
          time: '12:00-13:00',
          teacher: '小桃',
          status: 1,
          difficulty: 2,
          location: '西溪银泰店',
          iconurl: 'http://uniubi-front-end.oss-cn-hangzhou.aliyuncs.com/uni-ubi/light.png'
        },
        {
          imageUrl: require('@/assets/celebrity/person1.png'),
          title: '西柚美学-美甲套餐',
          person: '10/12人',
          time: '12:00-13:00',
          teacher: '小桃',
          status: 2,
          difficulty: 2,
          location: '西溪银泰店',
          iconurl: 'http://uniubi-front-end.oss-cn-hangzhou.aliyuncs.com/uni-ubi/finish.png'

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
    choosedate,
    'van-rate': Rate
  }
}
</script>

<style lang="scss">
    @import "src/styles/index.scss";
   .teamlesson{

       .teamlessonlist{
           display: flex;
           flex-direction: row;
           align-items: center;
           width: 345px;
           height: 113px;
           margin: 0 auto 15px;
           background: #FFFFFF;
           box-shadow: 0 2px 10px 0 rgba(205,170,173,0.20);
           border-radius: 3px;
          .teamlessonlist_col_fl{
              width: 70px;
              height: 83px;
              margin-left: 15px;
          }
          .teamlessonlist_col_fr{
              width: 100%;
              margin-left: 15px;
             .title{
                font-size: 16px;
                color: #3C3C3E;
                margin-bottom: 8px;
             }
             .desc{
                font-size: 12px;
                color: #A5A5A8;
                margin-bottom: 15px;
                .first{
                    margin-right: 15px;
                }
                .second{
                    margin-right: 15px;
                }
             }
             .operate{
                 display: flex;
                 flex-direction: row;
                 align-items:center;
                 justify-content: space-between;
                 .operate_col_fl{
                    display: flex;
                    flex-direction: row;
                 }
                 .operate_col_fr{
                      margin-right: 15px;
                 }
                 .operate_desc{
                    font-size: 12px;
                     color: #3C3C3E;
                 }

             }
          }
       }
       .teamlessonend{
           .teamlessonlist_col_fl{
              -webkit-filter: grayscale(100%);
              -moz-filter: grayscale(100%);
              -ms-filter: grayscale(100%);
              -o-filter: grayscale(100%);
              filter: grayscale(100%);
              filter: gray;
            }
           .teamlessonlist_col_fr{
               color: #A5A5A8;
             .title{
                color: #A5A5A8;
             }
             .desc{
                color: #A5A5A8;
             }
             .operate{
                 .operate_desc{
                    font-size: 12px;
                    color: #A5A5A8;
                 }

             }
           }
       }
   }
</style>
