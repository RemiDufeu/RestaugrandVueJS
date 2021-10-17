<template>
    <div class="ma-6">
      <h3>Catégories</h3>
      {{selected}}
       <v-checkbox v-model="selected" v-for="(cat,index) in listeCategories" v-bind:key="index" :label="cat.name" :value="cat.name"/>
    </div>
</template>

<script>

  export default {
    name: 'listeCategories',
    components: {
    },
    data: function () {
      return {
        listeCategories : [{name: "C1"}, {name: "C2"},{name: "C3"}],
        selected : []
      }
    }
  }
</script>
