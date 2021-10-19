<template>
    <div class="mx-6" style="width : 100%">
        <h2>Trouver votre restaurant parmis les {{count}} présents sur notre site</h2>
        <v-divider/>
        <v-autocomplete label="Cherchez le nom de votre restaurant"></v-autocomplete>
        <v-data-table
        :headers="headers"
        :items="dataRestau"
        class="elevation-1"
         hide-default-footer
        :items-per-page="pageSize"
        >
        <template v-slot:item.actions="{ item }">
          <v-icon
            small
            class="mr-2"
            @click="editItem(item)"
          >
            mdi-pencil
          </v-icon>
          <v-icon
            small
            @click="deleteItem(item)"
          >
            mdi-delete
          </v-icon>
        </template>
        </v-data-table>
    </div>
</template>

<script>

import APIRestau from '../api'

  export default {
    name: 'tableauRestaurant',
    data : function () {
      return {
        dataRestau : [],
        count : '',
        headers: [
        { text: 'Nom du restaurant', align: 'start', sortable: false, value: 'name'},
        { text: 'Catégorie', value: 'cuisine', sortable: false },
        { text: 'Arrondissement', value: 'borough', sortable: false },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
        pageSize : 11,
        currentPage : 1,
        name : ''
      }
    },
    components: {
    },
    mounted (){
      this.getRestauCount()
      this.getRestau()
    },
    methods : {
      getRestau () {
        APIRestau.getRestaurant(this.pageSize, this.currentPage, this.name).then(res => this.dataRestau = res)
      },
      getRestauCount () {
         APIRestau.getRestaurantCount().then(res => this.count = res)
      },
      deleteItem(item) {
        //TODO
        console.log(item)
      },
      editItem(item) {
        //TODO
        console.log(item)
      }
    }
  }
</script>
