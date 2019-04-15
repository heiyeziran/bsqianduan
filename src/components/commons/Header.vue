<template>
  <b-navbar toggleable="md" type="light" variant="default" fixed class="box">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <router-link to="/">
      <b-navbar-brand>
        <b-img width="125" height="80"
               src="static/img/logo.png" class="logo"/>
      </b-navbar-brand>
    </router-link>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item  class="first">
          <router-link to="/index">首页</router-link>
        </b-nav-item>
        <b-nav-item  class="second">
          <router-link to="/movie">影片</router-link>
        </b-nav-item>
        <b-nav-item  class="third">
          <router-link to="/cinema">影院</router-link>
        </b-nav-item>
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="影片，影院，演员"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">搜索</b-button>
        </b-nav-form>
      </b-navbar-nav>


        <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="user===null">
              <router-link to="/sign_in">登陆</router-link>
            </b-nav-item>
            <b-nav-item v-if="user===null">
              <router-link to="/sign_up">注册</router-link>
            </b-nav-item>
            <b-nav-item-dropdown right v-if="user!=null">
              <!-- Using button-content slot -->
              <template slot="button-content"  class="right">
                <b-img rounded="circle" width="35" height="35" src="/static/img/avatar.jpg"/>
              </template>
              <b-dropdown-item>
                <router-link to="/personmiddle">个人中心</router-link>
              </b-dropdown-item>
              <b-dropdown-item>
                <router-link to="/settings">设置</router-link>
              </b-dropdown-item>
              <b-dropdown-item @click="logout">退出</b-dropdown-item>
            </b-nav-item-dropdown>
          <b-img width="30" height="30" src="/static/img/ask.png" class="pic"/>
          <b-nav-item v-if="user===null" class="ask">
             <router-link to="/ask">咨询客服</router-link>
          </b-nav-item>
        </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
  import 'bootstrap/dist/css/bootstrap.css'
  import 'jquery/dist/jquery.min'
  import 'bootstrap/dist/js/bootstrap.min'
  import TabNav from "element-ui/packages/tabs/src/tab-nav";

  export default {
    components: {TabNav},
    data() {
      return {
        // token:1,
            user: JSON.parse(localStorage.getItem('loginUser'))
      }
    },
    // computed: {
    //   username() {
    //     let username = localStorage.getItem('ms_username');
    //     return username ? username : this.name;
    //   }
    // },
    methods: {
      // 用户名下拉菜单选择事件
      // handleCommand(command) {
      //   if (command == 'loginout') {
      //     localStorage.removeItem('ms_username')
      //     this.$router.push('/login');
      //   }
      // },
      logout() {
        localStorage.removeItem('loginUser')
        this.$router.go(0);

      }
    }
  }
</script>
<style scoped>
  .box {
    border-bottom: 1px solid #FEF0F0;
    height: 85px;
  }

  a {
    color: #324157;
  }

  .btn {

  }

  .write-btn {
    float: right;
    width: 100px;
    height: 40px;
    line-height: 24px;
    margin: 8px 15px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
  }
    .logo{
      margin-left: 220px;
  }
    .first{
      margin-left: 20px;
      font-size: 20px;
    }
     .second{
       margin-left: 30px;
       font-size: 20px;
     }
     .third{
       margin-left: 30px;
       font-size: 20px;
     }
  .right{
      margin-right: 30px;
  }
  .ask{
    margin-right: 100px;
    font-size: 20px;
  }
  .pic{
    margin-top: 8px;
    margin-left: 15px;
  }
  .mr-sm-2{
    margin-left: 40px;
  }
</style>
