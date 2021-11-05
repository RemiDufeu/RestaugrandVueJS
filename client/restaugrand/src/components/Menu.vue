<template>
  <div>
    <div class="d-flex justify-space-around flex-wrap">
      <v-card v-for="menu in Menus" :key="menu.nom" width="250" class="ma-4">
        <h2>{{ menu.nom }}</h2>
        <div class="d-flex justify-space-around flex-column h-100">
          <h4 v-if="menu.service.entree">Entrée</h4>
          <h4 v-if="menu.service.plat">Plat</h4>
          <h4 v-if="menu.service.dessert">Dessert</h4>
          <h4 v-if="menu.service.entreeOuDessert">Entrée ou Dessert</h4>
        </div>
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
        menu.getRandomMenu();
        Carte.ajouterMenus(menu);
        console.log("menu : " + menu);
      }
    },
  },
};
</script>