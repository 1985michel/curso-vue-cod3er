new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        alertar() {
            alert("O Botão foi pressionado!")
        },
        listeningkeyDown(event) {
            this.valor = event.target.value
        },
        listeningEnter(event) {
            this.valor = event.target.value
        }
    }
})