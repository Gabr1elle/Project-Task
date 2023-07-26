<template>
  <div class="lista-tarefas container mt-3 mb-2 col-6">
    <div class="row">
      <div class="col-md-12">
        <h2>Gerenciador de Tarefas</h2>
        <div class="task-input input-group mb-3 mt-3 ml-4">
          <input
            v-model="newTask.title"
            @keyup.enter="addTask"
            type="text"
            class="form-control"
            placeholder="Digite o título da tarefa"
          />
          <input
            v-model="newTask.text"
            type="text"
            class="form-control"
            placeholder="Digite o texto da tarefa"
          />
          <div class="input-group-append">
            <button @click="addTask" type="button" class="btn btn-outline-dark">
              Adicionar
            </button>
          </div>
        </div>
        <ul class="list-group">
          <tarefa-item
            v-for="tarefa in tasks"
            :key="tarefa.id"
            :tarefa="tarefa"
            @concluir-tarefa="concluirTarefa"
            @excluir-tarefa="excluirTarefa"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TarefaItem from "./TarefaItem.vue";

export default {
  components: {
    TarefaItem,
  },
  data() {
    return {
      newTask: {
        title: "",
        text: "",
        completed: false,
      },
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.title.trim() !== "" && this.newTask.text.trim() !== "") {
        this.tasks.push({
          id: Date.now(), // Gerando um ID único com base no timestamp
          title: this.newTask.title.trim(),
          text: this.newTask.text.trim(),
          completed: false,
        });
        this.newTask.title = "";
        this.newTask.text = "";
      }
    },

    concluirTarefa(id) {
      const tarefa = this.tasks.find((tarefa) => tarefa.id === id);
      if (tarefa) {
        tarefa.completed = true;
      }
    },

    excluirTarefa(id) {
      this.tasks = this.tasks.filter((tarefa) => tarefa.id !== id);
    },
  },
};
</script>

<style scoped>
/* Estilos específicos para este componente principal podem ser colocados aqui */

.completed {
  text-decoration: line-through;
}

.container-menor {
  max-width: 800px;
}
</style>
