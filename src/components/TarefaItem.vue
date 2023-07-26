<!-- src/components/TarefaItem.vue -->
<template>

<div class="container" col-3>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div>
      <span :class="{ completed: tarefa.completed }">{{ tarefa.title }}</span>
      <span>{{ tarefa.text }}</span>
      <div>
        <button type="button" @click="concluirTarefa" class="btn btn-primary btn-xs mr-2 ml-3">Concluir</button>
        <button type="button" @click="excluirTarefa" class="btn btn-outline-success btn-xs mr-2 ml-3">Excluir</button>
      </div>
    </div>
  </li>
  </div>
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

