<template>
  <v-app class="globalStyle">
    <v-main>
      <TopBar />
      <router-view />
    </v-main>
  </v-app>
</template>
  
<script>
export default {
  name: "App",
  components: {
    TopBar: () => import("@/components/TopBar.vue"),
  },
  data: () => ({
    //
  }),
};
</script>

<style >
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap");

.globalStyle {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
.globalStyle h1,
.globalStyle h2,
.globalStyle h3,
.globalStyle h4,
.globalStyle h5,
.globalStyle h6 {
  font-family: "Lato", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
