import Vue from 'vue'
import Home from './components/simple-widget.vue'

Vue.config.productionTip = false

import VueWidgets from '../src'
// //import '../dist/styles/vue-widgets.css'
// import 'vue-awesome/icons'
// import Icon from 'vue-awesome/components/Icon'

Vue.use(VueWidgets)
  //Vue.component('Icon', Icon)
  /* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(Home)
})
