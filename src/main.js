import Vue from 'vue'
import App from './App.vue'
import Meta from 'vue-meta'

Vue.use(Meta)
Vue.config.productionTip = false
import router from './router/index'
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
