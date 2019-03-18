<template>
  <div class='detail'>
      <div class="background"></div>
      <div class="title_content">
         <img class="img" src="@/assets/celebrity/person1.png">
         <p class="course">明星普拉提大器械课程</p>
         <p class="desc">老师：小桃</p>
      </div>
      <div class="subscribe_detail">
        <div class="title">
          <span>预约详情</span>
        </div>
        <div class="content">
           <div class="field_item">
               <span class="field_info">预约时间：</span>
               <span class="field_desc">2019-02-28  18:00</span>
           </div>
           <div class="field_item">
               <span class="field_info">店铺名称：</span>
               <span class="field_desc">西柚美学（西溪银泰店）</span>
           </div>
           <div class="field_item">
               <span class="field_info">店铺地址：</span>
               <span class="field_desc">弘德路和双龙街交叉口西溪银泰2号楼509-510</span>
           </div>
           <div class="field_item">
               <span class="field_info">预约编号：</span>
               <span class="field_desc">2019022802211</span>
           </div>
           <div class="field_item">
               <span class="field_info">创建时间：</span>
               <span class="field_desc">2019-02-20  10:00</span>
           </div>
        </div>
      </div>
      <div class="project_detail">
         <div class="title">
            <span>项目详情</span>
        </div>
        <div class="content">
            普拉提首先是一种运动。它主要是锻炼人体小肌肉群，维持和改善外观正常活动姿势、达到身体平衡、创展躯干和肢体的活动范围和活动能力、再配合正确的呼吸方法所进行的一项全身协调运动。
        </div>
      </div>
      <div class="subscribe_notice">
        <div class="title">
            <span>项目须知</span>
        </div>
        <div class="content">请遵守教练的指导及课程的预约程序。</div>
      </div>
      <div class="bottombtn">
          <span class="btn" @click="cancelconfirm()">取消</span>
      </div>
  </div>
</template>

<script>
import { Dialog } from 'vant'
export default {
  name: '',
  data () {
    return {

    }
  },
  created () {},
  computed: {},
  watch: {},
  mounted () {},
  methods: {
    cancelconfirm () {
      Dialog.confirm({
        title: '提示',
        message: '确认取消预约的课程吗？'
      }).then(() => {
        this.$router.go(-1)
        // on confirm
      }).catch(() => {
        // on cancel
      })
    }
  },
  components: {
    Dialog
  }
}
</script>

<style lang='scss' scoped>
   .detail{
      .background{
          width: 375px;
          height: 130px;
          background: url('~@/assets/background.png')  no-repeat;
          background-size: 375px 130px;
      }
      .title_content{
          width: 345px;
          height: 106px;
          margin: -90px auto 0;
          background: #FFFFFF;
          box-shadow: 0 2px 30px 0 rgba(205,170,173,0.30);
          border-radius: 6px;
          text-align: center;
          .img{
              margin-top: -25px;
              width: 60px;
              height: 60px;
              border-radius: 50%;
          }
          .course{
              font-family: PingFang-SC-Medium;
              font-size: 16px;
              color: #3C3C3E;
              margin-top: 11px;
          }
          .desc{
             font-size: 13px;
             color: #A5A5A8;
             margin-top: 5px;
          }
      }
      .subscribe_detail{
          width: 345px;
          margin: 0 auto;
          .title{
              margin: 20px 0 10px 0;
              font-family: PingFang-SC-Medium;
              font-size: 16px;
              color: #3C3C3E;
          }
          .content{
              padding-bottom: 15px;
              border-bottom: 1px solid #F6F6F6;
              .field_item{
                  margin-bottom: 5px;
                  .field_info{
                     font-size: 12px;
                     color: #A5A5A8;
                  }
                  .field_desc{
                      font-size: 12px;
                      color: #000000;
                  }
              }
          }
      }
      .project_detail{
          width: 345px;
          margin: 0 auto;
          .title{
              margin: 20px 0 10px 0;
              font-family: PingFang-SC-Medium;
              font-size: 16px;
              color: #3C3C3E;
          }
          .content{
              padding-bottom: 15px;
              border-bottom: 1px solid #F6F6F6;
              font-size: 12px;
              color: #A5A5A8;
              line-height: 16px;
          }
      }
      .subscribe_notice{
          width: 345px;
          margin: 0 auto;
          .title{
              margin: 20px 0 10px 0;
              font-family: PingFang-SC-Medium;
              font-size: 16px;
              color: #3C3C3E;
          }
          .content{
              padding-bottom: 15px;
              font-size: 12px;
              line-height: 16px;
              color: #A5A5A8;
              text-align: justify;
          }
      }
      .bottombtn{
         background: #FFFFFF;
         box-shadow: 0 -2px 8px 0 rgba(205,170,173,0.12);
         position: fixed;
         display: flex;
         flex-direction: row;
         align-items: center;
         justify-content: center;
         bottom: 0;
         left: 0;
         height: 62px;
         width: 100%;
         .btn{
            display: inline-block;
            width: 150px;
            height: 38px;
            line-height: 38px;
            font-size: 16px;
            text-align: center;
            border: 1px solid #FF0014;
            border-radius: 18px;
            color: #FF0014;
         }
       }
   }
</style>
