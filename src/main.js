import {
  createProvider
  // apolloClient
} from './vue-apollo';
import {
  BootstrapVue
} from 'bootstrap-vue';
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import Swal from 'sweetalert2/dist/sweetalert2.js'

import './assets/scss/main.scss';
import 'sweetalert2/src/sweetalert2.scss';

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: false,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
});

window.Toast = Toast;
window.Swal = Swal;

Vue.config.productionTip = false
Vue.use(BootstrapVue);

new Vue({
  store,
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');