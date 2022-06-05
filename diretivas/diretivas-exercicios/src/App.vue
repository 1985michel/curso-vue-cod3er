<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<!-- atenção que o v-text tem que estar entre aspas simples DENTRO de aspas duplas -->
		<p v-text="'Usando diretiva v-text'"></p>
		<p v-html="'Usando diretiva <strong>v-html</strong>'"></p>
		<hr>
		<p v-destaque>Usando diretiva personalizada</p>
		<p v-destaque-com-parametro="'red'">Usando diretiva personalizada com parâmetro</p>
		<p v-destaque-com-parametro="cor">Usando diretiva personalizada com parâmetro</p>

		<!-- Anatomia de uma diretiva:
		<p v-nome-da-diretiva:argumento.modificador1.modificador2.modificador3="valor"></p> -->

		<p v-destaque-com-modificador:fundo="'blue'">Usando diretiva personalizada com modificador</p>
		<p v-destaque-com-modificador="'blue'">Usando diretiva personalizada com modificador</p>

		<p v-destaque-com-modificador2:fundo.atrasar="'blue'">Usando diretiva personalizada com modificador atrasar</p>


		<p v-destaque-local>Usando diretiva personalizada LOCAL</p>
		<p v-destaque-local-multiplos-modificadores.atrasar.alternar="cor">Usando diretiva personalizada LOCAL com multiplos modificadores</p>
	</div>
</template>

<script>
export default {
  directives: {
    "destaque-local": {
      bind(el, binding, vnode) {
        el.style.backgroundColor = "lightGreen";
      },
    },
    "destaque-local-multiplos-modificadores": {
      bind(el, binding, vnode) {
        //ao que parece a linha abaixo é uma função que recebe uma 'cor' como parâmetro
        //uma função dentro de outra consegue ver os parâmetros da função maior
        const aplicarCor = (cor) => {
          if (binding.arg === "fundo") {
            el.style.backgroundColor = binding.value;
          } else {
            el.style.color = binding.value;
          }
        };

        let atraso = 0;
        if (binding.modifiers["atrasar"]) atraso = 3000;

        let cor1 = binding.value;
        let cor2 = "red";
        let corAtual = cor1;

        setTimeout(() => {
          if (binding.modifiers["alternar"]) {
            alert("Tem alternar");
            setInterval(() => {
              // corAtual recebe cor2, se atual for 1 ou 1 se for a 2

              corAtual = corAtual === cor1 ? cor2 : cor1;
              aplicarCor(corAtual);
            }, 1000);
          } else {
            aplicarCor(binding.value);
          }
        }, atraso);
      },
    },
  },
  data() {
    return {
      cor: "yellow",
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
