<template>
	<div id="app">
		<h1>Tarefas</h1>
		<!-- <TasksProgress :progress="progress"/> -->
		<!-- abaixo é como se estivesse addTask($event), pois ele já é passado por padrão. A anotação abaixo é o monitoramento do evento -->
		<!-- <NewTask @taskAdded="addTask"/>
		<TaskGrid :tasks="tasks"
		@taskDeleted="deleteTask"
		@taskStateChanged="toggleTaskState"
		/> -->

    <div class="new-task">
        <input v-model= 'newName' @keydown.enter="addSubject()" type="text" class="form-element" placeholder="Nova Lista?">
        <button class="form-element" @click="addSubject()">+</button>        
    </div>

  <TaskSubject v-for="lista in listas" :key="lista.name" :subject="lista" @subjectDeleted="deleteSubject">
  <!-- <TaskSubject :nome="listas.length"> -->

  </TaskSubject>


	</div>
</template>

<script>
// import TaskGrid from "./components/TaskGrid.vue";
//import NewTask from "./components/NewTaks.vue";
// import TasksProgress from "./components/TasksProgress.vue";
import TaskSubject from "./components/TaskSubject.vue";

export default {
  // components: { TaskGrid, NewTask, TasksProgress },
  components: { TaskSubject },
  data() {
    return {
      newName: "",
      listas: [
        // {
        //   name: "Trabalho",
        //   tasks: [{ name: "Lavar a louça", pending: false }],
        // },
        // {
        //   name: "Faculdade",
        //   tasks: [{ name: "Lavar a louça", pending: false }],
        // },
        // {
        //   name: "Casa",
        //   tasks: [{ name: "Lavar a louça", pending: false }],
        // },
      ],
      // tasks: [
      //   // { name: "Lavar a louça", pending: false },
      //   // { name: "Comprar roupa", pending: true },
      //   //   {name: , pending:},
      // ],
    };
  },
  computed: {
    //   progress() {
    //     const total = this.tasks.length;
    //     const done = this.tasks.filter((t) => !t.pending).length;
    //     //   abaixo, se a Math der valor inválido, ele assume 0
    //     return Math.round((done / total) * 100) || 0;
    //   },
  },
  watch: {
    //   tasks(){
    // 	//localStorage.setItem("tasks", JSON.stringify(this.tasks));
    //   }
    // tasks: {
    //   //repare que o tasks deixou de ser uma função
    //   deep: true, //faz um watch profundo, salvando até mudanças de estado internas
    //   handler() {
    //     localStorage.setItem("tasks", JSON.stringify(this.tasks));
    //   },
    // },
    listas: {
      //repare que o tasks deixou de ser uma função
      deep: true, //faz um watch profundo, salvando até mudanças de estado internas
      handler() {
        localStorage.setItem("listasDeTarefas", JSON.stringify(this.listas));
      },
    },
  },
  methods: {
    avisa(event) {
      alert("avisou" + event);
    },
    addSubject() {
      const sameName = (t) => t.name === this.newName;
      const reallyNew = this.listas.filter(sameName).length == 0;
      //o que sameName retornar true, o filter retorna no array
      //se o array for vazio, então ninguém tem o mesmo nome
      if (reallyNew) {
        this.listas.push({
          name: this.newName,
          tasks: [],
          //   acima, se a task tiver a propriedade pending, ele pega o valor. Se não tiver, ele assume true
        });
        this.newName = "";
      }
    },
    deleteSubject(event) {
      // Se eu tivesse recebido a task e quisesse saber o índice dela, faria assim:
      //alert("Deseja deletar " + event.name);
      const i = this.listas.indexOf(event);
      if (confirm(`Deletar Lista ${event.name}?`)) {
        if (i >= 0) this.listas.splice(i, 1);
      }
    },

    // addTask(task) {
    //   const sameName = (t) => t.name === task.name;
    //   const reallyNew = this.tasks.filter(sameName).length == 0;
    //   //o que sameName retornar true, o filter retorna no array
    //   //se o array for vazio, então ninguém tem o mesmo nome
    //   if (reallyNew) {
    //     this.tasks.push({
    //       name: task.name,
    //       pending: task.pending || true,
    //       //   acima, se a task tiver a propriedade pending, ele pega o valor. Se não tiver, ele assume true
    //     });
    //   }
    // },
    // deleteTask(i) {
    //   // Se eu tivesse recebido a task e quisesse saber o índice dela, faria assim:      const i = this.tasks.indexOf(task);
    //   if (i >= 0) this.tasks.splice(i, 1);
    // },
    // toggleTaskState(i) {
    //   this.tasks[i].pending = !this.tasks[i].pending;
    // },
  },
  created() {
    const json = localStorage.getItem("listasDeTarefas");
    const array = JSON.parse(json);

    this.listas = Array.isArray(array) ? array : [];

    // const json = localStorage.getItem("tasks");
    // const array = JSON.parse(json);

    // this.tasks = Array.isArray(array) ? array : [];

    //testa se é um array o resultado
    // if (Array.isArray(array)) {
    //   this.tasks = JSON.parse(json) || [];
    //   //se não der certo ele coloca um array vazio
    // } else {
    //   this.tasks = [];
    // }
  },
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
  background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
  color: #fff;
}

#app {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 100vh; */

  /* height: 100vh; */

  margin: 1%;
}

#app h1 {
  margin-bottom: 5px;
  font-weight: 300;
  font-size: 3rem;
}
</style>
