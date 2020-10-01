import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueRouter)
Vue.config.productionTip = false
const router = new VueRouter({
  mode: 'history',
  routes, // short for `routes: routes`,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
