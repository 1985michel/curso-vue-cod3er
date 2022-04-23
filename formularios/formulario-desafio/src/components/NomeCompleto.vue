<template>
    <div class="rotulo">
        <Rotulo nome="Nome Completo">
            <label>{{ formataNome() }}</label>
        </Rotulo>       
    
    </div>
</template>

<script>
import Rotulo from "./Rotulo.vue";
export default {
  props: ["nome", "sobrenome"],
  components: { Rotulo },
  methods: {
    formataNome() {
      return (
        this.nome.charAt(0).toUpperCase() +
        this.nome.slice(1) +
        " " +
        this.sobrenome.charAt(0).toUpperCase() +
        this.sobrenome.slice(1)
      );
    },
  },
};
</script>

<style scoped>
</style>
