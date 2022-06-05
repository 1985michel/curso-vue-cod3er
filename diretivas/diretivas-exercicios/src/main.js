import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//diretiva personlaizada

Vue.directive('destaque', {
	bind(el, binding, vnode) {
		el.style.backgroundColor = 'lightGreen'
	}
})

Vue.directive('destaque-com-parametro', {
	bind(el, binding, vnode) {
		el.style.backgroundColor = binding.value
	}
})

Vue.directive('destaque-com-modificador', {

	//no caso abaixo ele vai testar. Se tiver o argumento 'fundo', ele aplica ao fundo. Se não tiver, ele aplica a cor da fonte
	bind(el, binding, vnode) {
		if (binding.arg === 'fundo') {
			el.style.backgroundColor = binding.value
		} else {
			el.style.color = binding.value
		}
		// atenção que só tem como passar um argumento, mas este argumento pode ser um objeto com vários valores dentro
	}
})

Vue.directive('destaque-com-modificador2', {

	bind(el, binding, vnode) {


		//se tiver um modificador "atrasar" ele vai atrasar o layout por 3 segundos

		let atraso = 0
		if (binding.modifiers['atrasar']) atraso = 3000

		setTimeout(() => {
			if (binding.arg === 'fundo') {
				el.style.backgroundColor = binding.value
			} else {
				el.style.color = binding.value
			}
		}, atraso)

	}
})



new Vue({
	render: h => h(App),
}).$mount('#app')
