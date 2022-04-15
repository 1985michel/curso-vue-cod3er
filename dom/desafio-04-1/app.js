new Vue({
	el: '#desafio',
	data: {
		efeitoVigente: 'encolher',

		//as duas variáveis abaixo são meu switch para poder desligar o efeito. Não é pedido no desafio mas eu quis fazer.
		efeitoOn: false,
		efeitando: '',
		classeUsuario: '',
		classeUsuario4: '',
		aplicarClasse: '',
		circulo: false


	},
	computed: {
		aplicarClasse() {
			if (this.aplicarClasse == 'true') {
				aplicarClasse
			}
		}
	},
	methods: {
		iniciarEfeito() {
			this.efeitoOn = !this.efeitoOn;

			if (this.efeitoOn) {
				this.efeitando = setInterval(() => {
					this.efeitoVigente = this.efeitoVigente == 'encolher' ? 'destaque' : 'encolher';
				}, 500)
			} else {
				clearInterval(this.efeitando);//desliga o setInterval
			}

		},
		iniciarProgresso() {

		},
		setCirculo(event) {
			if (event.target.value == 'true') {
				this.circulo = true
			} else if (event.target.value == 'false') {
				this.circulo = false;
			}
		}
	}
})
