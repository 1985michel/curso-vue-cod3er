import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  vuetify,

  //render é o método é h é a função que cria o elemento
  render: h => h(App)
}).$mount('#app')
