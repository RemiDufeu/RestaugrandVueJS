<template>
  <div>
    <div class="d-flex justify-space-around flex-wrap">
      <v-card
        v-for="menu in MenusSelectionne"
        :key="menu.nom"
        width="250"
        class="ma-4"
      >
        <h2>{{ menu.nom }}</h2>
        <div class="d-flex justify-space-around flex-column h-100">
          <h4 v-if="menu.service.entree">Entrée</h4>
          <h4 v-if="menu.service.plat">Plat</h4>
          <h4 v-if="menu.service.dessert">Dessert</h4>
          <h4 v-if="menu.service.entreeOuDessert">Entrée ou Dessert</h4>
          <h3 v-if="menu.prix">{{ menu.prix }}€</h3>
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
      menu: "",

      Menus: [
        {
          nom: "Formule déjeuner",
          prix: 16,
          service: {
            entree: false,
            plat: true,
            dessert: false,
            entreeOuDessert: true,
          },
        },
        {
          nom: "Menu plaisir",
          prix: 21,
          service: {
            entree: false,
            plat: true,
            dessert: false,
            entreeOuDessert: true,
          },
        },
        {
          nom: "Menu Gourmand",
          prix: 23,
          service: {
            entree: true,
            plat: true,
            dessert: true,
            entreeOuDessert: false,
          },
        },
        {
          nom: "Formule chic",
          prix: 65,
          service: {
            entree: true,
            plat: true,
            dessert: true,
            entreeOuDessert: false,
          },
        },
        {
          nom: "Menu rapide",
          prix: 6.99,
          service: {
            entree: false,
            plat: true,
            dessert: false,
            entreeOuDessert: false,
          },
        },
        {
          nom: "Menu B",
          prix: 12.9,
          service: {
            entree: true,
            plat: true,
            dessert: false,
            entreeOuDessert: false,
          },
        },
        {
          nom: "Menu 66",
          prix: 66,
          service: {
            entree: true,
            plat: true,
            dessert: true,
            entreeOuDessert: false,
          },
        },
        {
          nom: "Menu petite faim mais gourmand",
          prix: 14.99,
          service: {
            entree: true,
            plat: false,
            dessert: true,
            entreeOuDessert: false,
          },
        },
        {
          nom: "Menu special goûter",
          prix: 9.99,
          service: {
            entree: false,
            plat: false,
            dessert: true,
            entreeOuDessert: false,
          },
        },
        {
          nom: "Menu spécial gala",
          prix: 80,
          service: {
            entree: true,
            plat: true,
            dessert: true,
            entreeOuDessert: false,
          },
        },
        {
          nom: "Menu du soir",
          prix: 29,
          service: {
            entree: false,
            plat: true,
            dessert: true,
            entreeOuDessert: false,
          },
        },
        {
          nom: "formule midi",
          prix: 22,
          service: {
            entree: false,
            plat: true,
            dessert: false,
            entreeOuDessert: true,
          },
        },
        {
          nom: "formule automnale",
          prix: 10.99,
          service: {
            entree: true,
            plat: false,
            dessert: false,
            entreeOuDessert: false,
          },
        },
        {
          nom: "Menu etudiant",
          prix: 15,
          service: {
            entree: false,
            plat: true,
            dessert: false,
            entreeOuDessert: true,
          },
        },
        {
          nom: "Menu special hiver",
          prix: 55,
          service: {
            entree: true,
            plat: true,
            dessert: true,
            entreeOuDessert: false,
          },
        },
      ],
      MenusSelectionne: [],
    };
  },
  mounted() {
    this.getTypeCuisine(this.$route.params.id);
    this.getRandomMenu(this.TypeCuisine);
    this.SelectionMenu();
  },
  methods: {
    SelectionMenu() {
      console.log("in selection menu");
      // 6= max = this.Menus.length() et 0 est laissé pour visualiser le min facilement
      let NmbrMenus = Math.floor(Math.random() * (6 - 2 + 1)) + 2;
      console.log("nmbremenu : " + NmbrMenus);
      for (let i = 0; i < NmbrMenus; i++) {
        let aleatoire = Math.floor(Math.random() * (15 - 0 + 1)) + 0;

        // le nombre de menus est passé en dur pour l'instant
        if (this.Menus[aleatoire] != undefined) {
          this.MenusSelectionne.push(this.Menus[aleatoire]);
          delete this.Menus[aleatoire];
        }
      }
    },
    getTypeCuisine(id) {
      APIRestau.getOneRestauCuisine(id).then((res) => {
        console.log(res);
        this.TypeCuisine = res.Cuisine;
      });
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