import axios from "axios";
import Vue from "vue";

const app = new Vue({
  el: "#app",
  data: {
    titulo: "Artists List",
    artists: [],
    apiUrl:
      "https://dev-encore-development.pantheonsite.io/wp-json/wp/v2/artists"
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
});
