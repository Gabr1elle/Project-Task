<template>
  <div class="container">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-md-10 my-5 py-5">
        <div class="card">
          <div class="card-body card-body-centered text-center ">
            <h2 class="text-center mb-5">TaskMaster - Gerenciando suas tarefas</h2>
            <div class="task-input input-group mb-3 ">
              <input
                v-model="newTask.title"
                @keyup.enter="addTask"
                type="text"
                class="form-control mr-4"
                placeholder="Digite o título da tarefa"
              />
              <input
                v-model="newTask.text"
                type="text"
                class="form-control mr-4"
                placeholder="Digite o texto da tarefa"
              />
              <div class="input-group-append">
                <button
                  @click="addTask"
                  type="button"
                  class="btn btn-outline-dark mr-4"
                >
                  Adicionar
                </button>
              </div>
            </div>
            <ul class="list-group ">
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
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import TarefaItem from "./TarefaItem.vue";
import EditarTarefa from "./EditarTarefa.vue";


export default {
  components: {
    TarefaItem,
    EditarTarefa,

  },
  data() {
    return {
      newTask: {
        title: "",
        text: "",
        completed: false,
      },
    };
  },
  computed: {
    tasks() {
      return this.$store.getters.allTasks;
      
    },
  },
  methods: {
    addTask() {
      if (this.newTask.title.trim() !== "" && this.newTask.text.trim() !== "") {
        const newTask = {
          id: Date.now(),
          title: this.newTask.title.trim(),
          text: this.newTask.text.trim(),
          completed: false,
        };
        this.$store.dispatch("addTask", newTask);
        this.newTask.title = "";
        this.newTask.text = "";
        
      }
    },

    concluirTarefa(id) {
      this.$store.dispatch("completeTask", id);
    
    },
    excluirTarefa(id) {
      this.$store.dispatch("removeTask", id);

    },

     // Método para abrir o modal com detalhes da tarefa
    mostrarDetalhes(tarefa) {
      this.selectedTask = tarefa;  

    },

    // Método para limpar a tarefa selecionada quando o modal é fechado
    clearSelectedTask() {
      this.selectedTask = null;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200;500&display=swap");

.h2 {
  font-family: "Raleway", sans-serif;
}

.template {
  font-family: "Raleway", sans-serif;
}

.completed {
  text-decoration: line-through;
}

.container-menor {
  max-width: 800px;
}

</style>
