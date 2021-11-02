<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{restauData.name}}</p>
  </div>
</template>

<script>
  import APIRestau from '../api'

  export default {
    name: 'About',
    data: function() {
      return {
        restauData : ''
      }
    },
    mounted () {
      this.getOneRestau(this.$route.params.id)
    },
    methods : {
      getOneRestau (id) {
        APIRestau.getOneRestau(id)
        .then(res => this.restauData = res.restaurant)
      }
    }
  }
</script>
