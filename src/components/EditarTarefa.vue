<template>
  <div>
    <div class="modal-body">
      <h4></h4>
      <div v-if="tarefaSelecionada">
        <input v-model="tarefaEditavel.title" class="form-control mb-2" />
        <textarea
          v-model="tarefaEditavel.text"
          class="form-control mb-2"
          style="max-height: 200px; resize: vertical"
        ></textarea>
      </div>
    </div>

    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal">
        Fechar
      </button>
      <button
        type="button"
        id="salvar"
        @click="salvarAlteracoes"
        data-bs-dismiss="modal"
        class="btn btn-outline-warning"
      >
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
      },
    };
  },
  computed: {
    ...mapState(["tarefaSelecionada"]),
  },

  watch: {
    // Monitora alterações na propriedade "tarefaSelecionada"
    tarefaSelecionada: {
      // Configuração para observação profunda
      deep: true,
      // Função que será chamada quando houver uma alteração em "tarefaSelecionada"
      handler(novoValor) {
        // Atualiza o título da tarefa editável com o novo valor
        this.tarefaEditavel.title = novoValor.title;
        // Atualiza o texto da tarefa editável com o novo valor
        this.tarefaEditavel.text = novoValor.text;
      },
    },
  },

  methods: {
    salvarAlteracoes() {
      this.$store.dispatch("atualizarTarefa", {
        completed: this.tarefa.completed,
        id: this.tarefa.id,
        text: this.tarefaEditavel.text,
        title: this.tarefaEditavel.title,
      });

      this.tarefaEditavel = {
        title: "",
        text: "",
      };
    },
  },
};
</script>