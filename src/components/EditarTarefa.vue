<template>
  <div>
    <h4></h4>
    <div v-if="tarefa">
      <input v-model="tarefa.title" class="form-control mb-2" />
      <textarea v-model="tarefa.text" class="form-control mb-2"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tarefa"],
  methods: {
    concluirEdicao() {
      this.$emit("concluir-edicao", this.tarefa);
    },
  },
};
</script>