<template lang="">
    <div class='task-grid'>
        <template v-if="tasks.length">
            <Task v-for="(task, i) in tasks" :key="task.name" 
            :task="task"
            @taskDeleted="$emit('taskDeleted', i)"
            @taskStateChanged="$emit('taskStateChanged',i)"
            ></Task>
            <!-- Atenção!
            @taskDeleted="$emit('taskDeleted', i)" significa que:
            quando Task emit taskDeleted, o evento é capiturado no @taskDeleted.
            Como quem tem o array para deleção é o App, o TaskGrid tem que repassar o evento.
            Então TaskGrid emite um evento  'taskDeleted' para o App fazer o tratamento.
            Como parâmentro ele está passado o 'i', que é o id da task (no caso, task.name).
            Se ele quisesse passar toda a task ele faria assim:
            @taskDeleted="$emit('taskDeleted', $event)" 
            
            para o taskStateChanged é a mesma coisa. O App é que faz o tratamento
            -->
        </template>
        <p v-else class="no-task">Sua vida está em dia :)</p>      
    </div>
</template>
<script>
import Task from "./Task.vue";
export default {
  components: { Task },
  props: {
    tasks: { type: Array, required: true },
  },
};
</script>
<style >
.task-grid {
  display: flex; /*os elementos ficam lado a lado */
  justify-content: center;
  flex-wrap: wrap; /*os elementos ficam lado a lado e quando não tiver espaço GERA UMA NOVA LINHA LADO A LADO */
}

.task-grid .task {
  margin: 10px; /* circula toda a task */
}

.no-task {
  color: #aaa;
  font-size: 1.7rem;
}
</style>
