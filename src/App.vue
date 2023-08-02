<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg fixed-top" style="background-color: #00ffff;">
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
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/sobre">Sobre</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  
    <router-view></router-view>

    <footer class="custom-footer position-fixed">
      TaskMaster - Gerenciador de tarefas @2023
    </footer>
  </div>
</template>



<script>
import moment from 'moment';

export default {
  components: {
    moment,
  },
};

</script>

<style>
body {
  background: #ffffff;
}

#app {
   font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
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
