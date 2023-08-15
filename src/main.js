import Vue from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/js/dist/modal.js'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCheck, faPen, faXmark, faCircleCheck } from '@fortawesome/free-solid-svg-icons'

library.add(faCheck, faXmark, faPen, faCircleCheck)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  App,
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

