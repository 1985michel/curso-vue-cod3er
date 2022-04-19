<template lang="">
  <div class="contadores"><app-contador v-for="c in 5" :key="c" /></div>
</template>
<script>
import MeuContador from "./Contador.vue";
export default {
  name: "MeusContadores",
  components: {
    "app-contador": MeuContador,
  },
};
</script>
<style lang=""></style>
