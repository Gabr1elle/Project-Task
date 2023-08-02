<template>
  <div>
    <h4>Editando Tarefa</h4>
    <div>
      <input v-model="tarefa.title" class="form-control mb-2" />
      <textarea v-model="tarefa.text" class="form-control mb-2"></textarea>
      <button @click="concluirEdicao" class="btn btn-primary">
        Concluir Edição
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tarefa"],
  methods: {
    concluirEdicao() {
      this.$emit("concluir-edicao");
    },
  },
};
</script>

