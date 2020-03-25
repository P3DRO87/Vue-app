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
        <div v-for="(artist, index) in artists" class="col-lg-4 col-md-6" :key="index">
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
import Footer from "./Components/Footer";

export default {
  name: "Vueapp",
  components: {
    Header,
    Footer
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
