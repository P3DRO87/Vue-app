<template>
  <div class="component">
    <h3>{{titulo}}</h3>
    <input
      type="text"
      class="form-control my-3"
      v-model="nuevaTarea"
      v-on:keyup.enter="agregarTarea"
      placeholder="Type a new task :D"
    />
    <button class="btn btn-primary" @click="agregarTarea">Add</button>
    <div class="mt-3" v-for="(tarea, index) of tareas" :key="index">
      <div :class="['alert', tarea.estado ? 'alert-success' : 'alert-danger']" role="alert">
        <div class="d-flex justify-content-between align-items-center">
          <!-- texto -->
          <div>{{tarea.nombre}} - {{tarea.estado}}</div>
          <!-- botones -->
          <div>
            <!-- agregar Tarea -->
            <button class="btn btn-success btn-md" @click="editarTarea(index)">OK</button>
            <!-- eleminiar Tarea -->
            <button class="btn btn-danger btn-md delete-button" @click="eliminarTarea(index)">X</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentPage3",

  data() {
    return {
      titulo: "lista de actividades :D",
      tareas: [],
      nuevaTarea: ""
    };
  },

  methods: {
    agregarTarea: function(e) {
      if (!this.nuevaTarea) {
        alert("porfavor escribe una actividad");
        e.preventDefault();
      } else {
        this.tareas.push({
          nombre: this.nuevaTarea,
          estado: false
        });
        this.nuevaTarea = "";
        localStorage.setItem("task", JSON.stringify(this.tareas));
      }
    },

    editarTarea: function(index) {
      this.tareas[index].estado = true;
      localStorage.setItem("task", JSON.stringify(this.tareas));
    },

    eliminarTarea: function(index) {
      this.tareas.splice(index, 1);
      localStorage.setItem("task", JSON.stringify(this.tareas));
    }
  },

  created: function() {
    let datosDB = JSON.parse(localStorage.getItem("task"));
    if (datosDB === null) {
      this.tareas = [];
    } else {
      this.tareas = datosDB;
    }
  }
};
</script>
