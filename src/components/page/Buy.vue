<template>
   <div class="container">
     <div id="seat-map" class="seatCharts-container" tabindex="0" aria-activedescendant="1_10">
       <div class="front">屏幕</div>
       <div class="seatCharts-row">
         <div class="seatCharts-cell seatCharts-space">1</div>
         <div id="1_1" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">1</div>
         <div id="1_2" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell unavailable">2</div>
         <div id="1_3" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">3</div>
         <div id="1_4" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">4</div>
         <div id="1_5" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">5</div>
         <div id="1_6" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">6</div>
         <div id="1_7" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">7</div>
         <div id="1_8" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">8</div>
         <div id="1_9" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">9</div>
         <div id="1_10" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">10</div>
       </div>
       <div class="seatCharts-row">
         <div class="seatCharts-cell seatCharts-space">2</div>
         <div id="2_1" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">1</div>
         <div id="2_2" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">2</div>
         <div id="2_3" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">3</div>
         <div id="2_4" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">4</div>
         <div id="2_5" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">5</div>
         <div id="2_6" role="checkbox" aria-checked="true" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell selected">6</div>
         <div id="2_7" role="checkbox" aria-checked="true" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell selected">7</div>
         <div id="2_8" role="checkbox" aria-checked="true" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell selected">8</div>
         <div id="2_9" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">9</div>
         <div id="2_10" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">10</div>
       </div>
       <div class="seatCharts-row">
         <div class="seatCharts-cell seatCharts-space">3</div>
         <div class="seatCharts-cell seatCharts-space"></div>
         <div class="seatCharts-cell seatCharts-space"></div>
         <div class="seatCharts-cell seatCharts-space"></div>
         <div class="seatCharts-cell seatCharts-space"></div>
         <div class="seatCharts-cell seatCharts-space"></div>
         <div class="seatCharts-cell seatCharts-space"></div>
         <div class="seatCharts-cell seatCharts-space"></div>
         <div class="seatCharts-cell seatCharts-space"></div>
         <div class="seatCharts-cell seatCharts-space"></div>
         <div class="seatCharts-cell seatCharts-space"></div>
       </div>
       <div class="seatCharts-row">
         <div class="seatCharts-cell seatCharts-space">4</div>
         <div id="4_1" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">1</div>
         <div id="4_2" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">2</div>
         <div id="4_3" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">3</div>
         <div id="4_4" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell unavailable">4</div>
         <div id="4_5" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell unavailable">5</div>
         <div id="4_6" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">6</div>
         <div id="4_7" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">7</div>
         <div id="4_8" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">8</div>
         <div class="seatCharts-cell seatCharts-space"></div>
         <div class="seatCharts-cell seatCharts-space"></div>
       </div>
       <div class="seatCharts-row">
         <div class="seatCharts-cell seatCharts-space">5</div>
         <div id="5_1" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">1</div>
         <div id="5_2" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">2</div>
         <div id="5_3" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">3</div>
         <div id="5_4" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">4</div>
         <div id="5_5" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">5</div>
         <div id="5_6" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">6</div>
         <div id="5_7" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">7</div>
         <div id="5_8" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">8</div>
         <div id="5_9" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">9</div>
         <div id="5_10" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">10</div>
       </div>
       <div class="seatCharts-row">
         <div class="seatCharts-cell seatCharts-space">6</div>
         <div id="6_1" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">1</div>
         <div id="6_2" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">2</div>
         <div id="6_3" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">3</div>
         <div id="6_4" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">4</div>
         <div id="6_5" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">5</div>
         <div id="6_6" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell unavailable">6</div>
         <div id="6_7" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell unavailable">7</div>
         <div id="6_8" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">8</div>
         <div id="6_9" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">9</div>
         <div id="6_10" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">10</div>
       </div>
       <div class="seatCharts-row">
         <div class="seatCharts-cell seatCharts-space">7</div>
         <div id="7_1" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">1</div>
         <div id="7_2" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">2</div>
         <div id="7_3" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">3</div>
         <div id="7_4" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">4</div>
         <div id="7_5" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">5</div>
         <div id="7_6" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">6</div>
         <div id="7_7" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">7</div>
         <div id="7_8" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">8</div>
         <div id="7_9" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">9</div>
         <div id="7_10" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">10</div>
       </div>
       <div class="seatCharts-row">
         <div class="seatCharts-cell seatCharts-space">8</div>
         <div id="8_1" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">1</div>
         <div id="8_2" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">2</div>
         <div id="8_3" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">3</div>
         <div id="8_4" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">4</div>
         <div id="8_5" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell unavailable">5</div>
         <div id="8_6" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell unavailable">6</div>
         <div id="8_7" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell unavailable">7</div>
         <div id="8_8" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell unavailable">8</div>
         <div id="8_9" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">9</div>
         <div id="8_10" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">10</div>
       </div>
       <div class="seatCharts-row">
         <div class="seatCharts-cell seatCharts-space">9</div>
         <div id="9_1" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">1</div>
         <div id="9_2" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">2</div>
         <div id="9_3" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">3</div>
         <div id="9_4" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">4</div>
         <div id="9_5" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">5</div>
         <div id="9_6" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">6</div>
         <div id="9_7" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">7</div>
         <div id="9_8" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">8</div>
         <div id="9_9" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">9</div>
         <div id="9_10" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">10</div>
       </div>
       <div class="seatCharts-row">
         <div class="seatCharts-cell seatCharts-space">10</div>
         <div id="10_1" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell unavailable">1</div>
         <div id="10_2" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell unavailable">2</div>
         <div class="seatCharts-cell seatCharts-space"></div>
         <div class="seatCharts-cell seatCharts-space"></div>
         <div id="10_5" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">5</div>
         <div id="10_6" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">6</div>
         <div class="seatCharts-cell seatCharts-space"></div>
         <div class="seatCharts-cell seatCharts-space"></div>
         <div id="10_9" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">9</div>
         <div id="10_10" role="checkbox" aria-checked="false" focusable="true" tabindex="-1" class="seatCharts-seat seatCharts-cell available">10</div>
       </div>
     </div>
     <div class="booking-details" >
       <p>影片：<span>{{film.filmName}}</span></p>
       <p>时间：<span>{{film.filmDate}}</span></p>
       <p>票价：<span>￥{{film.filmMoney}}/张</span></p>
       <p>座位：</p>
       <ul id="selected-seats"><li id="cart-item-2_6">2排6座</li><li id="cart-item-2_7">2排7座</li><li id="cart-item-2_8">2排8座</li></ul>
       <p>票数：<span id="counter">3</span></p>
       <p>总计：<b>￥<span id="total">117</span></b></p>

       <b-button type="danger"  class="button">确认购买</b-button>

       <div id="legend" class="seatCharts-legend">
         <ul class="seatCharts-legendList">
         <li class="seatCharts-legendItem">
         <div class="seatCharts-seat seatCharts-cell available"></div>
         <span class="seatCharts-legendDescription">可选座</span></li>
         <li class="seatCharts-legendItem">
           <div class="seatCharts-seat seatCharts-cell unavailable"></div>
           <span class="seatCharts-legendDescription">已售出</span></li></ul></div>
     </div>
     <div style="clear:both"></div>
   </div>
</template>

<script>
   export default {
     data(){
       return{
         film:{
           'filmName':'毒液：致命守护者',
           'filmDate':'11月20日',
           'filmMoney':'39'
         },
         id:this.$route.params.id,
       }
     },
     // created(){
     //   var that=this;
     //   this.$http
     //     .post('http://localhost:8080/film/h/'+this.$route.params.id)
     //     .then(function (response) {
     //       that.film=response.data.data;
     //     })
     // },
     // activated(){
     //   this.id=this.$route.params.id;
     // },
     // computed: function () {
     //   return this.film;
     // },
   }
</script>


<style scoped>
  .container {
    width: 1000px;
    height:500px;
    margin: 40px auto 0 auto;
    min-height: 550px;
  }
  .front{
    width: 350px;margin: 5px 32px 45px 32px;background-color: #f0f0f0; color: #666;text-align: center;padding: 3px;border-radius: 5px;
  }
  .booking-details {
    float: right;position: relative;width:200px;height: 450px;
  }
  .booking-details h3 {
    margin: 5px 5px 0 0;font-size: 16px;
  }
  .booking-details p{
    line-height:26px; font-size:16px; color:#999
  }
  .booking-details p span{
    color:#666
  }
  div.seatCharts-cell {
    color: #182C4E;height: 25px;width: 25px;line-height: 25px;margin: 3px;float: left;text-align: center;outline: none;font-size: 13px;
  }
  div.seatCharts-seat {
    color: #fff;cursor: pointer;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius: 5px;
  }
  div.seatCharts-row {
    height: 35px;
  }
  div.seatCharts-seat.available {
    background-color: #FFA901;
  }
  div.seatCharts-seat.focused {
    background-color: #76B474;border: none;
  }
  div.seatCharts-seat.selected {
    background-color: #EE2604;
  }
  div.seatCharts-seat.unavailable {
    background-color: #2E3944;cursor: not-allowed;
  }
  div.seatCharts-container {
    border-right: 1px dotted #adadad;width: 520px;padding: 20px;float: left;
  }
  div.seatCharts-legend {
    padding-left: 0px;position: absolute;bottom: 16px;
  }
  ul.seatCharts-legendList {
    padding-left: 0px;
  }
  .seatCharts-legendItem{
    float:left; width:90px;margin-top: 10px;line-height: 2;
  }
  span.seatCharts-legendDescription {margin-left: 5px;line-height: 30px;}
  .button {
    color: white;
    background-color:#EF4238;
    width: 150px;
    text-align: center;
    margin-top: 85px;
    margin-left: 5px;

  }
  #selected-seats {
    max-height: 150px;overflow-y: auto;overflow-x: none;width: 200px;
  }
  #selected-seats li{
    float:left; width:72px; height:26px; line-height:26px; border:1px solid #d3d3d3; background:#f7f7f7; margin:6px; font-size:14px; font-weight:bold; text-align:center
  }
  li{
    list-style: none;
  }
</style>
