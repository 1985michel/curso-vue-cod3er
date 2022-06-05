<template>
    <div class="task" :class="stateClass" @click="$emit('taskStateChanged', task)">
        <!-- atenção: 
        Abaxo task emite um evento de deleção de task. (O elemento Task está no elemento TaskGrid)
        Para deleção tem que excluir do array. Mas o array está no App.
        Então o TaskGrid terá de repassar o evento -->
        <span class="close" @click.stop="$emit('taskDeleted', task)">x</span>
        <!-- o click.stop faz com que não chame o click dos outros componentes, no caso da div de fora -->

        <p>{{ task.name }}</p>
    </div>
</template>
<script>
export default {
  props: {
    task: { type: Object, required: true },
  },
  computed: {
    stateClass() {
      return {
        pending: this.task.pending,
        done: !this.task.pending,
      };
    },
  },
};
</script>
<style>
.task {
  position: relative;
  box-sizing: border-box;
  width: 350px;
  height: 150px;
  padding: 10px;
  border-radius: 8px;
  font-size: 2rem;
  font-weight: 300;
  cursor: pointer; /*faz o mouse virar a o dedinho indicador */
  /* user-select: none;  impede o usuário de poder selecionar o texto*/
  display: flex;
  justify-content: center;
  align-items: center;
}

.pending {
  border-left: 12px solid #b73229;
  background-color: #f44336;
}

.done {
  color: #ddd;
  border-left: 12px solid #0a8f08;
  background-color: #4caf50;
  text-decoration: line-through;
}

.pending .close {
  background-color: #b73229;
}

.done .close {
  background-color: #0a8f08;
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

  /* abaixo é o que deixa o x no centro do círculo */
  display: flex;
  justify-content: center;
}
</style>
