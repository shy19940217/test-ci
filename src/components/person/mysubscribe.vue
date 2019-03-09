<template>
  <div class='mysubscribe'>
        <!-- <van-tabs v-model="active" title-active-color="#FF0014" title-inactive-color="#A5A5A8" :line-width="60" :line-height="5">
            <van-tab></van-tab>
            <van-tab title="已完成"></van-tab>

        </van-tabs> -->
    <div class="taboption">
       <van-tabs v-model="active"  title-active-color="#FF0014" title-inactive-color="#A5A5A8" :line-width="60" :line-height="5">
        <van-tab v-for="(item,index) in tabs" :key="index">
                <div class="tab-title" slot="title" @click="onClick(item)">{{ item.title }}</div>
        </van-tab>
     </van-tabs>
    </div>
    <div class="content">
       <div class="list" v-for="(item,index) in reservationlist" :key="index">
           <div class="reservation_col_fl">
               <img class="photo" :src="item.imageUrl">
               <div class="desc">
                   <p class="desc_first_rol">{{item.title}}</p>
                 <!-- <div class="desc_second_rol"> -->
                   <div class="desc_second_rol" v-if="item.category ==1">
                     <span>老师：</span>
                     <span>{{item.teacher}}</span>
                   </div>
                   <div class="desc_second_rol" v-if="item.category ==2">
                    <span>时间：</span>
                    <span>{{item.time}}</span>
                   </div>
                   <div class="location">
                    <img style="width:18.7px;height:15px;margin-right:8px;" src="@/assets/location.png">
                    <span>{{item.location}}</span>
                   </div>
               </div>
           </div>
           <div class="reservation_col_fr">
             <span>{{item.appointment_time}}</span>
           </div>
           <div class="label1 label" v-if="item.status ==0">
               <span>已预约</span>
           </div>
           <div class="label2 label" v-if="item.status ==1">
               <span>已结束</span>
           </div>
           <div class="label3 label" v-if="item.status ==2">
               <span>已取消</span>
           </div>
        </div>
    </div>
  </div>
</template>

<script>
import { Tab, Tabs } from 'vant'
export default {
  name: '',
  data () {
    return {
      active: 0,
      tabs: [
        {
          id: '1',
          title: '全部'
        },
        {
          id: '2',
          title: '已预约'
        },
        {
          id: '2',
          title: '已完成'
        }
      ],
      reservationlist: [
        {
          status: 0,
          imageUrl: require('@/assets/celebrity/person2.png'),
          title: '明星普拉提大器械课程',
          category: 1, // 1 为团体  2 为美容  3 为私教
          teacher: '小桃',
          location: '西溪银泰店',
          appointment_time: '今天 18:00'
        },
        {
          status: 0,
          imageUrl: require('@/assets/celebrity/person2.png'),
          title: '明星普拉提大器械课程',
          category: 1, // 1 为团体  2 为美容  3 为私教
          teacher: '小桃',
          location: '西溪银泰店',
          appointment_time: '今天 18:00'
        },
        {
          status: 0,
          imageUrl: require('@/assets/celebrity/person2.png'),
          title: '明星普拉提大器械课程',
          category: 1, // 1 为团体  2 为美容  3 为私教
          teacher: '小桃',
          location: '西溪银泰店',
          appointment_time: '今天 18:00'
        },
        {
          status: 0,
          imageUrl: require('@/assets/celebrity/person2.png'),
          title: '明星普拉提大器械课程',
          category: 1, // 1 为团体  2 为美容  3 为私教
          teacher: '小桃',
          location: '西溪银泰店',
          appointment_time: '今天 18:00'
        },
        {
          status: 1,
          imageUrl: require('@/assets/celebrity/person2.png'),
          title: '明星普拉提大器械课程',
          category: 1, // 1 为团体  2 为美容  3 为私教
          teacher: '小桃',
          location: '西溪银泰店',
          appointment_time: '今天 18:00'
        },
        {
          status: 2,
          imageUrl: require('@/assets/celebrity/person1.png'),
          title: '西柚美学-美甲套餐',
          category: 2, // 1 为团体  2 为美容  3 为私教
          time: '90分钟',
          location: '西溪银泰店',
          appointment_time: '今天 18:00'
        }
      ]
    }
  },
  created () {},
  computed: {

  },
  watch: {},
  mounted () {},
  methods: {
    onClick (id) {

    }
  },
  components: {
    'van-tabs': Tabs,
    'van-tab': Tab
  }
}
</script>
<style>
   .van-tabs__wrap{
       height: 90px;
   }
   .van-tabs, .van-tabs--line{
     height: 60px !important;
   }
   .van-tabs--line .van-tabs__wrap{
     height: 90px;
   }
   .van-tab, .van-tab--active{
     /* padding: 29px 0 25px 0; */
   }
   .tab-title{
     /* font-size: 28px !important;
     color: #FF0014; */
     padding: 29px 0 25px 0;
   }
   .van-tab--active{
     color: #FF0014;
   }
   .van-ellipsis{
     display: inline-block;
     font-size: 32px;
     text-align: center;
   }

</style>
<style lang='scss' scoped>
      .mysubscribe{
           position: fixed;
           top: 0;
           left: 0;
           right: 0;
           bottom: 0;
           background: rgb(250,250,250);
           .taboption{
               position:absolute;
               top: 0;
               left: 0;
               height: 100px;
               width: 100%;
           }
           .content{
               position: absolute;
               top: 100px;
               bottom: 0;
               left: 0;
               right: 0;
               overflow-y: scroll;
               -webkit-overflow-scrolling: touch;
           }
       }
      .list{
         position: relative;
         width:690px;
         height: 178px;
         background: #FFFFFF;
         box-shadow: 0 4px 20px 0 rgba(205,170,173,0.20);
         border-radius: 6px;
         display: flex;
         flex-direction: row;
         align-items: center;
         justify-content: space-between;

         margin: 30px auto 0;

         .reservation_col_fl{
           margin-left: 30px;
           display: flex;
           flex-direction: row;
           align-items: center;
            .photo{
              width: 126px;
              height: 118px;
              border-radius:5px;
            }
            .desc{
              margin-left: 20px;
              .desc_first_rol{
                font-family: PingFang-SC-Medium;
                font-size: 26px;
                width: 234px;
                overflow:hidden;
                text-overflow:ellipsis;
                white-space:nowrap;
                color: #3C3C3E;
              }
              .desc_second_rol{
                  margin-top: 10px;
              }
              .location{
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  margin-top: 10px;
                  margin-right: 30px;
               }
               span{
                  font-size: 24px;
                  color: #A5A5A8;
               }

            }
         }
         .reservation_col_fr{
            margin-right: 30px;
            font-family: PingFangSC-Regular;
            font-size: 24px;
            color: #3C3C3E;
         }
         .label{
             position: absolute;
             top: 0;
             right: 30px;
             width: 120px;
             height: 45px;
             line-height: 45px;
             text-align: center;
             font-size: 24px;
         }
         .label1{
             background: #0065FF;
             color: #FFFFFF;
         }
         .label2{
             border: 1px solid #A5A5A8;
             background: #FFFFFF;
             color: #A5A5A8;
         }
         .label3{
             border: 1px solid #FF0014;
             background: #FFFFFF;
             color: #FF0014;
         }

       }
</style>
