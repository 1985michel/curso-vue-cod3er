export default {
    //namespaced é para evitar conflitos de nome
    namespaced: true,
    state: {
        produtos: [
            // { id: 1, nome: "Produto 1", quantidade: 7, preco: 14.55 },
            // { id: 2, nome: "Produto 2", quantidade: 10, preco: 22.99 },
            // { id: 3, nome: "Produto 3", quantidade: 1, preco: 43.18 },
        ],

    },
    getters: {
        //com rootState seria:
        //valorTotal(state, getters, rootState) {
        valorTotal(state) {
            return state.produtos.map(p => p.quantidade * p.preco).reduce((total, atual) => total + atual, 0)
        }
    },
    //setters
    //mutations são por commit, elas de fato efetivam a alteração no estado da aplicação
    //ele disse que as mutations funcionam de forma assincrona, mas devem ser colocados somente métodos síncronos
    mutations: {
        //abaixo pode-se usar o nome que quiser para o payload



        adicionarProduto(state, payload) {
            state.produtos.push(payload)
        },
    },
    //actions são por dispatch elas solicitam a alteração
    //nas actions você coloca regras que validam ao alteram o que ou como vai ser alterado
    //depois disso elas acionam as mutations
    //requisições ajax são feitas dentro das actions pois elas funcionam com assincronismo por padrão
    //promisses, etc
    //NAS ACTIONS SE COLOCAM AS REGRAS DE NEGÓCIO COMO AS VALIDAÇÕES
    actions: {
        //context é o this do componente
        //adicionarProduto(context, payload) {

        //abaixo como seria a estrutura se o desejo fosse usar o rootState
        //adicionarProduto({ commit, state, rootState }, payload) {

        //Se o namespaced estiver ativado a action abaixo só pode ser acessada por outras entidades informando o namespaced do módulo
        // adicionarProduto({ commit }, payload) {
        //     //na opção acima ele está utiliando um destructor {} para expor o commit
        //     setTimeout(() => {
        //         // context.commit('adicionarProduto', payload)
        //         commit('adicionarProduto', payload)
        //     }, 1000)
        // }

        //para fazer a action ficar root no projeto é assim
        adicionarProduto: {
            root: true,
            handler({ commit }, payload) {
                //na opção acima ele está utiliando um destructor {} para expor o commit
                setTimeout(() => {
                    // context.commit('adicionarProduto', payload)
                    commit('adicionarProduto', payload)
                }, 1000)
            }
        }
    }
}