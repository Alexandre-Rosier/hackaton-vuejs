<template>
  <div id="app">
    <h1 class="title-accueil">LES ANIMAUX DE LA FERME</h1>
    <div class="container-img-accueil">
      <img
        class="img-accueil"
        alt="animaux de la ferme"
        src="./assets/ferme.jpg"
      />
    </div>
    <Slider />
    <HelloWorld />
  </div>
</template>

<script>
import Slider from "./components/Slider.vue";
import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    Slider,
    HelloWorld,
  },
};
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50;
	margin-top: 60px;
	background-color: rgb(238, 211, 123);
	border: 2px solid rgb(194, 235, 245);
	border-radius: 2px; */
}

.img-accueil {
  height: 200px;
  width: 200px;
  box-shadow: 5px 5px 5px rgb(208, 247, 230);
  border-radius: 500px;
  opacity: 0.8;
}
</style>
