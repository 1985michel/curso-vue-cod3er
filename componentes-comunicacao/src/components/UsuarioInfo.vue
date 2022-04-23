<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do Usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar Nome</button>
        <button @click="reiniciarFn()">Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from "../barramento";

export default {
  props: {
    nome: {
      type: String,
      //default: "Anônimo",
      //required: true, //ou seja, que a propriedade é obrigatória para o componente funcionar.
      //   default: function() {
      //     return Array(10)
      //       .fill(0)
      //       .join(","); // retorn 0,0,0,0,0,0,0,0,0,0
      //   },
    },
    //nome: String, //significa que o tipo da propriedade esperada é String
    //nome: [String, Array], //isso significa que pode ser um nome ou um array
    reiniciarFn: Function,
    idade: Number,
  },
  methods: {
    inverterNome() {
      // o código abaixo inverte as letras de um nome
      return this.nome
        .split("")
        .reverse()
        .join("");
    },
    reiniciarNome() {
      const antigo = this.nome;
      this.nome = "Pedro";
      //this.$emit("nomeMudou", { novo: this.nome, antigo: antigo });
      this.$emit("nomeMudou", this.nome);
    },
  },
  created() {
    //idadeMudou veio lá do UsuarioEditar
    //Ao criar o componentes (daí o "created") ele vai vincular a função para ser disparada sempre que o evento acontecer
    //fica escutando o evento

    // barramento.$on("idadeMudou", (idade) => {
    //   this.idade = idade;
    // });
    barramento.quandoIdadeMudar((idade) => {
      this.idade = idade;
    });
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
