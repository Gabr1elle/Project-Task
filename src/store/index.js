
import Vue from 'vue';
import Vuex from 'vuex';

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
        task.completedAt = new Date().toISOString();
      }
    },
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
  },
  getters: {
    allTasks: (state) => state.tasks,
  },
});
