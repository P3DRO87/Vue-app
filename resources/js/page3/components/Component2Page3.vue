<template>
  <div class="component">
    <h3>I am the second component in page 3</h3>
    <div class="loop-container">
      <div
        :class="['alert', item.estado ? 'alert-success' : 'alert-danger']"
        v-for="(item, index) in dataTask"
        class="alert alert-primary"
        role="alert"
        :key="index"
      >
        <div class="d-flex justify-content-between align-items-center">
          <div>{{item.newTask}}</div>
          <div>
            <button class="btn btn-success btn-md" @click="editTask(index)">
              <i class="material-icons">done</i>
            </button>
            <button
              class="btn btn-danger btn-md detele-button"
              v-on:keyup.46="deleteTask(index)"
              @click="deleteTask(index)"
            >
              <i class="material-icons">delete</i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "ComponentPage3",

  computed: {
    ...mapState(["dataTask"])
  },

  methods: {
    editTask(index) {
      this.dataTask[index].estado = true;
    },

    deleteTask(index) {
      this.dataTask.splice(index, 1);
    }
  }
};
</script>