<template>
  <div class='question'>
    <van-collapse v-model="activeNames">
        <van-collapse-item :title="item.title" :name="index+1" v-for="(item,index) in list" :key="index">
           {{item.content}}
        </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
import { Collapse, CollapseItem } from 'vant'
export default {
  name: '',
  data () {
    return {
      activeNames: ['1'],
      list: [
        {
          title: '有赞微商城',
          content: '提供多样店铺模板，快速搭建网上商城'
        },
        {
          title: '有赞零售',
          content: ' 网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失'
        },
        {
          title: '有赞美业',
          content: '线上拓客，随时预约，贴心顺手的开单收银'
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
    'van-collapse': Collapse,
    'van-collapse-item': CollapseItem
  }
}
</script>
<style lang="scss">
   .van-collapse-item{
    //    height: 108px;
       /* display: flex;
       flex-direction: row;
       align-items: center; */
    //    line-height: 108px;
   }
   .van-collapse-item__title{
      // height: 54px;
      // line-height: 54px;
   }
   .van-cell__title{
      vertical-align: middle;
   }
   .van-cell__right-icon{
       position: absolute;
       top: 50%;
       transform: translateY(-50%);
       right: 10px;
   }
</style>
<style lang='scss' scoped>

</style>
