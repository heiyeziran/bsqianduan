<template>
   <div class="container">
    <div class="header">
      <img v-bind:src="film.filmUrl" class="pic">
      <p class="name" >{{film.filmName}}</p>
      <p class="type">{{film.filmType}}</p>
      <p class="director">导演：{{film.filmDirector}}</p>
      <p class="grade">{{film.filmGrade}}分</p>
      <p class="date">{{film.filmDate}}上映</p>
      <router-link to="/index/buy">
        <b-button type="danger"  class="button">选座购票</b-button>
      </router-link>
      <div class="right">
        <span class="today">今日票房</span>
        <p class="all">{{film.filmPoint}}万</p>
      </div>
    </div>
     <div class="show">
       <el-tabs v-model="activeName" @tab-click="handleClick">
           <el-tab-pane label="简介" name="first" >
             <div class="introduction">
               <span class="first">剧情简介</span>
               <p class="intro">{{film.filmIntroduction}}</p>
             </div>
             <div class="comment">
               <span class="title">热门短评</span>

               <div class="row">
                 <div class="col-md-1">
                   <span>还没有数据</span>
                 </div>
               </div>
             </div>
           </el-tab-pane>
           <el-tab-pane label="演员列表" name="second" >
             <div class="actors">
               <span class="workers">演职人员</span>
               <div class="daoyan">
                 <span class="directortitle">导演：</span>
                 <p class="daoyanname">{{film.filmDirector}}</p>
               </div>
               <div class="yanyuan">
                 <span class="yanyuantitle">演员：</span>
                 <p class="yanyuanname">{{film.filmActors}}</p>
               </div>
               <div class="bianju">
                 <span class="bianjutitle">编剧：</span>
                 <p class="bianjuname">还没有数据</p>
               </div>
             </div>
           </el-tab-pane>
           <el-tab-pane label="图集" name="third" ></el-tab-pane>
       </el-tabs>
       <router-view></router-view>
     </div>

   </div>
</template>

<script>
    export default {
        name: "Introductionhot",
      data(){
          return{
            film:{},
            id:this.$route.params.id,
            activeName: 'first'
          }

      },
      created(){
        var that=this;
        this.$http
          .post('http://localhost:8080/film/h/'+this.$route.params.id)
          .then(function (response) {
            that.film=response.data.data;
          })
      },
      activated(){
        this.id=this.$route.params.id;
      },
      computed: function () {
        return this.film;
      },
      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
        }
      }
    }
</script>

<style scoped>
   .header{
     height: 400px;
     width: 1800px;
     background: #392f59;
     margin-left: -290px;
     margin-top: -30px;
   }
   .pic{
     width: 250px;
     height: 320px;
     margin-left: 300px;
     margin-top: 110px;
   }
   .name{
     font-size: 25px;
     color: white;
     margin-top: -300px;
     margin-left: 600px;
   }
   .grade{
     font-size: 25px;
     color: #FFB400;
     margin-left: 600px;
   }
   .button{
     color: white;
     background-color:#EF4238;
     width: 150px;
     text-align: center;
     margin-top: 10px;
     margin-left: 600px;
   }
   .show{
     margin-top: 40px;
   }
    .type{
      margin-left: 600px;
      color: white;
      font-size: 15px;
    }
   .director{
    margin-left: 600px;
    color: white;
    font-size: 15px;
  }
   .date{
     margin-left: 600px;
     color: white;
     font-size: 15px;
   }
   .right{
     margin-top: -80px;
     font-size: 20px;
     color: white;
   }
   .today{
     margin-left: 860px;
   }
   .all{
     margin-left: 860px;
     margin-top: 15px;
   }

   .introduction{
     margin-top: 30px;
   }
   .first{
     font-size: 25px;
     font-weight: bold;
   }
   .intro{
     margin-top: 30px;
     font-size: 18px;
   }
   .comment{
     margin-top: 30px;
   }
   .title{
     font-size: 25px;
     font-weight: bold;
   }
   .actors{
     margin-top: 30px;
   }
   .workers{
     font-size: 25px;
     font-weight: bold;
   }
   .daoyan{
     margin-top: 30px;
   }
   .directortitle{
     font-size: 18px;
   }
   .daoyanname{
     margin-top: 10px;
     font-size: 16px;
   }
   .yanyuan{
     margin-top: 10px;
   }
   .yanyuantitle{
     font-size: 18px;
   }
   .yanyuanname{
     margin-top: 10px;
     font-size: 16px;
   }


</style>
