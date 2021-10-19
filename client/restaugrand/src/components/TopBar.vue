<template>
<div class="TopBar">
  <v-sheet
    height="400"
    class="overflow-hidden"
    style="position: relative;"
  >
    <v-container class="fill-height">
      <v-row
        align="center"
        justify="center"
      >
        <v-btn
          color="primary"
          dark
          @click.stop="drawer = !drawer"
        >
          Toggle
        </v-btn>
      </v-row>
    </v-container>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
    

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item
        :to="{path: '/'+item.path}" router
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title   >
            {{ item.title }}
            </v-list-item-title>

          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
  </div>
</template>

<script>

//import APIRestau from '../api'

  export default {
  
    data : function () {
      return {
        drawer: null,
        items: [
          { title: 'Home',path:'', icon: 'mdi-view-dashboard' },
          { title: 'About',path:'About', icon: 'mdi-forum' },
        ],
      }
    },
    components: {
    },
    
    methods : {
     
    }
  }
</script>
