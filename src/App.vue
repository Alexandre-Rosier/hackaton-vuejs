<template>
	<img alt="Vue logo" src="./assets/ferme.gif" />
	<!-- <HelloWorld not="Hello Friends" /> -->
	<Accueil test="Salut toi"/>
	
	
</template>

<script>
import Accueil from './components/Accueil.vue';
// import HelloWorld from "./components/HelloWorld.vue";


export default {
	name: "App",
	components: {
		// HelloWorld,
		Accueil,
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
</style>
