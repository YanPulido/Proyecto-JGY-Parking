<template>
<div>
<!--AL HACER PRUEBAS PARECE QUE ESTE COMPONENTE NO SE USA-->
<top-menu></top-menu>

    <div v-bind:id="idCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
        <li v-bind:data-target="'#' + idCarousel" data-slide-to="0" class="active"></li>
        <li v-bind:data-target="'#' + idCarousel" data-slide-to="1" class=""></li>
        <li v-bind:data-target="'#' + idCarousel" data-slide-to="2" class=""></li>
    </ol>
    <div class="carousel-inner">
        <!--<div class="carousel-item active">
<img src="https://placeimg.com/3000/400/animals" alt="banner image">
            <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
        </div>-->
        <div class="carousel-item active">
<img src="http://lorempixel.com/400/200/sports/" alt="banner image">
            <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
        </div>
        <div class="carousel-item">
<img src="https://placeimg.com/3000/400/tech" alt="banner image">
            <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
        <div class="carousel-item">
<img src="https://placeimg.com/3000/400/any" alt="banner image">
            <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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