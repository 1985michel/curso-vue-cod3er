<template lang="">
  <div class="contador">
    <span>{{ contador }}</span>
    <button @click="adicionar">+</button>
    <button @click="subtrair">-</button>
  </div>
</template>

<script>
export default {
  name: "MeuContador",
  data() {
    return {
      contador: 0,
    };
  },
  methods: {
    adicionar() {
      this.contador++;
    },
    subtrair() {
      this.contador--;
    },
  },
};
</script>

<style scoped>
/* colocando o "scoped" somente os elementos deste componente serão afetados
pelo CSS */
span {
  border-bottom: 1px solid #ccc;
  height: 30px;
  padding: 5px 25px;
}

button {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: coral;
  margin-left: 10px;
  outline: none;
}
/* .contador span {
  border-bottom: 1px solid #ccc;
  height: 30px;
  padding: 5px 25px;
}

.contador button {
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background-color: coral;
  margin-left: 10px;
  outline: none;
} */
</style>
