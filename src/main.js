import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
:一条注释
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
