<template>
  <div class="container">
    <div class="title">
      <span class="title">今日排行</span>
    </div>
    <div class="top">
      <div class="col-md-2" v-for="film in filmList":key="film.id">

          <b-card class="card">
            <ol class="today">
            <router-link :to="'/h/'+film.filmId">
              <div class="message">
                <!--<span class="id">{{film.filmId}}</span>-->
                <span class="name">{{film.filmName}}</span>
                <span class="grade">{{film.filmPoint}}万</span>
              </div>
            </router-link>
          </ol>

          </b-card>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "today",
      data(){
          return{
            filmList:[
            ]
          }
      },
      created(){
        var that=this;
        this.$http
          .post('http://localhost:8080/film/top')
          .then(function (response) {
            that.filmList=response.data.data;
          })
      }
    }
</script>

<style scoped>
   .container{
     margin-top: 80px;
   }
   .top{
     margin-top: 20px;
   }
   .card{
     width:400px;
     height: 50px;
     border-color: white;
   }
   .title{
     position: relative;
     font-size: 30px;
     color:#EF4238 ;
     margin-left: 15px;
   }
   .id{
     font-size: 20px;
     color: #515151;
   }
   .name{
     font-size:20px;
     color:black;
     margin-left: 10px;
   }
   .grade{
     color:#EF4238;
     font-size: 16px;
     margin-left: 50px;
   }
</style>
