<template>
  <div class="container">
    <div class="row justify-content-center align-items-center vh-100">
      <div class="col-md-10 my-5 py-5">
        <div class="card">
          <div class="card-body card-body-centered text-center ">
            <h3 class="animated-title text-center mb-5 align-middle titulo"> Adicione sua Tarefa <font-awesome-icon class="h4 mb-0" :icon="['fas', 'circle-check']" /> </h3> 


            <div class="task-input input-group mb-3 ">
              <input 
                class="form-control mr-4"
                name="title" 
                type="text"
                v-model="newTask.title"
                @keyup.enter="adicionarTarefa"
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
                  @click="adicionarTarefa"
                  type="button"
                  class="btn btn-outline-dark mr-4 ml-4 mx-1"
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
// import { mapActions } from 'vuex';
import TarefaItem from "./TarefaItem.vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Swal from 'sweetalert2';



export default {
  components: {
    TarefaItem,
    FontAwesomeIcon
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
    adicionarTarefa() {
      if (this.newTask.title.trim() !== "" && this.newTask.text.trim() !== "") {
        const newTask = {
          id: Date.now(),
          title: this.newTask.title.trim(),
          text: this.newTask.text.trim(),
          completed: false,
        };
        this.$store.dispatch("adicionarTarefa", newTask);
        this.newTask.title = "";
        this.newTask.text = "";
        
      } else {
      Swal.fire({
        title: 'Campos em Branco',
        text: 'Por favor, preencha todos os campos.',
        icon: 'warning', 
        confirmButtonText: 'Fechar',
        width: 400, 
        height: 100, 
        confirmButtonColor: '#ff9900',
        
      });
      }
    },

    concluirTarefa(id) {
      this.$store.dispatch("concluirTarefa", id);
    
    },
    excluirTarefa(id) {
      this.$store.dispatch("removerTarefa", id);

    },

     // Método para abrir o modal com detalhes da tarefa
    mostrarDetalhes(tarefa) {
      this.selecionarTarefa = tarefa;  

    },

    // Método para limpar a tarefa selecionada quando o modal é fechado
    clearselecionarTarefa() {
      this.selecionarTarefa = null;
    },
  },
};

</script>

<style>

@import url('https://fonts.googleapis.com/css2? family= Lato:wght@300 & family= Merriweather+Sans:wght@300 & family= Noto+Serif:ital,wght@1,500 & family= Playfair+Display:wght@500 & family= Raleway:wght@200;500 & display=swap');

/* .titulo { 
  font-family: 'Caviar Dreams';
} */
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
  max-width: 900px;
}


.animated-title {
    font-size: 36px;
    /* Outros estilos de título */
    animation: fadeInUp 1s ease-in-out; /* Nome da animação e duração */

}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* custom-sweetalert.css */

.swal2-popup {
  border-radius: 10px; /* Altere esse valor para ajustar a curvatura da borda */

}


</style>
