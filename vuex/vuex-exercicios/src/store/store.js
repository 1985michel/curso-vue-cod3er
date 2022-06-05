import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
    //ao importar esses modulos eles ficam dentro do store, como se estivessem digitados aqui
    modules: { carrinho, parametros },
    state: {
        nome: 'Maria',
        sobrenome: 'Silva',
    },
    //o getter abaixo é para o arquivo getters.js

    //pode ser assim
    //getters,

    //ou assim
    getters: {
        ...getters
    }






    //usando modulos o state é apenas para o proprio modulo
    //para acessar o state global deve-se usar rootState


    //tudo o que estiver dentro do state é o estado central controleado pelo Vuex
    // state: {
    //     produtos: [
    //         // { id: 1, nome: "Produto 1", quantidade: 7, preco: 14.55 },
    //         // { id: 2, nome: "Produto 2", quantidade: 10, preco: 22.99 },
    //         // { id: 3, nome: "Produto 3", quantidade: 1, preco: 43.18 },
    //     ],
    //     quantidade: 0,
    //     preco: 0
    // },
    // getters: {
    //     valorTotal(state) {
    //         return state.produtos.map(p => p.quantidade * p.preco).reduce((total, atual) => total + atual, 0)
    //     }
    // },
    // //setters
    // //mutations são por commit, elas de fato efetivam a alteração no estado da aplicação
    // //ele disse que as mutations funcionam de forma assincrona, mas devem ser colocados somente métodos síncronos
    // mutations: {
    //     //abaixo pode-se usar o nome que quiser para o payload
    //     adicionarProduto(state, payload) {
    //         state.produtos.push(payload)
    //     },
    //     setQuantidade(state, payload) {
    //         state.quantidade = payload
    //     },
    //     setPreco(state, payload) {
    //         state.preco = payload
    //     }
    // },
    // //actions são por dispatch elas solicitam a alteração
    // //nas actions você coloca regras que validam ao alteram o que ou como vai ser alterado
    // //depois disso elas acionam as mutations
    // //requisições ajax são feitas dentro das actions pois elas funcionam com assincronismo por padrão
    // //promisses, etc
    // //NAS ACTIONS SE COLOCAM AS REGRAS DE NEGÓCIO COMO AS VALIDAÇÕES
    // actions: {
    //     //context é o this do componente
    //     //adicionarProduto(context, payload) {
    //     adicionarProduto({ commit }, payload) {
    //         //na opção acima ele está utiliando um destructor {} para expor o commit
    //         setTimeout(() => {
    //             // context.commit('adicionarProduto', payload)
    //             commit('adicionarProduto', payload)
    //         }, 1000)
    //     }
    // }


})

//0 - npm install --save vuex
//1 - faça os imports e crie o objeto Vuex.tal
//2 - tudo o que for colocado dentro do objeto state será gerenciado pelo Vuex
//3 - vá no main js importe a entidade (no caso, store) e a registre no Vue (parte de baixo)