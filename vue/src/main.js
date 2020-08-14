import Vue from 'vue'
import App from './App.vue'

// import mavonEditor from '@matataki/editor'
import '@matataki/editor/dist/css/index.css'

// Vue.prototype.$mavonEditor = mavonEditor
// Vue.use(mavonEditor)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
