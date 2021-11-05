<template>
  <div class="d-flex justify-space-between ma-4">
    <div>
      <div>{{ plat.nom }}</div>
      <div class="grey--text text-right" style="width: 35px">
        {{ plat.prix }} $
      </div>
    </div>
    <div><img height="100" :src="plat.img" :alt="plat.nom" /></div>
  </div>
</template>

<script>
export default {
  name: "Carte",
  props: ["plat"],
  components: {},
};
</script>