<template>
  <div class="my-6">
    <v-card class="pb-4">
      <h1 class="primary--text py-3">Carte</h1>
      <v-divider></v-divider>
      <div class="text-left ma-5">
        <h2>Entrée</h2>
        <carte-row
          v-for="entree in carte.entrees"
          :key="entree.nom"
          :plat="entree"
        />
        <h2>Plat</h2>
        <carte-row v-for="plat in carte.plats" :key="plat.nom" :plat="plat" />
        <h2>Dessert</h2>
        <carte-row
          v-for="dessert in carte.desserts"
          :key="dessert.nom"
          :plat="dessert"
        />
        <h2>Hors d'oeuvres</h2>
        <carte-row
          v-for="horsOeuvre in carte.horsOeuvres"
          :key="horsOeuvre.nom"
          :plat="horsOeuvre"
        />
      </div>
    </v-card>
  </div>
</template>

<script>
import CarteRow from "./CarteRow.vue";

export default {
  name: "Carte",
  components: {
    CarteRow,
  },
  data: function () {
    return {
      carte: {
        entrees: [
          {
            nom: "salade",
            prix: 6,
            img: require("../assets/imgsPlats/salade.jpg"),
          },
          {
            nom: "superSalade",
            prix: 10,
            img: require("../assets/imgsPlats/salade.jpg"),
          },
        ],
        plats: [
          {
            nom: "pizza",
            prix: 9,
            img: require("../assets/imgsPlats/pizza.jpg"),
          },
          {
            nom: "lasagnes",
            prix: 8,
            img: require("../assets/imgsPlats/lasagnes.jpg"),
          },
        ],
        desserts: [
          {
            nom: "panacota",
            prix: 4,
            img: require("../assets/imgsPlats/panacota.jpg"),
          },
          {
            nom: "tiramisu",
            prix: 5,
            img: require("../assets/imgsPlats/tiramisu.jpg"),
          },
        ],
        horsOeuvres: [
          {
            nom: "pizzaTruffe",
            prix: 19,
            img: require("../assets/imgsPlats/pizza.jpg"),
          },
          {
            nom: "lasagnesTruffe",
            prix: 18,
            img: require("../assets/imgsPlats/lasagnes.jpg"),
          },
        ],
      },
    };
  },
};
</script>