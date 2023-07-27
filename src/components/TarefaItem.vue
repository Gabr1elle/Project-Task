<!-- TarefaItem.vue -->
<template>
  <li class="list-group-item d-flex justify-content-between align-items-center">
    <div>
      <span :class="{ completed: tarefa.completed }">{{ tarefa.title }}</span>
      <span>{{ tarefa.text }}</span>
      <div>
        <span v-if="tarefa.completed">Concluído em: {{ formatarDataHoraConclusao(tarefa.completedAt) }}</span>
        <button type="button" @click="concluirTarefa" class="btn btn-primary btn-xs mr-2 ml-3">Concluir</button>
      </div>
        <button type="button" @click="excluirTarefa" class="btn btn-outline-success btn-xs mr-2 ml-3">Excluir</button>
    </div>
  </li>
</template>

<script>
import moment from 'moment';

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
    formatarDataHoraConclusao(dataHora) {
      return moment(dataHora).format("YYYY-MM-DD HH:mm:ss");
    },
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>

