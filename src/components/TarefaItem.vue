<!-- src/components/TarefaItem.vue -->
<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div v-if="!editing">
      <span :class="{ completed: tarefa.completed }">{{ tarefa.title }}</span>
      <span>{{ tarefa.text }}</span>
      <div>
        <button @click="concluirTarefa" class="btn btn-success btn-sm mr-2">
          Concluir
        </button>
        <button @click="excluirTarefa" class="btn btn-danger btn-sm">
          Excluir
        </button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    tarefa: {
      type: Object,
      required: true,
    },
  },

  methods: {
    concluirTarefa() {
      this.$emit("concluir-tarefa", this.tarefa.id);
    },
    excluirTarefa() {
      this.$emit("excluir-tarefa", this.tarefa.id);
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>

