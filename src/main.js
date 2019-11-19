import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'assets/reset.css'
import './filters/img'
import './filters/price'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
