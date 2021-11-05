<template>
    <div class="my-6">
      <v-card class="pb-4">
            <h1 class="primary--text py-3">Carte</h1>
            <v-divider></v-divider>
            <div class="text-left ma-5">
                <h2>Entrée</h2>
                    <div v-for="entree in carte.entrees" :key="entree.nom" class="d-flex justify-space-between ma-4">
                        <div>
                            <div>{{entree.nom}}</div>
                            <div class="grey--text text-right" style="width: 35px">{{entree.prix}} $</div>
                        </div> 
                        <div><img height="100" :src="entree.img" :alt="entree.nom"></div>
                    </div>
                <h2>Plat</h2>
                    <div v-for="plat in carte.plats" :key="plat.nom" class="d-flex justify-space-between ma-4">
                        <div>
                            <div>{{plat.nom}}</div>
                            <div class="grey--text text-right" style="width: 35px">{{plat.prix}} $</div>
                        </div> 
                        <div><img height="100" :src="plat.img" :alt="plat.nom"></div>
                    </div>
                <h2>Dessert</h2>
                    <div v-for="dessert in carte.desserts" :key="dessert.nom" class="d-flex justify-space-between ma-4">
                        <div>
                            <div>{{dessert.nom}}</div>
                            <div class="grey--text text-right" style="width: 35px">{{dessert.prix}} $</div>
                        </div> 
                        <div><img height="100" :src="dessert.img" :alt="dessert.nom"></div>
                    </div>
                <h2>Hors d'oeuvres</h2>
                    <div v-for="horsOeuvre in carte.horsOeuvres" :key="horsOeuvre.nom" class="d-flex justify-space-between ma-4">
                        <div>
                            <div>{{horsOeuvre.nom}}</div>
                            <div class="grey--text text-right" style="width: 35px">{{horsOeuvre.prix}} $</div>
                        </div> 
                        <div><img height="100" :src="horsOeuvre.img" :alt="horsOeuvre.nom"></div>
                    </div>
                </div>
            </v-card>
    </div>
</template>

<script>

  export default {
    name: 'Carte',
    components: {
    },
    data: function () {
      return {
        carte : {
            entrees : [
                { nom : "salade", prix : 6, img : require('../assets/imgsPlats/salade.jpg')},
                { nom : "superSalade", prix : 10, img : require("../assets/imgsPlats/salade.jpg")}
            ],
            plats : [
                { nom : "pizza", prix : 9, img : require("../assets/imgsPlats/pizza.jpg")},
                { nom : "lasagnes", prix : 8, img : require("../assets/imgsPlats/lasagnes.jpg")}
            ],
            desserts : [
                { nom : "panacota", prix : 4, img : require("../assets/imgsPlats/panacota.jpg")},
                { nom : "tiramisu", prix : 5, img : require("../assets/imgsPlats/tiramisu.jpg")}
            ],
            horsOeuvres : [
                { nom : "pizzaTruffe", prix : 19, img : require("../assets/imgsPlats/pizza.jpg")},
                { nom : "lasagnesTruffe", prix : 18, img : require("../assets/imgsPlats/lasagnes.jpg")}
            ]

        }
      }
    }
  }
</script>

<style>
.primaryC {
    color: var(--v-primary-base)
}
</style>