import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'

Vue.config.productionTip = false

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
