<template>
  <div id="app">
    <nav
      class="navbar navbar-expand-lg fixed-top"
      style="background-color: #009f9f"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">TaskMaster</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 ba">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/sobre">Sobre</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-dialog-centered modal-lgd-flex align-items-center justify-content-center"
      >
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              Editar Tarefa
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <editar-tarefa :tarefa="tarefaSelecionada"></editar-tarefa>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
            <button @click="salvarAlteracoes" class="btn btn-primary">
              Salvar alterações
            </button>
          </div>
        </div>
      </div>
    </div>

    <footer class="custom-footer position-fixed">
      TaskMaster - Gerenciador de tarefas @2023
    </footer>
  </div>
</template>



<script>
import { mapState } from "vuex";
import EditarTarefa from "./components/EditarTarefa.vue"; // Importe o componente de edição


export default {
  components: {
    EditarTarefa,
  },


  computed: {

    ...mapState(["tarefas", "tarefaSelecionada"]),

  },
  methods: {
    abrirModal() {
      if (this.tarefas.length > 0) {
        this.$store.commit("tarefas/taskSelected", this.tarefas[0]);
      }
      $("#exampleModal").modal("show"); // Abra o modal
    },
    concluirEdicao(tarefaEditada) {
      this.$store.dispatch("editarTarefa", tarefaEditada);
      this.$store.commit("tarefas/taskSelected", null); // Limpe a tarefa selecionada
      $("#exampleModal").modal("hide"); // Feche o modal
    },
    mostrarDetalhes(tarefa) {
      this.$store.commit("tarefas/taskSelected", tarefa);
      $("#exampleModal").modal("show"); // Abra o modal
    },
    salvarAlteracoes() {
      if (this.tarefaSelecionada) {
        this.atualizarTarefa(this.tarefaSelecionada);
        $("#exampleModal").modal("hide"); // Feche o modal após salvar as alterações
      }
    },
  },
};
</script>

<style>
body {
  background: #ffffff;
}

#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #ffffff; */
}

.container-fluid {
  margin-top: 0;
}

.custom-footer {
  background-color: #f8f9fa;
  text-align: center;
  padding: 10px;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #73756e;
  color: rgb(255, 255, 255);
}
</style>
