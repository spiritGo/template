import Vue from 'vue'
import App from './App'
import utils from 'common/js/utils.js'

Vue.config.productionTip = false
Vue.prototype.$utils = utils;

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
