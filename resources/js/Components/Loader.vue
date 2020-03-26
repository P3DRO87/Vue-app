<template>
  <svg id="loader" v-if="show">
    <circle />
  </svg>
</template>

<script>
export default {
  name: "Loader",
  data() {
    return {
      show: true
    };
  },

  mounted() {
    this.showToggle();
  },

  methods: {
    showToggle() {
      setTimeout(() => {
        document.getElementById("contenedor").style.display = "block";
        this.show = false;
      }, 1000);
    }
  }
};
</script>