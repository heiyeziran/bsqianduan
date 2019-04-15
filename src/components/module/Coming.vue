<template>
  <div class="container">
    <div class="title">
      <span class="hot1">即将上映</span>
      <span class="hot2">全部</span>
      <img src="static/img/logo2.png" class="logo2">
    </div>
    <div class="row">
      <div class="col-md-4" v-for="(film,index) in filmList ":key="film.id" v-if="index<6">
        <b-card class="card">
          <router-link :to="'/c/'+film.filmId">
            <img v-bind:src="film.filmUrl"class="pic">
            <p class="name">{{film.filmName}}</p>
          </router-link>
          <p class="likes" >{{film.filmLike}}人想看</p>
          <p class="date">{{film.filmDate}}上映</p>
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
        filmList:[]
      }

    },
    created(){
      var that=this;
      this.$http
        .post('http://localhost:8080/filmcoming/coming')
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
    color:#2D98F3 ;
    margin-left: 15px;
  }
  .hot2{
    position: relative;
    font-size: 15px;
    color: #2D98F3;
    margin-left: 470px;
  }
  .logo2{
    position: relative;
    margin-right: 1px;
  }
  .card{
    border-color: white;
    height: 340px;
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
  .likes{
    color: #FFB400;
    margin-left: 5px;
    margin-top: -25px;
    background-color: #FBFBFB;
  }
  .date{
    color:#8a8a8a;
    text-align: center;
  }

</style>
