<template>
  <div>
    <v-container>
      <div class="d-flex">
        <sidebar/>
        <tab-restaurant/>
      </div>
    </v-container>
  </div>
</template>

<script>
  import TabRestaurant from '../components/tabRestaurant.vue'
  import Sidebar from '../components/sidebar.vue'

  export default {
    name: 'Home',
    components: {
      TabRestaurant,
      Sidebar
    },
  }
</script>
