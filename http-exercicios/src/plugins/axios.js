import Vue from 'vue'
import axios from 'axios'


//instância global
//axios.defaults.baseURL = 'https://curso-vue-3c2c9-default-rtdb.firebaseio.com/'


Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios
    }
})