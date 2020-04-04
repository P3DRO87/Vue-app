<template>
  <div class="page">
    <h2 class="page-title">I am the page 3.</h2>
    <ComponentPage3 />
    <Component2Page3 />
    <div class="form-group">
      <router-link to="/">Go to page 1</router-link>
    </div>
  </div>
</template>

<script>
import ComponentPage3 from "./page3/components/ComponentPage3";
import Component2Page3 from "./page3/components/Component2Page3";

export default {
  name: "Page3",
  components: {
    ComponentPage3,
    Component2Page3
  }
};
</script>
