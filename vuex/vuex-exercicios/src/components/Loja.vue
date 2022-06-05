<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
import { mapActions } from "vuex";
//import { mapMutations } from "vuex";
export default {
  data() {
    return {
      sequencia: 1,
      //   quantidade: 1,
      //   preco: 9.99,
    };
  },
  computed: {
    //as propriedades computadas criadas no Parametros lê e altera
    //as propriedades computadas criadas em loja somente leem
    quantidade() {
      //return this.$store.state.quantidade;
      return this.$store.state.parametros.quantidade;
    },
    preco() {
      //return this.$store.state.preco;
      return this.$store.state.parametros.preco;
    },
  },
  methods: {
    //getters são colocados dentro de propriedades computadas
    //setters são colocados dentro dos métodos

    //abaixo usa um operador 'spread'(foi o que entendi da fala dele)
    //ele disse que ele gera os métodos aqui dentro altomaticamente
    //sem namespaced no módulo
    //...mapActions(["adicionarProduto"]),

    //se o namespaced estiver ativado no módulo tem que colocar o nome do namespaced
    //...mapActions("carrinho", ["adicionarProduto"]),

    //se a action for colocada como root volta a não precisar informar o namespaced do módulo
    ...mapActions(["adicionarProduto"]),

    adicionar() {
      const produto = {
        id: this.sequencia,
        nome: `Produto ${this.sequencia}`,
        quantidade: this.quantidade,
        preco: this.preco,
      };
      this.sequencia++;
      //o comentário abaixo (eslint-disable-next-line) é para que o console.log não gere reclamação no build
      // eslint-disable-next-line
      console.log(produto);

      //sem a mutation
      //this.$store.state.produtos.push(produto);

      //fazendo a mutation mas sem colocar ...mapMutations no presente método
      //this.$store.commit("adicionarProduto", produto);

      //após o colocar a ...mapMutation nos métodos
      this.adicionarProduto(produto);

      //se não quiser importaar o mapActions pode fazer diretamente por dispatch
      //this.$store.dispatch("adicionarProduto", produto);
      console.log(this.$store.getters.getNome);
      console.log(this.$store.getters.getNomeCompleto);
    },
  },
};
</script>

<style>
.loja {
  display: flex;
  justify-content: center;
}

.loja > * {
  margin: 0px 10px;
}

input {
  font-size: 2rem;
  width: 90px;
}
</style>
