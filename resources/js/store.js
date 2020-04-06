import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    data: [
      {
        title: "This is data title 1",
        description: "Description, Lorem Ipsum",
      },
      {
        title: "This is data title 2",
        description: "Description, Dolor Sit Sammet",
      },
    ],

    dataTask: [],
  },
  mutations: {
    addNewData(state, payload) {
      const newData = {
        title: payload.title,
        description: payload.description,
      };
      this.state.data.push(newData);
    },

    removeData(state, payload) {
      const index = payload;
      this.state.data.splice(index, 1);
    },

    addNewTask(state, payload) {
      const newdataTask = {
        newTask: payload.newTask,
        estado: false,
      };
      state.dataTask.push(newdataTask);
    },
  },
});

export default store;
