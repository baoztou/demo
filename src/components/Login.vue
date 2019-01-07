<template>
  <div class="register">
    <top :system="system"></top>
    <h1>{{ msg }}</h1>
    <form @submit.prevent="login">
      <input type="text" placeholder="请输入账号" v-model="username">
      <input type="text" placeholder="请输入密码" v-model="password">
      <button type="submit">登录</button>
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
      msg: "欢迎您来到Vue.js的世界",
      password: "",
      username: "",
      send: 1
    }
  },
  methods: {
    login() {
      const format = {
        username: this.username,
        password: this.password,
        send: this.send
      }
      this.axios
        .post("http://hejunke123.gz01.bdysite.com/api/loginSave.php", format)
        .then(res => {
          alert(res.data.message)
          if (res.data.message == "登陆成功") {
            this.$cookies.set('username',this.username)
            this.$cookies.set('userId',res.data.userId)
            this.$cookies.set('userlevel',1)
            this.$router.push({ path: "/" })
          }
        })
    }
  },
  components: {
    top,
    foot
  },
}
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
button {
  width: 60px;
  height: 30px;
  font-size: 17px;
}
</style>
