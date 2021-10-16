<template>
<div>

<top-menu></top-menu>

    <div v-bind:id="idCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li v-bind:data-target="'#' + idCarousel" data-slide-to="0" class="active"></li>
        <li v-bind:data-target="'#' + idCarousel" data-slide-to="1" class=""></li>
        <li v-bind:data-target="'#' + idCarousel" data-slide-to="2" class=""></li>
    </ol>
<div class="carousel-inner">
    <div class="carousel-item active">
        <img src="https://dl.dropboxusercontent.com/s/9mh8mw5wx3du14e/LogoJGYParking.jpg?dl=0" alt="banner image">
            <div class="carousel-caption d-none d-md-block">
                <h2>Bienvenidos a JGY Parking</h2>
                <h4>* Somos mas que un parqueadero *</h4>
                <h6>Ofrecemos tarifas dinamicas Mensualidades o servicio por minuto</h6>
                <p>Conoce los planes y beneficios que tenemos para empresas</p>
        </div>
    </div>

    <div class="carousel-item">
        <img src="https://picsum.photos/id/1070/1500/400" alt="banner image">
            <div class="carousel-caption d-none d-md-block">
                <h3>Pregunta por nuestros servicios</h3>
                <h4>Lo que tenemos para tu empresa y tus clientes</h4>
            </div>
    </div>

    <div class="carousel-item">
        <img src="https://picsum.photos/id/146/1750/400" alt="banner image">
            <div class="carousel-caption d-none d-md-block">
                <h2>* Tenemos para ti: *</h2>
                <h4>Mensualidades</h4>
                <h4>Servicio por Horas</h4>
                <h4>Servicio por minutos</h4>
                <h4>Bonos de Regalo</h4>
                <h4>Parqueadero Prepagado para tus clientes</h4>
            </div>
    </div>
</div>
    <a class="carousel-control-prev" :href="'#' + idCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" :href="'#' + idCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>
</div>

</div>
</template>

<script>
import TopMenu from './TopMenu';

export default {
  name: "TopBanner",
  components:{
      TopMenu
  },
  props: ['idCarousel']
};
</script>

<style scoped>
</style>