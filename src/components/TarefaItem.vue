<template>
  <li class="list-group-item">
    <div class="d-flex justify-content-between">
      <div>
        <h5 class="mb-1">{{ tarefa.title }}</h5>
        <tt class="mb-1">{{ tarefa.text }}</tt>
        <small>{{ tarefa.completedAt }}</small>
      </div>
      <div>
        <button
          @click="concluirTarefa(tarefa.id)"
          v-if="!tarefa.completed"
          class="btn btn-success btn-xs"
        >
          <font-awesome-icon :icon="['fas', 'check']" />
        </button>

        <button
          type="button"
          data-bs-toggle="modal" data-bs-target="#exampleModal"
          @click="editarTarefa(tarefa)"
          class="btn btn-primary btn-xs mx-2">
          <font-awesome-icon :icon="['fas', 'pen']" />
        </button>

        <button @click="excluirTarefa(tarefa.id)" class="btn btn-danger btn-xs">
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </button>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: ["tarefa"], // Propriedade para verificar se uma tarefa está em edição

  methods: {
    concluirTarefa(id) {
      this.$emit("concluir-tarefa", id);
    },
    excluirTarefa(id) {
      this.$emit("excluir-tarefa", id);
    },
    editarTarefa(tarefaEscolhida) {
      this.$store.commit("SET_TAREFA_SELECIONADA", tarefaEscolhida)
      const myModalEl = document.getElementById('exampleModal')
      myModalEl.addEventListener('show.bs.modal', event => {
      })
    }
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>


