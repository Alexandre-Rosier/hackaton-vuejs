<template>
	<div id="app">
		<a name="top"></a>
		<NavTop />
		<Slider />
		<ChickenHack />
	</div>
</template>

<script>
import Slider from "./components/Slider.vue";
import ChickenHack from "./components/ChickenHack.vue";
import NavTop from "./components/NavTop.vue";
export default {
	name: "App",
	components: {
		Slider,
		ChickenHack,
		NavTop,
	},
};
</script>

<style>
html,
body,
#app {
	margin: 0;
	padding: 0;
	height: 100vh;
	width: 100%;
	overflow: hidden;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

.img-accueil {
	height: 200px;
	width: 200px;
	box-shadow: 5px 5px 5px rgb(208, 247, 230);
	border-radius: 500px;
	opacity: 0.8;
}
</style>
