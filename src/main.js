import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '../node_modules/material-design-icons/iconfont/material-icons.css'
import vuetify from './plugins/vuetify'
import Header from './components/Header.vue'
import VueScrollTo from 'vue-scrollto'
import AnimateCss from 'animate.css'
import moment from 'moment'

Vue.config.productionTip = false

Vue.use(VueAxios,axios,AnimateCss);

Vue.component('Header',Header)

Vue.use(VueScrollTo, {
  duration: 1000,
  easing: "ease",
  offset: -60
})

new Vue({
  router,
  vuetify,
  VueScrollTo,
  moment,
  render: h => h(App)
}).$mount('#app')

