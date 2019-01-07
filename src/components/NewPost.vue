<template>
  <div class="register">
    <top :system="system"></top>
    <h1>{{ msg }}</h1>
    <form @submit.prevent="newPost">
      <input type="text" placeholder="聊天室名称" v-model="title">
      <quill-editor
        ref="myTextEditor"
        :content="content"
        :config="editorOption"
        @change="onEditorChange($event)"
      ></quill-editor>
      <button>创建聊天室</button>
    </form>

    <foot :system="system"></foot>
  </div>
</template>

<script>
import top from "./Top.vue";
import foot from "./Foot.vue";
import { quillEditor } from "vue-quill-editor";
export default {
  name: "register",
  props: {
    system: Object
  },
  data() {
    return {
      msg: "欢迎您来到Vue.js的世界",
      content: "",
      editorOption: {},
      send: "创建聊天室",
      title:'',
      body:''
    };
  },
  methods: {
    newPost() {
      const format = {
        title: this.title,
        body: this.body,
        send: this.send
      }
      this.axios
        .post("http://hejunke123.gz01.bdysite.com/api/chatAddSave.php", format)
        .then(res => {
          alert(res.data.message)
          if(res.data.message=='聊天室创建成功'){
             this.$router.push({path:'/'})
          }
        }).catch(err=>console.log(err))
    },
    onEditorBlur(editor) {
      console.log("editor blur!", editor);
    },
    onEditorFocus(editor) {
      console.log("editor focus!", editor);
    },
    onEditorReady(editor) {
      console.log("editor ready!", editor);
    },
    onEditorChange({ editor, html, text }) {
      // console.log('editor change!', editor, html, text)
      this.content = html;
      this.body=text
    }
  },
  components: {
    top,
    foot,
    quillEditor
  },
  computed: {
    editor() {
      return this.$refs.myTextEditor.quillEditor;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
form {
  height: 160px;
  width: 90%;
  margin: 50px auto;
}
input {
  height: 50px;
  width: 100%;
  font-size: 20px;
  text-indent: 20px;
  margin-bottom: 10px;
}
button {
  height: 40px;
  font-size: 15px;
  margin-top: 15px;
  padding: 10px;
}
</style>
