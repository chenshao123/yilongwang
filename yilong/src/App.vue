<template>
  <div id="app">
 
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import router from './router';
import Element from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Element);
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
