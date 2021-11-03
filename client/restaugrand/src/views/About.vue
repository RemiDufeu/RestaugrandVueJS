<template>
  <div class="container">
    <h1 class="pa-4 mx-auto text-center">Modification du restaurant</h1>
    <form class="pa-4 mx-auto" style="max-width : 750px">
      <v-text-field label="Nom du restaurant" v-model="restauData.name" required></v-text-field>
      <v-text-field label="Cuisine du restaurant" v-model="restauData.cuisine" required></v-text-field>
      <v-text-field label="Arrondissment" v-model="restauData.borough" required></v-text-field>
      <div class="text-right pa-4">
        <v-btn
          class="white--text"
          color="secondary"
          @click="updateRestau()">
          Enregistrer
        </v-btn>
      </div>
    </form>
    <div class="pa-4 mx-auto text-center">
      <img src="../assets/imgRestau.jpg" width="100%" height="auto" class="pa-4 mx-auto" style="max-width : 750px"/>
    </div>
    <div class="mapContainer">
      <l-map
        :center="center"
        :zoom="zoom"
        class="map"
        ref="map"
        @update:center="centerUpdated">
      <l-marker
        key="restaurant"
        :lat-lng="center"
        >
        <l-icon-default ref="icon"></l-icon-default>
      </l-marker>
      <l-tile-layer
        :url="url">
      </l-tile-layer>
    </l-map>
    </div>
  </div>
</template>

<script>
  import APIRestau from '../api'
  import { LMap, LTileLayer,LMarker, LIconDefault } from 'vue2-leaflet';
  import 'leaflet/dist/leaflet.css';

  export default {
    name: 'About',
    components: {
      LMap,
      LTileLayer,
      LMarker,
      LIconDefault
    },
    data: function() {
      return {
        restauData : '',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        zoom: 17,
        center : [0,0]
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
      updateRestau () {
        console.log("todo")
      },
      centerUpdated (center) {
        this.center = center;
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

</style>
