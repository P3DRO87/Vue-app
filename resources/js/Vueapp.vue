<template>
  <div id="app">
    <Header />
    <div class="container header-container">
      <div class="row">
        <div class="col">
          <h1>{{ titulo }}</h1>
        </div>
      </div>
    </div>
    <div class="container artist-container">
      <div class="row">
        <div v-for="artist in artists" class="col-md-4">
          <div class="artist">
            <p v-if="artist.title">{{ artist.title.rendered }}</p>
            <img class="img-fluid" v-if="artist.acf" :src="artist.acf.artis_image.url" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Components/Header";

export default {
  name: "Vueapp",
  components: {
    Header
  },
  data() {
    return {
      titulo: "Artists List",
      artists: [],
      apiUrl:
        "https://dev-encore-development.pantheonsite.io/wp-json/wp/v2/artists"
    };
  },
  methods: {
    getArtists() {
      axios.get(this.apiUrl).then(response => {
        this.artists = response.data;
      });
    }
  },
  created() {
    this.getArtists();
  }
};
</script>
