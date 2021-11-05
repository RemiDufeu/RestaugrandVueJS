<template>
  <div>
    <h1>{{restauData.name}}</h1>
<div v-for="Menu in Carte" :key="Menu.id">{{Menu.gethorsdoeuvre}}</div>
</div>
</template>

<script type="text/javascript">
  import APIRestau from '../api'
  import Menus from "../Menus"
  import CartesDesPlats from "../CartesDesPlats"
  

  export default {
    name: 'ViewMenu',
    data: function() {
      return {
        TypeCuisine : ''
      }
    },
    mounted () {
        this.getTypeCuisine(this.$route.params.id);
    },
    methods : {
      getTypeCuisine(id){
       console.log("in getTypeCuisine");
     // console.log(JSON.stringify(APIRestau.getOneRestauCuisine(this.$route.params.id)));
    
       APIRestau.getOneRestauCuisine(id).then(res => this.TypeCuisine = res.Cuisine);
       setTimeout(function(){ console.log("TEST ===" + this.TypeCuisine); }, 3000); 
         }
         ,
      getRandomMenu:function(typeCuisine){
          console.log("style de cuisine : "+ typeCuisine);
          let Carte  = new CartesDesPlats(""); 
          for(let i=0;i++;i<20){
              
           let menu =  Menus("");
            menu.getRandomMenu();
            Carte.ajouterMenus(menu);
            console.log("menu : "+menu);
          }
     }
    }
  }
</script>
