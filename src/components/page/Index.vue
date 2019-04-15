<template>
  <b-row>
    <b-col cols="14">
      <v-carousel></v-carousel>
      <!--<v-topic class="tp"></v-topic><hr/>-->
      <!--<v-article class="at"></v-article><hr/>-->
    </b-col>
    <b-col cols="8">
      <v-hot class="hot"></v-hot>
      <v-coming class="coming"></v-coming>
    </b-col>
    <b-col cols="4">
      <v-today class="today"></v-today>
      <v-middle class="middle"></v-middle>
      <v-want class="want"></v-want>
    </b-col>
    <!--<b-col cols="4">-->
      <!--<v-type></v-type>-->
      <!--<v-author class="vau"></v-author>-->
    <!--</b-col>-->
  </b-row>
</template>

<script>
  import vCarousel from '../module/Carousel';
  import vHot from '../module/Hot';
  import vToday from '../module/Today';
  import vComing from '../module/Coming';
  import  vMiddle from '../module/Middle';
  import  vWant from '../module/Want';
    export default {
        name: "Index",
        components:{
          vCarousel,
          vHot,
          vToday,
          vComing,
          vMiddle,
          vWant

        }
    }
</script>

<style scoped>
   .middle{
     position: relative;
     top: 160px;
   }
   .want{
     position: relative;
     top: 150px;
   }
</style>
