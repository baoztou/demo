(function(t){function e(e){for(var n,r,i=e[0],u=e[1],c=e[2],d=0,p=[];d<i.length;d++)r=i[d],a[r]&&p.push(a[r][0]),a[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,i=1;i<s.length;i++){var u=s[i];0!==a[u]&&(n=!1)}n&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var n={},a={app:0},o=[];function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=n,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(s,n,function(e){return t[e]}.bind(null,n));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("64a9"),a=s.n(n);a.a},"0d39":function(t,e,s){"use strict";var n=s("52ae"),a=s.n(n);a.a},"10c9":function(t,e,s){"use strict";var n=s("5719"),a=s.n(n);a.a},"181a":function(t,e,s){},"30d3":function(t,e,s){"use strict";var n=s("36b5"),a=s.n(n);a.a},"36b5":function(t,e,s){},"52ae":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view",{attrs:{system:t.system}})],1)},o=[],r={name:"app",data:function(){return{system:{logo:s("cf05"),title:"欢迎您来到Vue.js的世界",copyright:"版权所有@0918"}}},components:{}},i=r,u=(s("034f"),s("2877")),c=Object(u["a"])(i,a,o,!1,null,null,null);c.options.__file="App.vue";var l=c.exports,d=s("8c4f"),p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("top",{attrs:{system:t.system}}),s("section",{staticClass:"news wrap"},[s("ul",t._l(t.news,function(e,n){return s("li",{key:n},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h1",{staticClass:"card-header-title"},[s("small",[s("span",[t._v(" "+t._s(e.createDate.substring(0,4))+" ")]),s("span",[t._v(t._s(e.createDate.substring(5)))])]),s("router-link",{attrs:{to:{path:/newView/+e.chatId}}},[t._v(" \n                                  "+t._s(e.title)+"\n                              ")])],1)]),s("div",{staticClass:"card-body"},[t._v("\n                        "+t._s(e.body)+"\n                     ")]),s("div",{staticClass:"card-footer"})])])}),0)]),s("foot",{attrs:{system:t.system}})],1)},m=[],h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"top"},[s("div",{staticClass:"wrap"},[s("div",{staticClass:"logo"},[s("img",{attrs:{src:t.system.logo,alt:t.system.title,title:t.system.title}}),s("h1",[t._v(t._s(t.system.title))])]),s("div",{staticClass:"nav"},[s("ul",[s("li",[s("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),s("li",[s("router-link",{attrs:{to:"/newPost"}},[t._v("发布聊天室")])],1),s("li",[s("router-link",{attrs:{to:"/Login"}},[t._v("会员登陆")])],1),s("li",[s("router-link",{attrs:{to:"/Register"}},[t._v("用户注册")])],1),s("li",[s("router-link",{attrs:{to:"/me"}},[t._v("信息界面")])],1)])])])])},v=[],f={name:"top",props:{system:Object}},g=f,b=(s("a573"),Object(u["a"])(g,h,v,!1,null,"9a9d4372",null));b.options.__file="Top.vue";var w=b.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",[t._v(t._s(t.system.copyright))])},_=[],k={name:"foot",props:{system:Object}},x=k,C=(s("30d3"),Object(u["a"])(x,y,_,!1,null,"6913701a",null));C.options.__file="Foot.vue";var P=C.exports,j={name:"Index",props:{system:Object},data:function(){return{news:[]}},methods:{getNewsList:function(){var t=this;this.axios.get("http://hejunke123.gz01.bdysite.com/api/getChatList.php").then(function(e){t.news=e.data,console.log(t.news)})}},created:function(){this.getNewsList()},components:{top:w,foot:P}},N=j,E=(s("10c9"),Object(u["a"])(N,p,m,!1,null,"279d7c6d",null));E.options.__file="Index.vue";var $=E.exports,O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"newview"},[s("top",{attrs:{system:t.system}}),s("div",{staticClass:"wrap view"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h1",{staticClass:"card-header-title"},[t._v(t._s(""==t.newsContent.title?"正在等着你来说第一句话":t.newsContent.title))])]),s("div",{staticClass:"card-body"},[t._v(t._s(null==t.newsContent.title?"你是第一个进来的，需要你来解锁这其中的私密":t.newsContent.body))])]),s("div",{staticClass:"commentsAdd"},[s("h1",[t._v("发布留言")]),s("div",{staticClass:"edit_container"},[s("quill-editor",{ref:"myQuillEditor",attrs:{options:t.editorOption},on:{blur:function(e){t.onEditorBlur(e)},focus:function(e){t.onEditorFocus(e)},change:function(e){t.onEditorChange(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),s("button",{on:{click:t.newview}},[t._v("提交")])],1)]),s("ul",{staticClass:"comments"},[s("h1",[t._v("聊天评论内容")]),t._l(t.newsview,function(e,n){return s("li",{key:n},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("h4",{staticClass:"card-header-title"},[s("div",{staticClass:"userAvatar"},[null!=e.userAvatar?s("img",{attrs:{src:t.userAvatar+e.userAvatar,alt:""}}):null==e.userAvatar?s("img",{attrs:{src:t.system.logo,alt:""}}):t._e()]),s("h3",{staticClass:"userName"},[s("em",[t._v(t._s(null==e.userName?"游客":e.userName))]),s("em",[t._v(t._s(e.id)+" | "+t._s(e.createTime))])])])]),s("div",{staticClass:"card-body",domProps:{innerHTML:t._s(e.chatBody)}})])])}),t.commentslength!=t.end?s("h6",{staticClass:"onloadMore",on:{click:function(e){t.onloadmore()}}},[t._v("加载更多")]):s("p",{staticClass:"onloadend"},[t._v("我是有底线的")])],2)]),s("foot",{attrs:{system:t.system}})],1)},D=[],I=(s("a481"),s("c5f6"),s("953d")),A=s.n(I),L=(s("a753"),s("8096"),s("14e1"),{name:"newview",props:{system:Object,height:{type:Number,default:170}},data:function(){return{userId:this.$cookies.get("userId"),id:this.$route.params.id,newsview:[],commentslength:0,newsContent:{},userAvatar:"http://hejunke123.gz01.bdysite.com/",start:0,end:10,content:"",editorOption:{modules:{toolbar:[["bold","italic","link","blockquote","code-block","image","video"]]}},str:""}},computed:{editor:function(){return this.$refs.myQuillEditor.quill}},methods:{newview:function(){this.axios.post("http://hejunke123.gz01.bdysite.com/api/messageAdd.php",{chatId:this.id,content:this.content,username:this.$cookies.get("username"),userId:this.userId}).then(function(t){return console.log(t)}).catch(function(t){return console.log(t)}),this.getChatall(this.start,this.end)},onloadmore:function(){var t=10;this.commentslength-this.newsview.length<10&&(t=this.commentslength-this.newsview.length),this.end=this.end+=t,this.getChatall(0,this.end)},getChatall:function(t,e){var s=this;""!=t&&parseInt(t),""==e||parseInt(e),this.axios("http://hejunke123.gz01.bdysite.com/api/getchatAll.php?chatId="+this.id).then(function(n){s.commentslength=n.data.message.length,s.newsview=n.data.message.reverse().splice(t,e),s.newsContent=s.newsview[0]})},escapeStringHTML:function(t){return t=t.replace(/&lt;/g,"<"),t=t.replace(/&gt;/g,">"),t},onEditorBlur:function(){},onEditorFocus:function(){},onEditorChange:function(){}},components:{top:w,foot:P,quillEditor:I["quillEditor"]},created:function(){this.getChatall(this.start,this.end)},mounted:function(){}}),z=L,S=(s("9023"),Object(u["a"])(z,O,D,!1,null,"915aafd0",null));S.options.__file="NewView.vue";var q=S.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register"},[s("top",{attrs:{system:t.system}}),s("h1",[t._v(t._s(t.msg))]),s("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"请输入账号"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("button",{attrs:{type:"submit"}},[t._v("登录")])]),s("foot",{attrs:{system:t.system}})],1)},T=[],F={name:"register",props:{system:Object},data:function(){return{msg:"欢迎您来到Vue.js的世界",password:"",username:"",send:1}},methods:{login:function(){var t=this,e={username:this.username,password:this.password,send:this.send};this.axios.post("http://hejunke123.gz01.bdysite.com/api/loginSave.php",e).then(function(e){alert(e.data.message),"登陆成功"==e.data.message&&(t.$cookies.set("username",t.username),t.$cookies.set("userId",e.data.userId),t.$cookies.set("userlevel",1),t.$router.push({path:"/"}))})}},components:{top:w,foot:P}},M=F,V=(s("0d39"),Object(u["a"])(M,R,T,!1,null,"55befb8f",null));V.options.__file="Login.vue";var B=V.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register"},[s("top",{attrs:{system:t.system}}),s("h1",[t._v(t._s(t.msg))]),s("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[s("div",{staticClass:"avatar"},[s("input",{staticClass:"uploadFile",attrs:{type:"file",accept:"image/*"},on:{change:function(e){t.upload(e)}}}),s("img",{attrs:{src:t.baseData.src,width:"150",height:"150"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.baseData.src,expression:"baseData.src"}],attrs:{type:"hidden"},domProps:{value:t.baseData.src},on:{input:function(e){e.target.composing||t.$set(t.baseData,"src",e.target.value)}}})]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],attrs:{type:"text",placeholder:"请输入账号"},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",placeholder:"请输入密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("button",{attrs:{type:"submit"}},[t._v("注册")])]),s("foot",{attrs:{system:t.system}})],1)},H=[],J={name:"register",props:{system:Object},data:function(){return{msg:"欢迎用户,登入何俊克的页面",username:"",password:"",send:1,file:null,baseData:{src:null}}},methods:{upload:function(t){var e=this,s=t.target.files[0],n=new FileReader;n.readAsDataURL(s),n.onload=function(){e.baseData.src=n.result}},register:function(){var t=this,e={username:this.username,password:this.password,send:this.send,userAvatar:this.baseData.src};this.axios.post("http://hejunke123.gz01.bdysite.com/api/registerSave.php",e).then(function(e){"注册成功"==e.data.message&&(alert(e.data.message),t.$router.push({path:"/Login"})),console.log(e)}).catch(function(t){return console.log(t)})}},components:{top:w,foot:P}},Q=J,G=(s("fe80"),Object(u["a"])(Q,U,H,!1,null,"b027bcb6",null));G.options.__file="Register.vue";var K=G.exports,W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register"},[s("top",{attrs:{system:t.system}}),s("h1",[t._v(t._s(t.msg))]),s("form",{on:{submit:function(e){return e.preventDefault(),t.newPost(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"聊天室名称"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),s("quill-editor",{ref:"myTextEditor",attrs:{content:t.content,config:t.editorOption},on:{change:function(e){t.onEditorChange(e)}}}),s("button",[t._v("创建聊天室")])],1),s("foot",{attrs:{system:t.system}})],1)},X=[],Y={name:"register",props:{system:Object},data:function(){return{msg:"欢迎您来到Vue.js的世界",content:"",editorOption:{},send:"创建聊天室",title:"",body:""}},methods:{newPost:function(){var t=this,e={title:this.title,body:this.body,send:this.send};this.axios.post("http://hejunke123.gz01.bdysite.com/api/chatAddSave.php",e).then(function(e){alert(e.data.message),"聊天室创建成功"==e.data.message&&t.$router.push({path:"/"})}).catch(function(t){return console.log(t)})},onEditorBlur:function(t){console.log("editor blur!",t)},onEditorFocus:function(t){console.log("editor focus!",t)},onEditorReady:function(t){console.log("editor ready!",t)},onEditorChange:function(t){t.editor;var e=t.html,s=t.text;this.content=e,this.body=s}},components:{top:w,foot:P,quillEditor:I["quillEditor"]},computed:{editor:function(){return this.$refs.myTextEditor.quillEditor}}},Z=Y,tt=(s("b03f"),Object(u["a"])(Z,W,X,!1,null,"22e3b5b4",null));tt.options.__file="NewPost.vue";var et=tt.exports,st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"me"},[s("top",{attrs:{system:t.system}}),s("h1",[t._v(t._s(t.me))]),s("section",[s("ul",[s("li",[s("div",{staticClass:"avatar"},[s("input",{staticClass:"uploadFile",attrs:{type:"file",accept:"image/*"},on:{change:function(e){t.upload(e)}}}),s("img",{attrs:{src:1==t.pand?t.baseData.src:t.userAvatar+t.baseData.src,width:"100",height:"100"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.baseData.src,expression:"baseData.src"}],attrs:{type:"hidden"},domProps:{value:t.baseData.src},on:{input:function(e){e.target.composing||t.$set(t.baseData,"src",e.target.value)}}})]),s("h4",[t._v("\n          "+t._s(t.username)+"\n          "),s("small",[t._v("身份:"+t._s(1==t.userlevel?"普通用户":"管理员"))]),s("small",[t._v("联系电话:"+t._s(t.phoneNumber?t.phoneNumber:"null"))])]),s("div",[s("button",{attrs:{type:"button"},on:{click:t.submitImg}},[t._v("提交图片")])])])]),s("ul",[s("li",[s("router-link",{attrs:{to:""}},[t._v("完善信息")]),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumbers,expression:"phoneNumbers"}],attrs:{type:"text",placeholder:"请输入手机电话"},domProps:{value:t.phoneNumbers},on:{input:function(e){e.target.composing||(t.phoneNumbers=e.target.value)}}}),s("button",{on:{click:t.changephone}},[t._v("提交")])],1),s("li",[s("router-link",{attrs:{to:""}},[t._v("修改密码")]),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.oldPassword,expression:"oldPassword"}],attrs:{type:"text",placeholder:"请输入老的密码"},domProps:{value:t.oldPassword},on:{input:function(e){e.target.composing||(t.oldPassword=e.target.value)}}}),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.newPassword,expression:"newPassword"}],attrs:{type:"text",placeholder:"请输入新的密码"},domProps:{value:t.newPassword},on:{input:function(e){e.target.composing||(t.newPassword=e.target.value)}}}),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:t.checkPassword,expression:"checkPassword"}],attrs:{type:"text",placeholder:"再次输入新密码"},domProps:{value:t.checkPassword},on:{input:function(e){e.target.composing||(t.checkPassword=e.target.value)}}}),s("button",{on:{click:t.changePassword}},[t._v("提交")])],1),s("li",{on:{click:t.close}},[s("router-link",{attrs:{to:""}},[t._v("注销帐户")])],1)])]),s("foot",{attrs:{system:t.system}})],1)},nt=[],at={name:"me",props:{system:Object},data:function(){return{newPassword:"",oldPassword:"",checkPassword:"",phoneNumbers:"",phoneNumber:"",userlevel:this.$cookies.get("userlevel"),id:this.$cookies.get("userId"),me:"信息界面",pand:"",username:this.$cookies.get("username"),file:null,baseData:{src:null},userAvatar:"http://hejunke123.gz01.bdysite.com/"}},methods:{submitImg:function(){var t={userId:this.id,send:1,userAvatar:this.baseData.src};this.axios.post("http://hejunke123.gz01.bdysite.com/api/phoneSave.php",t).then(function(t){alert(t.data.message)}).catch(function(t){return console.log(t)})},close:function(){this.$cookies.remove("username"),this.$cookies.remove("userId"),this.$cookies.remove("userlevel"),this.$router.push({path:"/Login"})},upload:function(t){var e=this,s=t.target.files[0],n=new FileReader;n.readAsDataURL(s),n.onload=function(){e.baseData.src=n.result},this.pand=t.target.files.length},getImg:function(){var t=this;this.axios("http://hejunke123.gz01.bdysite.com/api/getUser.php?userid="+this.id).then(function(e){t.phoneNumber=e.data[0].phoneNumber,t.baseData.src=e.data[0].userAvatar})},changephone:function(){var t={userId:this.id,send:1,userAvatar:this.baseData.src,phoneNumber:this.phoneNumbers};this.axios.post("http://hejunke123.gz01.bdysite.com/api/editUserSave.php",t).then(function(t){alert(t.data.message)}).catch(function(t){return console.log(t)}),this.getImg()},changePassword:function(){var t={userId:this.id,send:1,newPassword:this.newPassword,oldPassword:this.oldPassword,checkPassword:this.checkPassword};this.axios.post("http://hejunke123.gz01.bdysite.com/api/password.php",t).then(function(t){alert(t.data.message)}).catch(function(t){return console.log(t)})}},components:{top:w,foot:P},created:function(){this.getImg()}},ot=at,rt=(s("8ed5"),Object(u["a"])(ot,st,nt,!1,null,"1a22b148",null));rt.options.__file="me.vue";var it=rt.exports;n["a"].use(d["a"]);var ut=[{path:"/",component:$},{path:"/NewView/:id",component:q},{path:"/Login",component:B},{path:"/Register",component:K},{path:"/NewPost",component:et},{path:"/me",component:it}],ct=new d["a"]({base:"/demoEnd/dist/",routes:ut,mode:"history"}),lt=ct,dt=s("bc3a"),pt=s.n(dt),mt=s("a7fe"),ht=s.n(mt),vt=s("4328"),ft=s.n(vt),gt=s("2b27"),bt=s.n(gt);n["a"].use(A.a),n["a"].use(bt.a),n["a"].config.productionTip=!1,n["a"].use(ht.a,pt.a),pt.a.interceptors.request.use(function(t){return"post"==t.method&&(t.data=ft.a.stringify(t.data)),t},function(t){return Promise.reject(t)}),lt.beforeEach(function(t,e,s){null==$cookies.get("username")?"/Login"==t.path||"/Register"==t.path?s():(alert("请先登录"),s("/Login")):s()}),new n["a"]({router:lt,render:function(t){return t(l)}}).$mount("#app")},5719:function(t,e,s){},"64a9":function(t,e,s){},"85ac":function(t,e,s){},"8ed5":function(t,e,s){"use strict";var n=s("181a"),a=s.n(n);a.a},9023:function(t,e,s){"use strict";var n=s("9ac0"),a=s.n(n);a.a},"9ac0":function(t,e,s){},a573:function(t,e,s){"use strict";var n=s("b545"),a=s.n(n);a.a},b03f:function(t,e,s){"use strict";var n=s("e50a"),a=s.n(n);a.a},b545:function(t,e,s){},cf05:function(t,e,s){t.exports='.'+s.p+"img/logo.82b9c7a5.png"},e50a:function(t,e,s){},fe80:function(t,e,s){"use strict";var n=s("85ac"),a=s.n(n);a.a}});
//# sourceMappingURL=app.6a970b09.js.map