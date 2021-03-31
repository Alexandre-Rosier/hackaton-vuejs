<template>
<h1>LES ANIMAUX DE LA FERME</h1>
	<img class="img-accueil" alt="animaux de la ferme" src="./assets/ferme.jpg" />
	<Slider/>
</template>

<script>

import Slider from "./components/Slider.vue";
export default {
	name: "App",
	components: {
		Slider,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
.img-accueil {
	height: 200px;
	width: 200px;
	box-shadow: 8px 8px 10px pink;
	border-radius: 500px;
}
</style>
