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
    name: 'Menu',
    data: function() {
      return {
        restauData : ''
      }
    },
    mounted () {
      console.log("in viewMenus")
      console.log(JSON.stringify(APIRestau.getOneRestauCuisine(this.$route.params.id).cuisine));
      let test = APIRestau.getOneRestauCuisine(1).then(res => test = res);
      
      console.log("TEST ===" + test);
      //this.getRandomMenu( APIRestau.getOneRestau(this.$route.params.id));
    },
    methods : {
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
