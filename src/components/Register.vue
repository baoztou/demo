<template>
  <div class="register">
    <top :system="system"></top>
    <h1>{{ msg }}</h1>
    <form @submit.prevent="register">
      <div class="avatar">
        <input type="file" accept="image/*" class="uploadFile" @change="upload($event)">
        <img :src="baseData.src" width="150" height="150">
        <input type="hidden" v-model="baseData.src">
      </div>
      <input type="text" placeholder="请输入账号" v-model="username">
      <input type="text" placeholder="请输入密码" v-model="password">
      <button type="submit">注册</button>
    </form>
    <foot :system="system"></foot>
  </div>
</template>

<script>
import top from "./Top.vue";
import foot from "./Foot.vue";
export default {
  name: "register",
  props: {
    system: Object
  },
  data() {
    return {
      msg: "欢迎用户,登入何俊克的页面",
      username: "",
      password: "",
      send: 1,
      file: null,
      baseData: {
        src: null
      }
    };
  },
  methods: {
    upload(e) {
      let that = this;
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        that.baseData.src = reader.result
      }
    },
    register() {
      const format = {
        username: this.username,
        password: this.password,
        send: this.send,
        userAvatar: this.baseData.src
      }
      this.axios
        .post("http://hejunke123.gz01.bdysite.com/api/registerSave.php", format)
        .then(res => {
          alert(res.data.message);
          if (res.data.message == "注册成功") {
            this.$router.push({ path: "/Login" });
          }
        }).catch(err=>console.log(err))
    }
  },
  components: {
    top,
    foot
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  width: 90%;
  margin: 40px auto 0px;
}
input {
  display: block;
  width: 100%;
  height: 50px;
  text-indent: 20px;
  margin-bottom: 20px;
  font-size: 20px;
}
h1{
    width: 320px;
    margin: 30px auto;
    text-align: center
}
button {
  width: 60px;
  height: 30px;
  font-size: 17px;
}
.avatar{
    position: relative;
    height: 150px;
    width: 150px;
    left:0;
    right:0;
    margin:40px auto;
    border:1px solid #eee
}
input[type="file"] {
  height: 150px;
  width: 150px;
  position: absolute;
  top: 0px;
  z-index: 10;
  opacity: 0;
}
</style>
