<template>
  <div class="mx-6" style="width : 100%">
      <h2 class="mt-8">Trouver votre restaurant parmis les {{count}} présents sur notre site</h2>
      <v-divider/>
      <v-text-field
        v-model="name"
        append-icon="mdi-magnify"
        label="Rechercher par nom"
        single-line
        hide-details
        class="my-10"
        v-on:input="nameChange"
      ></v-text-field>
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
        <v-icon
          small
          class="ml-2"
          @click="detailsItem(item)"
        >
          mdi-arrow-right-drop-circle
        </v-icon>
      </template>
      </v-data-table>
    <div class="text-center">
      <v-pagination
        v-model="currentPage"
        :length="Math.ceil(this.countSearch/this.pageSize)"
        :total-visible="7"
        v-on:input="getRestau"
      ></v-pagination>
      <div>
        <v-subheader class="pl-0">
          Taille de la page
        </v-subheader>
        <v-slider
          class=" mt-10"
          v-model="sliderNumber"
          thumb-label="always"
          v-on:end="updatePageSize"
        ></v-slider>
        
      </div>
    </div>
    <edit-restau :overlayOn="overlayEdition" :itemEdition="itemEdition" :closeOverlay="closeEditOverlay" :refreshRestau="getRestau"/>
  </div>
</template>

<script>

import APIRestau from '../api'
import _ from "lodash"
import EditRestau from './editRestau.vue'

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
        pageSize : 10,
        currentPage : 1,
        name : '',
        countSearch : 0,
        sliderNumber : 10,
        itemEdition : '',
        overlayEdition : false
      }
    },
    components: {
        EditRestau
    },
    mounted (){
      this.getRestauCount()
      this.getRestau()
      this.sliderNumber = this.pageSize
    },
    methods : {
      getRestau () {
        APIRestau.getRestaurant(this.pageSize, this.currentPage, this.name).then(res => {
            this.dataRestau = res.data
            this.countSearch = res.count
            }
          )
      },
      updatePageSize () {
        this.pageSize = this.sliderNumber
        this.getRestau()
        if(Math.ceil(this.countSearch/this.pageSize) < this.currentPage) {
        this.currentPage = Math.ceil(this.countSearch/this.pageSize)
      }
      },
      getRestauCount () {
         APIRestau.getRestaurantCount().then(res => this.count = res)
      },
      deleteItem(item) {
        APIRestau.supprimerRestaurant(item._id)
        .then(res => this.getRestau())
      },
      editItem(item) {
        this.itemEdition = { name : item.name, cuisine : item.cuisine, borough : item.borough, id : item._id}
        this.overlayEdition = true
      },
      detailsItem(item) {
        this.$router.push({ path: '/about/'+item._id })
      },
      closeEditOverlay() {
        this.overlayEdition = false
      },
      nameChange :  _.debounce(function() {
        this.getRestau()
      },300)
    }
  }
</script>
