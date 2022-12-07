import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import './plugins/vee-validate.js'
import router from './router'

import ReactWrapper from '@/components/migration/ReactWrapper.vue'
Vue.component('ReactWrapper', ReactWrapper)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')