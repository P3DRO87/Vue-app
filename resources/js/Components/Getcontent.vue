<template>
  <div class="container getcontent-container">
    <div class="row">
      <div class="d-flex align-items-end col-lg-2">
        <button @click="getData" class="btn btn-primary">Get Now</button>
      </div>
      <div class="col-lg-10">
        <div class="content-container">
          <h1>{{contenedor}}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Getcontent",
  data() {
    return {
      contenedor: "",
      url: "http://localhost/Vue-app/my-first-api/my-first-api.php"
    };
  },
  methods: {
    getData() {
      axios.get(this.url).then(response => {
        this.contenedor = response.data;
        console.log(response);
      });
    }
  }
};
</script>