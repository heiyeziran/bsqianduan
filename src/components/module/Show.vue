<template>
    <div class="container">
      <div class="choose">
        <router-link to="/movie"><el-tag type="success" class="one">按热门排列</el-tag></router-link>
        <router-link to="/movie/listtwo"><el-tag type="info" class="two">按评价排列</el-tag></router-link>
      </div>
      <b-row>
        <b-col cols="12">
          <router-view></router-view>
        </b-col>
      </b-row>

  </div>
</template>

<script>
  import TabPane from "element-ui/packages/tabs/src/tab-pane.vue";

  export default {
    name:"show",

       }
</script>

<style scoped>
   .one{
     width: 120px;
     height: 40px;
     text-align: center;
     font-size: 15px;

   }
   .two{
     margin-left: 30px;
     width: 120px;
     height: 40px;
     text-align: center;
     font-size: 15px;
   }

   .choose{
     margin-left: 50px;
   }
   .two{
     margin-left: 50px;
   }
</style>
