export default {
    state: {

        quantidade: 0,
        preco: 0
    },

    mutations: {
        //abaixo pode-se usar o nome que quiser para o payload

        setQuantidade(state, payload) {
            state.quantidade = payload
        },
        setPreco(state, payload) {
            state.preco = payload
        }
    },

}