<template>
  <div class="component">
    <h3></h3>
    <input
      v-model="newItem.newTask"
      id="newTask"
      type="text"
      class="form-control my-3"
      placeholder="Type a new task :D"
      v-on:keyup.enter="addTask"
    />
    <button class="btn btn-success" @click="addTask">Add</button>
  </div>
</template>

<script>
export default {
  name: "ComponentPage3",

  data() {
    return {
      newItem: {
        newTask: ""
      }
    };
  },

  methods: {
    addTask() {
      if (this.newItem.newTask != "") {
        this.$store.commit("addNewTask", this.newItem);
        this.newItem.newTask = "";
      } else {
        alert("please type something D:");
      }
    }
  }
};
</script>


