// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './routes'
import Resource from 'vue-resource'
import vueSmoothScroll from 'vue-smoothscroll'
/* eslint-disable no-new */
Vue.use(VueRouter)
Vue.use(Resource)
Vue.use(vueSmoothScroll)
var router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 }
  }
})

new Vue({
  el: '#home',
  router: router,
  render: h => h(App)
})
