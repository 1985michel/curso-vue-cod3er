<template>
    <div class="citacao">
        <slot name="autor"></slot>
        <slot name="texto"></slot>
        <slot name="fonte"></slot>
    </div>
</template>

<script>
export default {
  props: ["texto"],
  created() {
    //   chamado quando o componente é criado
  },
  destroyed() {
    //   chamado quando o compomente é destruido
  },
  activated() {
    //   chamado quando o componente é exibido (ativado)
  },
  deactivated() {
    //   chamado quando o componente é desativado ou ocultado
  },
};
</script>

<style scoped>
.citacao {
  border: 1px solid #ddd;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 450px;
}
</style>
