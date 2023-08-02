<template>
  <div class="Home">    
    <lista-tarefas></lista-tarefas>
  </div>
</template>

<script>
import ListaTarefas from '@/components/ListaTarefas.vue';

export default {
  components: {
    ListaTarefas
  }
}
</script>

<style>
.h2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  background-color: #fa18a7;
}


.p {
  text-decoration: none;
  color: #000;
}
</style>
