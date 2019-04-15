<template>
    <div class="middle">
      <div class="left">
        <span>今日大盘</span>
      </div>
      <div class="right">
        <span class="number">2257.4万</span>
        <p class="time">北京时间：11月24日21：04</p>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Middle"
    }
</script>

<style scoped>
  .middle{

  }
  .left{
    width: 30px;
    background-color: red;
    color: white;
    font-size: 18px;
    text-align: center;
  }
  .right{
    width: 350px;
    height: 107px;
    border-color: black;
    background-color: #F2F2F2;
    position: relative;
    left: 30px;
    margin-top: -107px;
  }
   .number{
     color: #ef4238;
     font-size: 25px;
     font-weight: bold;
     margin-left: 25px;
   }
   .time{
     margin-top: 20px;
     margin-left: 20px;
   }

</style>
