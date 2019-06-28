<template>
  <div id="app">
     <!-- 3.用标签的形式使用 -->
     <Nav/>
    <router-view/>
  </div>
</template>
<script>
//1.引入组件
import Nav from './components/Nav'
export default {
  //2.注册
    components:{
      Nav
    }
}
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
}
a{
  text-decoration: none;
  color: #3333;
}
</style>
