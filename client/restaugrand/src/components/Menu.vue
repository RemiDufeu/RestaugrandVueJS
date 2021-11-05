<template>
  <div>
    <div class="d-flex justify-space-around flex-wrap">
      <v-card v-for="menu in Menus" :key="menu.nom" width="250" class="ma-4 pa-3">
        <h2>{{ menu.nom }}</h2>
        <div class="d-flex justify-center flex-column my-4 h96">
          <h4 v-if="menu.service.entree" class="my-1">Entrée</h4>
          <h4 v-if="menu.service.plat" class="my-1">Plat</h4>
          <h4 v-if="menu.service.dessert" class="my-1">Dessert</h4>
          <h4 v-if="menu.service.entreeOuDessert" class="my-1">Entrée ou Dessert</h4>
        </div>
        <v-divider></v-divider>
        <h3 class="my-4">{{menu.prix}}$</h3>
      </v-card>
    </div>
  </div>
</template>

<script type="text/javascript">
import APIRestau from "../api";
import Menus from "../Menus";
import CartesDesPlats from "../CartesDesPlats";

export default {
  name: "Menu",
  data: function () {
    return {
      TypeCuisine: "",
      menu:"",
      Menus: [
       {
          nom : "Formule déjeuner",
          prix : 16,
          service : {
            entree : false,
            plat : true,
            dessert : false,
            entreeOuDessert : true
          }
        },
         {
          nom: "Menu plaisir",
          prix : 21,
          service : {
            entree : false,
            plat : true,
            dessert : false,
            entreeOuDessert : true
          }
        },
         {
          nom: "Menu Gourmand",
          prix : 23,
          service : {
            entree : true,
            plat : true,
            dessert : true,
            entreeOuDessert : false
          }
        }
      ]
    }
  },
  mounted() {
    this.getTypeCuisine(this.$route.params.id);
     this.getRandomMenu(this.TypeCuisine);
  },
  methods: {
    getTypeCuisine(id) {
      APIRestau.getOneRestauCuisine(id)
      .then(
        (res) => {
          console.log(res)
          this.TypeCuisine = res.Cuisine
        }
      );
    },
    getRandomMenu: function (typeCuisine) {
      console.log("style de cuisine : " + typeCuisine);
      let Carte = new CartesDesPlats("");
      for (let i = 0; i++; i < 20) {
        let menu = Menus("");
        menu.getMenus();
        Carte.ajouterMenus(menu);
        console.log("menu : " + menu);
      }
    },
  },
};
</script>

<style>
.h96 {
  height: 96px;
}
</style>