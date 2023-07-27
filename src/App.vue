<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
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
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Templates</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sobre</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <lista-tarefas></lista-tarefas>
    <footer class="custom-footer">
      TaskMaster - Gerenciador de tarefas @2023
    </footer>
  </div>
</template>



<script>
import ListaTarefas from "./components/ListaTarefas.vue";
import moment from 'moment';

export default {
  components: {
    ListaTarefas,
    moment,
  },
};
</script>




<style>
#app {
   font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #dad9d9;
}

.container-fluid {
  margin-top: 0;
  background: #13e2bf;
}

.custom-footer {
  background-color: #f8f9fa;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #2c3e50;
  color: bisque;
}
</style>
