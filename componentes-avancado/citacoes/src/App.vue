<template>
	<div id="app">
		<!-- <Citacoes />
		<Sobre /> -->

		<!-- criando componente dinâmico: ele vai assumir o componente determinado pela variável -->
		 <keep-alive> <!--faz com que o componente não seja destruido quando for ocultado -->
			<component :is='componente' /> <!-- <component :is="'componente'" /> passar uma string tb funciona -->
		</keep-alive>
		

		<span>
			<button @click="componente = 'Citacoes'">Citações</button>
			<button @click="componente = 'Sobre'">Sobre</button>
			</span>
	</div>
</template>

<script>
import Citacoes from "./components/Citacoes";
import Sobre from "./components/Sobre";

export default {
  components: { Citacoes, Sobre },
  data() {
    return {
      componente: "Citacoes",
    };
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.6rem;
}

button {
  outline: none;
  padding: 5px 15px 10px;
  margin: 10px 5px;
  border-radius: 3px;
  font-size: 2rem;
  font-weight: 300;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
