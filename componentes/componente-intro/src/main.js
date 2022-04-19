import Vue from 'vue'
import App from './App.vue'
import MeusContadores from './Contadores.vue'
/* import MeuContador from './Contador.vue' */

Vue.config.productionTip = false
Vue.component('app-contadores', MeusContadores)
/* Vue.component('app-contador', MeuContador) */

new Vue({
  render: h => h(App),
}).$mount('#app')
