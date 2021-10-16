<template>
  <div id="app">

    <top-banner v-bind:idCarousel="['carousel1']" ></top-banner>

  <div class="container">
    
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/ingresar" class="nav-link">Ingresar</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contactos" class="nav-link">Contactos</router-link>
        </li>
      </ul>
    </nav><br />
    <transition name="fade">
      <router-view></router-view>
    </transition>

 

  </div>

<!-- Esta es la tarjeta de miembros que nos piden pero al parecer estamos enviando las props de mala 
manera o con un nombre no correcro -->
    <div class="container-fluid">
      <div class="row justify-content-center mb-5">
        <div class="col mt-5" v-for="(item, index) of team" :key="index">
          <team-card :miembro="item"></team-card>
        </div>
      </div>
    </div>

    <page-footer></page-footer>
    <!-- <h1>{{ title }}</h1> -->
  </div>
</template>

<script>
import PageFooter from "./components/PageFooter.vue";
import TeamCard from "./components/TeamCard.vue";
//import SectionApi from "./components/SectionApi.vue";
//import TopBanner from './components/TopBanner.vue';

export default {
  name: "App",
  components: {
    PageFooter,
    TeamCard,
    //SectionApi,
    //TopBanner,
  },
  data(){
    return {
      title: "Vivo dentro de VUE",
      carousel1 : 'carousel1',
      // Esta es la definición del objeto team, el objeto contiene la info de cada miembro del equipo
      // Se esta enviando correctamente en el ciclo v-for pero las pruebas fallan
      // Al parecer tenemos un problema con la definición de los nombres de los atributos
      team: [

        {
          codigo: 102,
          nombre: "Mensualidades",
          descripcion:
            "Tarifa especial de parqueo mensual en un punto de servicio de nuestra red de parqueaderos.",
          rol: "$ 150.000 Pesos x Mes",
          imagen:"https://dl.dropboxusercontent.com/s/u82h8440hrcee4u/calendario.png?dl=0",
        },
        {
          codigo: 203,
          nombre: "Servicio por Horas",
          descripcion:
            "Te ofrecemos servicio de pago por hora o fraccion, asi podras ahorrar y planificar tu consumo",
          rol: "$ 1.500 pesos x Hora",
          imagen:"https://dl.dropboxusercontent.com/s/kl6f975e14166hl/serhora.png?dl=0",
        },
        {
          codigo: 304,
          nombre: "Servicio por Minutos",
          descripcion:
            "Nuestra oferta de servicio tradicional con los mejores precios del mercado",
          rol: "$ 75 pesos x Minuto",
          imagen:"https://dl.dropboxusercontent.com/s/unzac241aeo1bco/serminuto.png?dl=0",
        },
        {
          codigo: 405,
          nombre: "Bonos de Regalo",
          descripcion:
            "Es una tarjeta que puedes obsequiar a cualquier persona que desees y equivale a un monto de dinero para pagar el parqueadero",
          rol: "Desde $ 50.000 pesos",
          imagen:"https://dl.dropboxusercontent.com/s/56fvl5dul1oktsr/bono.jpg?dl=0",
        },
        {
          codigo: 506,
          nombre: "Parqueadero Prepagado para tus clientes",
          descripcion:
            "Es una tarjeta que puedes recargar con un monto determinado de dinero para pagar tu servicio de parqueadero a un con un descuento del 25% SIEMPRE por minuto",
          rol: "Desde $ 50.000 pesos",
          imagen:"https://dl.dropboxusercontent.com/s/iusbe59j0q6nkrd/prepagado.png?dl=0",
        },

      ],
    };
  },
};
</script>