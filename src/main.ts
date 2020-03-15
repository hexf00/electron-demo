import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router/router'
import store from './store'
// import './registerServiceWorker.ts'

import './registerElementUI.ts'

import './styles/app/index.scss'
import Test from './test'
console.log(Test)

Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


