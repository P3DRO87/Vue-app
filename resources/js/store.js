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
    nuevaTarea: "",
    alvison: "soy alvison",
    tareas: [],
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
      this.data.splice(data);
    },
  },
});

export default store;
