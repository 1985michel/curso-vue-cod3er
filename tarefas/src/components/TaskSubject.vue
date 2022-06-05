<template>
	<div class="border">
		<h1 @click="compact = !compact">{{ subject.name }}</h1>
        <span class="close"  @click="$emit('subjectDeleted', subject)">X</span>
        <!-- <button class="close"  @click.stop="deletou(subject)">X</button> -->
        <div v-show="compact">
            <TasksProgress :progress="progress"/>
		<!-- abaixo é como se estivesse addTask($event), pois ele já é passado por padrão. A anotação abaixo é o monitoramento do evento -->
            <NewTask @taskAdded="addTask"/>
            <TaskGrid :tasks="subject.tasks"
            @taskDeleted="deleteTask"
            @taskStateChanged="toggleTaskState"
            />

        </div>
        
		
	</div>
</template>

<script>
import TaskGrid from "./TaskGrid.vue";
import NewTask from "./NewTaks.vue";
import TasksProgress from "./TasksProgress.vue";

export default {
  components: { TaskGrid, NewTask, TasksProgress },
  props: {
    subject: { type: Object, required: true },
    //nome: { type: String, required: true },
  },
  data() {
    return {
      tasks: [
        // { name: "Lavar a louça", pending: false },
        // { name: "Comprar roupa", pending: true },
        //   {name: , pending:},
      ],
      compact: true,
    };
  },
  computed: {
    progress() {
      const total = this.subject.tasks.length;
      const done = this.subject.tasks.filter((t) => !t.pending).length;
      //   abaixo, se a Math der valor inválido, ele assume 0
      return Math.round((done / total) * 100) || 0;
    },
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
  },
  methods: {
    addTask(task) {
      const sameName = (t) => t.name === task.name;
      const reallyNew = this.subject.tasks.filter(sameName).length == 0;
      //o que sameName retornar true, o filter retorna no array
      //se o array for vazio, então ninguém tem o mesmo nome
      if (reallyNew) {
        this.subject.tasks.push({
          name: task.name,
          pending: task.pending || true,
          //   acima, se a task tiver a propriedade pending, ele pega o valor. Se não tiver, ele assume true
        });
      }
    },
    deletou(subject) {
      alert("chegou no delete de ts deletando " + subject.name);
    },

    deleteTask(i) {
      // Se eu tivesse recebido a task e quisesse saber o índice dela, faria assim:      const i = this.tasks.indexOf(task);
      if (i >= 0) this.subject.tasks.splice(i, 1);
    },
    toggleTaskState(i) {
      this.subject.tasks[i].pending = !this.subject.tasks[i].pending;
    },
  },
  created() {
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
.border {
  position: relative;
  border: 2px;
  border-color: #fff;
  border-style: solid;
  padding: 20px;
  margin-bottom: 10px;
  width: 95%;
}

.close {
  /* para o position absolute abaixo funcionar a classe task tem que ter position relative */
  position: absolute;
  right: 10px;
  top: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  background-color: red;

  /* abaixo é o que deixa o x no centro do círculo */
  display: flex;
  justify-content: center;

  cursor: pointer; /*faz o mouse virar a o dedinho indicador */
}
</style>
