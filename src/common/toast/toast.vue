<template>
   <div class="wrapbox" v-if="showWrap" >
       <div class="wrap"  :class="showContent ?'fadein':'fadeout'">
           <img class="img" src="@/assets/icon/success.png">
           <span>{{text}}</span>
        </div>
   </div>
</template>

<style lang="scss" scoped>
   .wrapbox{
      z-index: 2222;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.42);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  .wrap{
      width: 180px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      background: #ffffff !important;
      border-radius: 5px;
      font-size: 14px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      color: #3C3C3E;
      .img{
          display: inline-block;
          width: 24px;
          height: 24px;
          margin-right: 7px;

      }
  }
</style>
