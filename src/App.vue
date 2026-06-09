<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Navbar/>
    <main class="flex-1">
      <router-view :key="$route.fullPath"></router-view>
    </main>
    <Footer/>
  </div>
</template>

<style>
#app {
  font-family: "Nunito", sans-serif;
}
@font-face {
  font-family: "Nunito";
  src: local("Nunito"), url("./assets/fonts/nunito/Nunito-Regular.ttf")
}
</style>
<script>
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
export default {
  components: { Footer, Navbar }
}
</script>
