<template>
  <div id="app">
    <Navbar/>
    <router-view/>
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
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export default {
  components: {Footer, Navbar}
}
</script>
