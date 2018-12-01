import Vue from 'vue'
import App from './App.vue'
import './plugins/scroll-spy'
import './plugins/smooth-scroll'
import './plugins/vee-validate'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
