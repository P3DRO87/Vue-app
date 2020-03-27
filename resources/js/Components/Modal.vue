<template>
  <div class="container d-flex justify-content-center modal-container">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h3>{{title}}</h3>
          <p>{{selectedArtits.name}}</p>
          <p>{{selectedArtits.description}}</p>
          <button class="btn btn-primary" @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",

  props: ["title", "selectedArtits"],

  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>
