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
        // console.log(response);
      });
    }
  },
  created() {
    this.getArtists();
  }
});
