<template>
  <li class="list-group-item">
    <div class="d-flex justify-content-between">
      <div>
        <h5 class="mb-1">{{ tarefa.title }}</h5>
        <p class="mb-1">{{ tarefa.text }}</p>
        <small>{{ tarefa.completedAt }}</small>
      </div>
      <div>
        <button 
          @click="concluirTarefa(tarefa.id)"
          v-if="!tarefa.completed"
          class="btn btn-success btn-xs mr-2">
        <font-awesome-icon :icon="['fas', 'check']" />
        </button>

        <button
          @click="iniciarEdicao"
          v-if="!tarefaEmEdicao"
          class="btn btn-primary btn-xs mr-2 ml-3">
          <font-awesome-icon :icon="['fas', 'pen']" />
        </button>

        <button
          @click="excluirTarefa(tarefa.id)"
          class="btn btn-danger btn-xs"
        ><font-awesome-icon :icon="['fas', 'xmark']" />
        </button>

      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ['tarefa', 'tarefaEmEdicao'], // Propriedade para verificar se uma tarefa está em edição
  
  methods: {
    // ...mapActions(['setTarefaEmEdicao']),

    concluirTarefa(id) {
      this.$emit("concluir-tarefa", id);
    },
    excluirTarefa(id) {
      this.$emit("excluir-tarefa", id);
    },
    iniciarEdicao() {
      this.$emit("iniciar-edicao"); // Emitir o evento de iniciar edição
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>


