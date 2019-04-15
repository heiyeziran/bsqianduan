<template>
    <div class="container">
      <div class="row">
        <div class="col-md-3" v-for="film in filmList":key="film.id">
          <b-card class="card">
            <router-link :to="'/a/'+film.filmId">
              <img v-bind:src="film.filmUrl"class="pic">
              <p class="name">{{film.filmName}}</p>
            </router-link>
            <p class="grade">{{film.filmGrade}}</p>
          </b-card>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "ListOne",
         data(){
          return{
            filmList:[

            ]
          }
         },
      created(){
        var that=this;
        this.$http
          .post('http://localhost:8080/filmall/hot')
          .then(function (response) {
            that.filmList=response.data.data;
          })
      }

    }
</script>

<style scoped>
  .container{
    position: relative;
    width:1000px;
    margin-top: 60px;
    margin-left: -35px;
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
   .row{
     margin-left: 50px;
   }
   .grade{
     color: #FEA933;
     font-size:20px;
     margin-left: 55px;
     margin-top: -10px;
   }
</style>
