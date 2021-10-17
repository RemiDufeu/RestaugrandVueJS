<template>
    <v-card elevation="12" width="256" rounded>
        <v-navigation-drawer floating permanent>
            <liste-categories/>
        </v-navigation-drawer>
    </v-card>
</template>

<script>
import ListeCategories from './listeCategories.vue'

  export default {
    name: 'sidebar',
    components: {
        ListeCategories
    }
  }
</script>
