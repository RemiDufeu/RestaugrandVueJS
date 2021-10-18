<template>
    <div class="">
        <h2>Trouver votre restaurant parmis les {{count}} présents sur notre site</h2>
        <v-divider/>
        <v-autocomplete label="Cherchez le nom de votre restaurant"></v-autocomplete>
        <button  v-on:click="getRestau">get restau</button>
        {{data}}
    </div>
</template>

<script>

import APIRestau from '../api'

  export default {
    name: 'tableauRestaurant',
    data : function () {
      return {
        data : [],
        count : '',
      }
    },
    components: {
    },
    mounted (){
      APIRestau.getRestaurantCount().then(res => this.count = res)
    },
    methods : {
      getRestau () {
        APIRestau.getRestaurant().then(res => this.data = res)
      }
    }
  }
</script>
