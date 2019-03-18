<template>
  <div class='notfound'>
     <img class="img" src="@/assets/404.png">
     <p class="desc">界面走丢了</p>
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
   .notfound{
      position:fixed;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
      text-align: center;
      .img{
        margin-top: 95px;
        width: 288px;
        height: 211px;
      }
      .desc{
          margin-top: -10px;
          font-size: 16px;
          color: #A5A5A8;
      }

   }
</style>
