<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->
				<!-- Email -->
				<!-- Senha -->
				<!-- Armazenar Dados? (Sim/Não) -->

				<Rotulo nome="Nome">
					<input type="text" v-model="usuario.nome">
				</Rotulo>
				<Rotulo nome="Sobrenome">
					<input type="text" v-model="usuario.sobrenome">
				</Rotulo>
				<Rotulo nome="Email">
					<input type="text" v-model="usuario.email">
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model="usuario.senha">
				</Rotulo>
				<Rotulo nome="ArmazenarDados">
					<span class="mr-4"><input type="checkbox" v-model="usuario.armazenarDados" value="true"> Armazenar Dados</span>
				</Rotulo>
				<button @click.prevent="enviado = !enviado">Enviar</button>

				<!-- Exercicio 02 -->
				<!-- Só mostrar o fomulário de não tiver sido submetido -->
				<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
				
				<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
			</form>
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="Nome">{{ usuario.nome }}</Rotulo>
				<Rotulo nome="Sobrenome">{{ usuario.sobrenome }}</Rotulo>
				<Rotulo nome="E-mail">{{ usuario.email }}</Rotulo>
				<Rotulo nome="Senha">{{ usuario.senha }}</Rotulo>
				<Rotulo nome="Armazenar dados">{{ usuario.armazenarDados }}</Rotulo>
				<NomeCompleto nomeRotulo="Nome Completo" :nome="usuario.nome" :sobrenome="usuario.sobrenome"></NomeCompleto>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import NomeCompleto from "./components/NomeCompleto.vue";

export default {
  name: "app",
  components: { Rotulo, NomeCompleto },
  data() {
    return {
      usuario: {
        nome: "",
        sobrenome: "",
        senha: "",
        email: "",
        armazenarDados: false,
      },
      enviado: false,
    };
  },
};
</script>

<style>
body {
  background-color: #ececec;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
}

.conteudo {
  display: flex;
}

.painel {
  flex: 1;
  background: #fff;
  margin: 0px 10px;
  padding: 20px;
  border: 1px solid #aaa;
  border-radius: 5px;
}

.painel .cabecalho {
  width: 100%;
  background-color: #ddd;
  padding: 10px 0px;
  border-radius: 5px;
  font-size: 1.4rem;
}

#app form button {
  float: right;
  margin: 10px 0px;
  padding: 10px 20px;
  font-size: 1.4rem;
  border-radius: 5px;
  color: #fff;
  background-color: #2196f3;
}

#app h1 {
  font-weight: 200;
  margin: 20px;
  padding: 0;
}

.mr-4 {
  margin-right: 40px;
}
</style>
