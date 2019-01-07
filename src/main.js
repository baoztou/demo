import Vue from 'vue'
import App from './App.vue'
import router from './scripts/router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
import VueCookies from 'vue-cookies'
import VueQuillEditor from 'vue-quill-editor'
Vue.use(VueQuillEditor)
Vue.use(VueCookies)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
axios.interceptors.request.use(function (config) {
  if (config.method == "post") {
    config.data = qs.stringify(config.data)
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
router.beforeEach((to, from, next) => {
  if($cookies.get('username')==null){
    if (to.path == '/Login' || to.path == '/Register') {
      next()
    } else {
          alert('请先登录')   
          next('/Login')
    }
  }else{
    next()
  }

})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')