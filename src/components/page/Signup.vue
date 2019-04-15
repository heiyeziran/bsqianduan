<template>
  <div class="main">
    <div class="logo">
      <router-link to="/index">
        <img src="static/img/logo.png" class="logo">
      </router-link>
    </div>
    <div class="sign">
      <div class="row">
        <router-link to="/sign_in"><h4 class="sign_in active">登录</h4></router-link>
        <a><h4>·</h4></a>
        <router-link to="sign_up"><h4 class="sign_up">注册</h4></router-link>
      </div>
      <div class="wirte">
        <div>
          <br class="input-group">
          <div class="email">
            <input type="text" class="form-control" placeholder="手机号或邮箱" v-model="email"><br>
          </div>
          <input type="text" class="form-control" placeholder="密码" v-model="password"><br>
          <div class="avatar">
            <span class="title">选择头像</span>
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </div>
          <div class="rember">
          </div><br>
          <div class="btn">
            <b-button variant="primary" size="lg" @click="onClick">注册</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Signin",
    data() {
      return {
        email: '',
        password: '',
        imageUrl: ''
      }
    },
    methods: {
      onClick() {
        var that = this;
        this.$http
          .post('http://localhost:8080/user/sign_up', {"email": this.email, "password": this.password,"avatar":this.imageUrl})
          .then(function (response) {
            alert(JSON.stringify(response.data.data));
            localStorage.setItem("loginUser", JSON.stringify(response.data.data))
            that.$router.push("/")
          })
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt5M = file.size / 1024 / 1024 < 5;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt5M) {
          this.$message.error('上传头像图片大小不能超过 5MB!');
        }
        return isJPG && isLt5M;
    }
    }
  }
</script>

<style scoped>
  .title{
    margin-left: -10px;
  }
  .avatar-uploader{
    margin-left: 120px;
    margin-top: -20px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width:60px;
    height: 60px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width:25px;
    height:25px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 60px;
    height: 60px;
    display: block;
  }
  .main {
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
  }
  .logo {
    position: absolute;
    top: 56px;
    margin-left: 50px;
  }
  .sign {
    width: 400px;
    margin: 150px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
  }
  h4{
    padding: 10px;
    font-family: "宋体";
  }
  h4:hover {
    text-decoration: underline;
  }
  .sign_in {
    margin-left: 80px;
    cursor: pointer;
  }
  .sign_up {
    cursor: pointer;
  }
  input {
    background-color: gainsboro;
  }
  .rember{
    margin-top: 20px;
  }
  .btn {
    width:250px;
    border-radius: 50px;
  }

  .line_02 span{
    position: relative;
    top: -8px;
    background: #fff;
    padding: 0 20px;
  }
  ul li{
    list-style-type: none;
    padding: 20px 15px;
    cursor: pointer;
  }
  ul li span{
    font-size: 18px;
  }
  .logo{
    margin-top: 20px;
    margin-left: 300px;
    width: 60px;
    height: 60px;
  }
</style>
