import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';

moment.locale('pt-br');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tarefas: [],
    tarefaSelecionada: {
      id: null,
      completed: null,
    },
  },

  mutations: {
    ADD_TASK(state, tarefa) {
      state.tarefas.push(tarefa);
    },
    REMOVE_TASK(state, id) {
      state.tarefas = state.tarefas.filter((tarefa) => tarefa.id !== id);
    },
    COMPLETE_TASK(state, id) {
      const tarefa = state.tarefas.find((tarefa) => tarefa.id === id);
      if (tarefa) {
        tarefa.completed = true;
        tarefa.completedAt = moment().format('LLLL');
      }
    },
    SET_TAREFA_SELECIONADA(state, tarefa) {
      state.tarefaSelecionada = tarefa;
    },
    ATUALIZAR_TAREFA(state, tarefaEditada) {
      const index = state.tarefas.findIndex((tarefa) => tarefa.id === tarefaEditada.id);
      if (index !== -1) {
        state.tarefas.splice(index, 1, tarefaEditada);
      }
    },
  },

  actions: {
    adicionarTarefa({ commit }, tarefa) {
      commit('ADD_TASK', tarefa);
    },

    removerTarefa({ commit }, id) {
      commit('REMOVE_TASK', id);
    },

    concluirTarefa({ commit }, id) {
      commit('COMPLETE_TASK', id);
    },

    SET_TAREFA_SELECIONADA({ commit }, tarefa) {
      commit("SET_TAREFA_SELECIONADA", tarefa);
    },

    atualizarTarefa({ commit }, tarefaEditada) {
      commit("ATUALIZAR_TAREFA", tarefaEditada);
    },
  },

  getters: {
    allTasks: (state) => state.tarefas,
  },
});