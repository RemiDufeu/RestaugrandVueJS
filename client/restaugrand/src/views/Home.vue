<template>
  <div>
    <div class="d-flex justify-center px-5">
      <tab-restaurant/>
    </div>
    <ajout-restau/>
  </div>
</template>

<script>
  import TabRestaurant from '../components/tabRestaurant.vue'
  //import Sidebar from '../components/sidebar.vue'
import AjoutRestau from '../components/ajoutRestau.vue'

  export default {
    name: 'Home',
    components: {
      TabRestaurant,
      //Sidebar,
      AjoutRestau
    },
  }
</script>
