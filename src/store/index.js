
import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';

moment.locale('pt-br');

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [],

  },
  mutations: {
    ADD_TASK(state, task) {
      state.tasks.push(task);
    },
    REMOVE_TASK(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    COMPLETE_TASK(state, id) {
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.completed = true;
        task.completedAt = moment().format('LLLL');;
      }
    },

    // UPDATE_TASK(state, updateTask) {
    //   const index = state.tasks.findIndex(task => task.id === updateTask.id);
    //   if (index !== -1) {
    //     state.tasks.splice(index, 1, updateTask);
    //   }
    // },
    // SET_TAREFA_EM_EDICAO(state, tarefa) {
    //   state.tarefaEmEdicao = tarefa;
    // },
  },


  actions: {
    addTask({ commit }, task) { // Adicione a definição da action addTask
      commit('ADD_TASK', task);
    },
    removeTask({ commit }, id) {
      commit('REMOVE_TASK', id);
    },
    completeTask({ commit }, id) {
      commit('COMPLETE_TASK', id);
    },

    // editTask({ commit, state }, updatedTask) {
    //   const taskIndex = state.tasks.findIndex(task => task.id === updatedTask.id);
    //   if (taskIndex !== -1) {
    //     commit('UPDATE_TASK', updatedTask);
    //   }
    // },
    // setTarefaEmEdicao({ commit }, tarefa) {
    //   commit('SET_TAREFA_EM_EDICAO', tarefa);
    // },
  },
  getters: {
    allTasks: (state) => state.tasks,
  },
});
