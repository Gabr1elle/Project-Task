<template>
  <div>
    <div class="modal-body">
      <h4></h4>
      <div v-if="tarefaSelecionada">
        <input v-model="tarefaEditavel.title"  class="form-control mb-2" />
        <textarea
          v-model="tarefaEditavel.text" class="form-control mb-2"
        ></textarea>
      </div>
    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
        Fechar
      </button>
      <button id="salvar" @click="salvarAlteracoes" data-bs-dismiss="modal" class="btn btn-primary">
        Salvar alterações
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["tarefa"],
  data() {
    return {
      tarefaEditavel: {
        title: this.tarefa.title,
        text: this.tarefa.text,
      }
    }
  },
  computed: {
    ...mapState(["tarefaSelecionada"]),
  },
  methods: {
    salvarAlteracoes() {
      this.$store.dispatch("atualizarTarefa", {
        completed: this.tarefa.completed,
        id: this.tarefa.id,
        text: this.tarefaEditavel.text,
        title: this.tarefaEditavel.title
      });

      this.tarefaEditavel = {
        title: "",
        text: "",
      }
    },
  },
};
</script>