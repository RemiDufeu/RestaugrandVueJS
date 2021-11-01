<template>
  <div>
    <v-container>
      <div class="d-flex">
        <sidebar/>
        <tab-restaurant/>
      </div>
      <ajout-restau/>
    </v-container>
    
  </div>
</template>

<script>
  import TabRestaurant from '../components/tabRestaurant.vue'
  import Sidebar from '../components/sidebar.vue'
import AjoutRestau from '../components/ajoutRestau.vue'

  export default {
    name: 'Home',
    components: {
      TabRestaurant,
      Sidebar,
      AjoutRestau
    },
  }
</script>
