<template>
  <div id="vueApp" class="demo-layout">
    <AppHeader />
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./layout_components/AppHeader";
import AppFooter from "./layout_components/AppFooter";

export default {
  name: "VueInstance",
  components: {
<<<<<<< HEAD
    Header,
    Footer,
    Typedata,
    Loader,
    Getcontent,
    Modal
  },

  data() {
    return {
      titulo: "Artists List",
      artists: [],
      apiUrl:
        "https://dev-encore-development.pantheonsite.io/wp-json/wp/v2/artists",
      showModal: false,
      selectedArtits: {
        name: "",
        description: ""
      }
    };
  },
  methods: {
    getArtists() {
      axios.get(this.apiUrl).then(response => {
        this.artists = response.data;
      });
    },

    toggleModal(numeroDeArtista) {
      // 1 Con el numero de artista, definir el artista seleccionado antes de abrir el modal

      // 2 Replasar data de selected artist por la del artista seleccionado.
      const selectedArtist = numeroDeArtista
        ? this.artists[numeroDeArtista]
        : false;

      if (selectedArtist != false) {
        console.log(selectedArtist);
        this.selectedArtits.name = selectedArtist.title.rendered;
      }

      // 3 abrir el modal
      this.showModal = !this.showModal;
    }
  },
  mounted() {
    this.getArtists();
=======
    AppHeader,
    AppFooter
>>>>>>> 6f80ad7200d78af5353828232c6215fdf77381f5
  }
};
</script>

<style lang="scss">
#productsApp {
  min-height: 100vh;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.5s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
