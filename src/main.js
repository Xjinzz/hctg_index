
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './components/index.vue'
import router from './router/index.js'
//引入饿了么组件
import ElementUI from 'element-ui'

import '../node_modules/element-ui/lib/theme-chalk/index.css'
import '../static/css/reset.css'
import menu1 from "./components/menu.vue";
import myheader from "@/components/header.vue";
import store from "./store/store.js";

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI)


new Vue({
  el: '#app',
  router,
  store,
  template: '<App><myheader slot="myheader"/><menu1 slot="menu"></menu1></App>',
  components: { App, menu1, myheader }
})