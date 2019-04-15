<template>
<div class="container">
  <div class="title">
    <span class="hot1">正在热映</span>
    <span class="hot2">全部</span>
    <img src="static/img/logo1.png" class="logo2">
  </div>


  <div class="row">
    <!--v-for="index in arr"-->
    <div class="col-md-4" v-for="(film,index ) in filmList ":key="film.id" v-if="index<6">
      <b-card class="card" >
        <router-link :to="'/h/'+film.filmId">
          <img v-bind:src="film.filmUrl"class="pic">
          <p class="name">{{film.filmName}}</p>
        </router-link>
        <router-link to="/index/buy">
          <b-button type="danger"  class="button">选座购票</b-button>
        </router-link>

      </b-card>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "hot",
      data(){
          return{
            filmList:[],

          }
      },
      created(){
          var that=this;
          this.$http
            .post('http://localhost:8080/film/hot')
            .then(function (response) {
              that.filmList=response.data.data;
            })
      }

    }
</script>

<style scoped>
   .container{
     position: relative;
     margin-top: 80px;
     margin-left: -35px;
   }
   .hot1{
     position: relative;
     font-size: 30px;
     color:#EF4238 ;
     margin-left: 15px;
   }
   .hot2{
     position: relative;
     font-size: 15px;
     color: #EF4238;
     margin-left: 470px;
   }
   .logo2{
     position: relative;
     margin-right: 1px;

   }
   .card{
    border-color: white;
   }
   .name{
     color: white;
     position: relative;
     top:-30px;
     width:160px;
     padding: 4px;
     background-color:#000000;
     opacity: 0.6;

   }
   .button{
     color: white;
     background-color:#EF4238;
     width: 150px;
     text-align: center;
     margin-top: -35px;
     margin-left: 5px;
   }

</style>
