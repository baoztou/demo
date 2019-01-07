<template>
  <div class="me">
    <top :system="system"></top>
    <h1>{{me}}</h1>
    <section>
      <ul>
        <li>
          <div class="avatar">
            <input type="file" accept="image/*" class="uploadFile" @change="upload($event)">
            <img :src="pand==1?baseData.src:userAvatar+baseData.src" width="100" height="100">
            <input type="hidden" v-model="baseData.src">
          </div>
          <h4>
            {{username}}
            <small>身份:{{userlevel==1?'普通用户':'管理员'}}</small>
            <small>联系电话:{{phoneNumber?phoneNumber:'null'}}</small>
          </h4>
          <div>
            <button type="button" @click="submitImg">提交图片</button>
          </div>
        </li>
      </ul>
      <ul>
        <li>
          <router-link to>完善信息</router-link>
          <br>
          <input type="text" v-model="phoneNumbers" placeholder="请输入手机电话">
          <button @click="changephone">提交</button>
        </li>
        <li>
          <router-link to>修改密码</router-link><br>
          <input type="text" v-model="oldPassword" placeholder="请输入老的密码"><br>
          <input type="text" v-model="newPassword" placeholder="请输入新的密码"><br>
          <input type="text" v-model="checkPassword" placeholder="再次输入新密码">
          <button @click="changePassword">提交</button>
        </li>
        <li @click="close">
          <router-link to>注销帐户</router-link>
        </li>
      </ul>
    </section>
    <foot :system="system"></foot>
  </div>
</template>
<script>
import top from "./Top.vue";
import foot from "./Foot.vue";
export default {
  name: "me",
  props: {
    system: Object
  },
  data() {
    return {
      newPassword: "",
      oldPassword: "",
      checkPassword: "",
      phoneNumbers: "",
      phoneNumber: "",
      userlevel: this.$cookies.get("userlevel"),
      id: this.$cookies.get("userId"),
      me: "信息界面",
      pand: "",
      username: this.$cookies.get("username"),
      file: null,
      baseData: {
        src: null
      },
      userAvatar: "http://hejunke123.gz01.bdysite.com/"
    };
  },
  methods: {
    submitImg() {
      let format = {
        userId: this.id,
        send: 1,
        userAvatar: this.baseData.src
      };
      this.axios
        .post("http://hejunke123.gz01.bdysite.com/api/phoneSave.php", format)
        .then(res => {
          alert(res.data.message);
        })
        .catch(err => console.log(err));
    },
    close() {
      this.$cookies.remove("username");
      this.$cookies.remove("userId");
      this.$cookies.remove("userlevel");
      this.$router.push({ path: "/Login" });
    },
    upload(e) {
      let that = this;
      let file = e.target.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        that.baseData.src = reader.result;
      };
      this.pand = e.target.files.length;
    },
    getImg() {
      this.axios(
        "http://hejunke123.gz01.bdysite.com/api/getUser.php?userid=" + this.id
      ).then(res => {
        // reverse
        this.phoneNumber = res.data[0].phoneNumber;
        this.baseData.src = res.data[0].userAvatar;
      });
    },
    changephone() {
      let format = {
        userId: this.id,
        send: 1,
        userAvatar: this.baseData.src,
        phoneNumber: this.phoneNumbers
      };
      this.axios
        .post("http://hejunke123.gz01.bdysite.com/api/editUserSave.php", format)
        .then(res => {
          alert(res.data.message);
        })
        .catch(err => console.log(err));
      this.getImg();
    },
    changePassword: function() {
      let format = {
        userId: this.id,
        send: 1,
        newPassword:this.newPassword,
        oldPassword:this.oldPassword,
        checkPassword:this.checkPassword
      };
      this.axios
        .post("http://hejunke123.gz01.bdysite.com/api/password.php", format)
        .then(res => {
          alert(res.data.message);
        })
        .catch(err => console.log(err));
    }
  },
  components: {
    top,
    foot
  },
  created() {
    this.getImg();
  }
};
</script>
<style scoped>
.me {
  background: #f1f1f1;
}
h1 {
  margin: 25px auto;
  display: table;
}
ul {
  font-size: 22px;
  overflow: hidden;
  background: #fff;
  margin-bottom: 25px;
  padding-bottom: 25px;
}
ul li {
  width: 85%;
  margin: 0 auto;
  padding: 25px 0px;
}
ul:not(:first-child) li {
  border-bottom: 1px solid #ddd;
}
ul li h4 {
  font-size: 27px;
  padding: 0 16px 0px 120px;
  color: black;
}

ul li h4 small {
  display: block;
  font-weight: normal;
  font-size: 75%;
  color: #666;
}
.avatar {
  position: relative;
  height: 100px;
  width: 100px;
  left: 0;
  top: 85px;
  border: 1px solid #eee;
  display: block;
}
input[type="file"] {
  height: 100px;
  width: 100px;
  position: absolute;
  top: 0px;
  z-index: 10;
  opacity: 0;
}
</style>
