<template>
  <div>
            <div class="row mt-md-5 mt-sm-5 mt-xs-5">
        <div class="col-lg-6 col-xs-12"  v-for="(movie, index) of movies" :key="index">
    <div class="d-flex justify-content-center align-items-center" >
      <div class="p-3">
          <img :src="movie.Poster" alt="movie poster">
      </div>

      <div class="p-2">
        <h2>{{movie.Title}}</h2>
        <hr>
        <p>
          1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          harum natus, aut, voluptate maiores saepe delectus accusamus quibusdam
          officiis fugiat consequatur minus fugit, fuga asperiores! Eveniet
          alias doloremque ratione dolorum!
        </p>
      </div>
    </div>
    <div class="d-flex container-fluid justify-content-end pb-2 mt-n2">
      <a :href="'https://www.imdb.com/title/' + movie.imdbID" target="_blank" class="btn btn-outline-info">Info</a>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SectionApi",
  data() {
    return {
      movies: null,
    };
  },
  methods:{

  },
  // Este es el hook que utilizamos para cargar las películas al momento de ingresar al sitio web
  // Al parecer no es el correcto y la información no carga
  mounted() {
    axios
      .get("http://www.omdbapi.com/?s=harry+potter&type=movie&apikey=23daade9")
      .then((response) => {
        this.movies = response.data.Search.slice(0, 4);
        console.log(this.movies);
      });
  },
};
</script>

<style scoped>

img{
  max-width: 150px;
};

</style>