<template>
  <div class='face'>
     <img class="img" src="@/assets/face.png">
     <span class="btn1">拍照</span>
     <span class="btn2">从相册选择</span>
  </div>
</template>

<script>
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

  },
  components: {

  }
}
</script>

<style lang='scss' scoped>
  .face{
    text-align: center;
    .img{
      margin-top: 75px;
      display: inline-block;
      width: 201px;
      height: 210px;
    }
    .btn1{
      margin-top: 75px;
      display: inline-block;
      width: 315px;
      height: 50px;
      line-height: 50px;
      font-size: 16px;
      color: #FFFFFF;
      text-align: center;
      background-image: linear-gradient(-135deg, #FF0014 0%, #FC4C13 47%, #FF7900 100%);
      border-radius: 25px;
    }
    .btn2{
      margin-top: 20px;
      display: inline-block;
      width: 315px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      border: 1px solid #FF0014;
      border-radius: 25px;
      font-size: 16px;
      color: #FF0014;
    }
  }
</style>
