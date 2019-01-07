<template>
   <footer>{{system.copyright}}</footer>
</template>
<script>
export default {
  name: 'foot',
  props: {
    system: Object
  }
}
</script>
<!-- 添加“作用域”属性以仅将CSS限制在此组件中 -->
<style scoped>
   footer{
       padding:25px 0;
       text-align:center;
   }
</style>