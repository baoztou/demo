<template>
  <div class="index">
      <top :system="system"/>
      <section class="news wrap">
          <ul>
              <li v-for="(val,index) in news" :key="index">
                  <div class="card">
                       <div class="card-header">
                            <h1 class="card-header-title">
                                <small><span> {{val.createDate.substring(0,4)}} </span> <span>{{ val.createDate.substring(5) }}</span></small>
                                <router-link :to={path:/newView/+val.chatId}> 
                                    {{val.title}}
                                </router-link>
                            </h1>
                       </div>
                       <div class="card-body">
                          {{ val.body }}
                       </div>
                       <div class="card-footer">
                            
                       </div>
                  </div>
              </li>
          </ul>
      </section>
      <foot :system="system"></foot>
  </div>
</template>

<script>
import top from './Top.vue'
import foot from './Foot.vue'
export default {
  name: 'Index',
  props: {
    system: Object
  },
  data(){
    return {
        news:[]
    }
  },
  methods:{
      getNewsList(){
          this.axios.get('http://hejunke123.gz01.bdysite.com/api/getChatList.php')
          .then((res)=>{
              this.news = res.data
              console.log(this.news)
          })
      }
  },
  created(){
     this.getNewsList()
  },
  components:{
      top,foot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   header{
       background: #000
   }
   .news {
       width:900px;

   }
   .news ul{
       margin:25px auto;
       width:96%;
   }
   .news ul li{
       line-height: 35px;
   }
   
</style>
