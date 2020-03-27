<template>
  <div class="container d-flex justify-content-center modal-container">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <h3>{{title}}</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus, quis esse? Alias, et quidem neque, dolorem soluta, commodi maiores laudantium quasi sunt fuga delectus voluptate animi! Cumque numquam obcaecati at.</p>
          <button class="btn btn-primary" @click="closeModal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",

  props: ["title"],

  methods: {
    closeModal() {
      this.$emit("close");
    }
  }
};
</script>
