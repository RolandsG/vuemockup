import Vue from 'vue'
import VueGoogleCharts from 'vue-google-charts';
import axios from 'axios';
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(VueGoogleCharts);

Vue.prototype.$http = axios;
/* eslint prefer-template: 0 */
const token = localStorage.getItem('token');
if (token) {
  const fullToken = 'Token ' + token;
  Vue.prototype.$http.defaults.headers.common.Authorization = fullToken;
}

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
