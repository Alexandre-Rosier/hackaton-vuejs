<template>
<h1 class="title-accueil">LES ANIMAUX DE LA FERME</h1>
	<div class="container-img-accueil">
	<img class="img-accueil" alt="animaux de la ferme" src="./assets/ferme.jpg" />
	</div>

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
.title-accueil {
	color: rgb(104, 100, 99) 
}

.container-img-accueil {
	margin: 50px;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	background-color: rgb(238, 211, 123);
	border: 2px solid rgb(194, 235, 245);
	border-radius: 2px;
}
	
.img-accueil {
	height: 200px;
	width: 200px;
	box-shadow: 5px 5px 5px rgb(208, 247, 230);
	border-radius: 500px;
	opacity: 0.8;
}
</style>
