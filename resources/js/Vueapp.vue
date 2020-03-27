<template>
  <div id="app">
    <Loader />
    <div id="contenedor" class="animate-bottom">
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
              <div class="d-flex justify-content-center">
                <button class="btn btn-primary" @click="toggleModal(index)">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Typedata />
      <Getcontent />
      <Modal
        v-if="showModal"
        v-on:close="toggleModal"
        title="Modal"
        :selectedArtits="selectedArtits"
      />
      <Footer />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Typedata from "./Components/Typedata";
import Loader from "./Components/Loader";
import Getcontent from "./Components/Getcontent";
import Modal from "./Components/Modal";

export default {
  name: "Vueapp",
  components: {
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
      const selectedArtist = this.artists[numeroDeArtista];
      console.log(selectedArtist);
      this.selectedArtits.name = selectedArtist.title;

      // 3 abrir el modal
      this.showModal = !this.showModal;
    }
  },
  created() {
    this.getArtists();
  }
};
</script>
