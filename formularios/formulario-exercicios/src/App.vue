<template>
	<div id="app">
		<h1>Registrar Reclamação</h1>
		<div class="conteudo">
			<form class="painel" v-if="!enviado">
				<div class="cabecalho">Formulário</div>
				<Rotulo nome="E-mail">
					 <!--
						  v-model.lazy só faz o bind quando o campo perder o foco (usuário clica em outro elemento)

						  v-model.trim tira os espaços em branco antes e depois do valor

						  vmodel.number faz com que o retorno seja passado como number e naõ como string (como é o padrão) 
					 
					  -->
					<input type="text" v-model="usuario.email">
				</Rotulo>
				<Rotulo nome="Senha">
					<input type="password" v-model="usuario.senha">
				</Rotulo>
				<Rotulo nome="Idade">
					<input type="number" v-model="usuario.idade">
				</Rotulo>

				<!-- textArea não é inicializado como value, mas sim colocando o valor dentro da tag. Mas no Vue, usa-se v-model do mesmo jeito -->
				<Rotulo nome="Mensagem">
					<textarea name="" cols="30" rows="5" v-model="mensagem"></textarea>
				</Rotulo>
				<Rotulo nome="Características do Problema">
					<span class="mr-4"><input type="checkbox" v-model="caracteristicas"
					value="reproduzivel"> Reproduzível</span>
					<span><input type="checkbox" v-model="caracteristicas"
					value="intermitente"> Intermitente</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span class="mr-4"><input type="radio" value="web" v-model="produto"> Web</span>
					<span class="mr-4"><input type="radio" value="mobile" v-model="produto"> Mobile</span>
					<span><input type="radio" value="outro" v-model="produto"> Outro</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<select name="" id="" v-model="prioridade">
						<option v-for="prioridade in prioridades" :key="prioridade.codigo"
						:value="prioridade.codigo"
						:selected="prioridade.codigo === 2">{{ prioridade.nome}}</option>
						<!-- :selected="prioridade.codigo === 1" promove a seleção via js (bom para carregar os dados quando for fazer edição). Para cadastramento inicial não precisa colocar. CUIDADO PARA NÃO CONFLITAR COM O V-MODEL DO SELECT QUE PREVALECERÁ-->
					</select>
				</Rotulo>
				<Rotulo nome="Primeira Reclamação?">
					<Escolha v-model="escolha"/>
				</Rotulo>
				<hr>
				<!-- o prevent é para não enviar o formulário de verdade, mas sim chamar o método que queremos -->
				<button @click.prevent="enviar">Enviar</button>
			 </form> <!--não faz diferença ser form ou div -->
			<div class="painel" v-else>
				<div class="cabecalho">Resultado</div>
				<Rotulo nome="E-mail">
					<span> {{ usuario.email }}</span>
				</Rotulo>
				<Rotulo nome="Senha">
					<span> {{ usuario.senha }}</span>
				</Rotulo>
				<Rotulo nome="Idade">
					<span> {{ usuario.idade }}</span>
				</Rotulo>
				<Rotulo nome="Mensagem">
					<!-- style="white-space: pre;" mantem os espaços em branco digitados na textArea -->
					<span style="white-space: pre;" >{{ mensagem }}</span>
				</Rotulo>
				<Rotulo nome="Características do Problema">
					<span>
						<ul>
							<li v-for="c in caracteristicas" :key="c">{{ c }}</li>
						</ul>
					</span>
				</Rotulo>
				<Rotulo nome="Qual produto?">
					<span>{{ produto }}</span>
				</Rotulo>
				<Rotulo nome="Prioridade">
					<span>{{ prioridade }}</span>
				</Rotulo>
				<!-- nota de recaptulação:
				v-model = v-bind + v-on 
				:value="tal" v-bind 
				@input="tal = $event.target.value" -->
				<Rotulo nome="Primeira Reclamação?">
					<span>{{ escolha }}</span>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import Escolha from "./components/Escolha.vue";

export default {
  name: "app",
  components: { Rotulo, Escolha },
  computed: {
    tipoIdade() {
      return typeof this.usuario.idade;
    },
  },
  methods: {
    enviar() {
      this.enviado = true;
    },
  },
  data() {
    return {
      mensagem: "",
      caracteristicas: [],
      produto: "web", //inicializa com web
      prioridade: 1,
      prioridades: [
        { codigo: 1, nome: "Baixa" },
        { codigo: 2, nome: "Moderada" },
        { codigo: 3, nome: "Alta" },
      ],
      usuario: {
        email: "",
        senha: "",
        idade: "",
      },
      escolha: true,
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
