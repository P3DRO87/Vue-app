<template>
  <div class="container typedata-form">
    <div class="row">
      <div class="col-lg-12">
        <form action class="form-group">
          <input
            type="text"
            class="form-control"
            v-model="mirror"
            placeholder="abajo aparece lo que escribes :D"
          />
          <br />
          <div class="form-control">{{mirror}}</div>
        </form>
      </div>
      <div class="col-lg-12"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Typedata",

  data() {
    return {
      mirror: ""
    };
  }
};
</script>