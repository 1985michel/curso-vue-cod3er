new Vue({
	el: '#desafio',
	data: {
		efeito: 'encolher',
		cBlue: 'theBlueOne',
		cBord: 'theBordOne',
		classeDoUsuario: '',
		aplicar: '',
		cor: '',
		meuProgresso: 0,
		progressoVerde: 250,
		progressoAmarelo: 150,
		progressoVermelho: 100
	},
	computed: {
		estiloComputadoVerde() {
			return {
				width: this.progressoVerde
			}
		},
		estiloComputadoAmarelo() {
			return {
				width: this.progressoAmarelo,
				marginLeft: this.progressoVerde + 'px'
			}
		},
		estiloComputadoVermelho() {
			return {
				width: this.progressoVermelho,
				marginLeft: this.progressoAmarelo + 'px'
			}
		}
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.efeito = this.efeito == 'destaque' ? 'encolher' : 'destaque'
			}, 500)

		},
		upDateClasseDoUsuario() {
			this.classeDoUsuario = event.target.value
		},
		upDateAplicar() {
			this.aplicar = event.target.value == 'true' ? true : false
		},
		upDateColor() {
			this.cor = event.target.value
		},
		iniciarProgresso() {
			let progresso1 = setInterval(() => {
				if (this.meuProgresso < 500) {
					this.meuProgresso += 1
				} else {
					clearInterval(progresso1)
				}
			}, 10)

			let pVerde = 0 + this.progressoVerde;
			let pAmarelo = 0 + this.progressoAmarelo;
			let pVermelho = 0 + this.progressoVermelho;

			this.progressoVerde = 0;
			this.progressoAmarelo = 0
			this.progressoVermelho = 0

			let progresso2 = setInterval(() => {
				if (this.progressoVerde < pVerde) {
					this.progressoVerde += 1
				} else if (this.progressoAmarelo < pAmarelo) {
					this.progressoAmarelo += 1
				} else if (this.progressoVermelho < pVermelho) {
					this.progressoVermelho += 1
				} else {
					clearInterval(progresso2)
				}
			}, 10)
		}
	}
})
