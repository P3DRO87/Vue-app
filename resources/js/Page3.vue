<template>
  <div class="page">
    <h2 class="page-title">I am the page 3.</h2>
    <ComponentPage2 />
    <div class="form-group">
      <router-link to="/">Go to page 1</router-link>
    </div>
  </div>
</template>

<script>
import ComponentPage3 from "./page3/components/ComponentPage3";

export default {
  name: "Page3",
  components: {
    ComponentPage3
  }
};
</script>
