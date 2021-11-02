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
  </div>
</template>

<script>

import APIRestau from '../api'
import _ from "lodash"

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
      }
    },
    components: {
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
        //TODO
       
        // console.log("id :"+item.id)
       // APIRestau.supprimerRestaurant(item.restaurant_id);
        console.log(item)
      },
      editItem(item) {
        this.$router.push({ path: '/about/'+item._id })
      },
      nameChange :  _.debounce(function() {
        this.getRestau()
      },300)
    }
  }
</script>
