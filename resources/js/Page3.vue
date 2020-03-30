<template>
  <div>
    <h2>I am the page 3.</h2>
    <ComponentPage2 />
    <p>Lorem Ipsum Dolor Site Sammet!</p>
    <router-link to="/">Go to page 1</router-link>
  </div>
</template>

<script>
import ComponentPage3 from "./page3/components /ComponentPage3";

export default {
  name: "Page3",
  components: {
    ComponentPage3
  }
};
</script>