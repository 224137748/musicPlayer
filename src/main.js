import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import fastclick from 'fastclick'
import router from './router'
import VueLacyLoad from 'vue-lazyload'
import store from './store'
import 'common/stylus/index.styl'
fastclick.attach(document.body)

Vue.config.productionTip = false
Vue.use(VueLacyLoad, {
  loading: require('common/image/default.jpg')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
