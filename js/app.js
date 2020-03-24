const app = new Vue({
  el: "#app",
  data: {
    titulo: "Vue is ready!",
    artists: ["skrillex", "one republic", "barnie"],
    apiUrl:
      "https://dev-encore-development.pantheonsite.io/wp-json/wp/v2/artists"
  },

  methods: {
    getArtists() {
      axios.get(this.apiUrl).then(response => {
        this.artists = response.data;
        console.log(response);
      });
    }
  },

  created() {
    this.getArtists();
  }
});
