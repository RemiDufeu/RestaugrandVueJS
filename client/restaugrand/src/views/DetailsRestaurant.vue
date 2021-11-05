<template>
  <div class="container text-center">
    <v-btn
      elevation="2"
      fab
      top
      fixed
      left
      color="secondary"
      @click="$router.back()"
      class="buttonBack"
      >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
    <h1 class="pa-4 mx-auto text-center">{{restauData.name}}</h1>
    <h3 class="pa-4 mx-auto text-center">{{restauData.cuisine}}</h3>
    <v-divider></v-divider>
    <div class="containerPage">
    <h2 class="text-left pa-4">Où nous trouver ?</h2>
    <div class="mapContainer">
      <l-map
        :center="center"
        :zoom="zoom"
        class="map"
        ref="map">
        <l-marker
          key="restaurant"
          :lat-lng="center"
          :icon="icon"
          :icon-anchor="icon.iconAnchor"
          >
        </l-marker>
          <l-tile-layer
            :url="url">
          </l-tile-layer>
        </l-map>
      </div>
      <h4 class="text-right pa-4 pr-8">{{restauData.borough}}</h4>
    </div>
    <Menu></Menu>
  </div>
</template>

<script>
  import APIRestau from '../api'
  import { LMap, LTileLayer,LMarker } from 'vue2-leaflet';
  import { icon } from "leaflet";
  import 'leaflet/dist/leaflet.css';
  import Menu from '../components/Menu.vue'

  export default {
    name: 'DetailsRestaurant',
    components: {
      LMap,
      LTileLayer,
      LMarker,
      Menu
    },
    data: function() {
      return {
        restauData : '',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        zoom: 17,
        center : [0,0],
        icon: icon({
          iconUrl: "http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/map-marker-icon.png",
          iconSize: [32, 37],
          iconAnchor: [0, 0]
        }),
      }
    },
    mounted () {
      this.getOneRestau(this.$route.params.id)
    },
    methods : {
      getOneRestau (id) {
        APIRestau.getOneRestau(id)
        .then(res => this.restauData = res.restaurant)
        .then ( (res)=> {
          this.centerUpdated([this.restauData.address.coord[1],this.restauData.address.coord[0]])
          })
      },
      centerUpdated (center) {
        this.center = center
        this.iconAnchor = center
      }
    }
  }
</script>

<style>
.map {
   position: absolute;
   width: 100%;
   height: 300px;
   overflow :hidden
 }
.mapContainer {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
    height: 300px;
    position: relative;
}
.containerPage {
  margin: auto;
  max-width: 800px;
}
.buttonBack {
  margin-top: 75px;
}
</style>
