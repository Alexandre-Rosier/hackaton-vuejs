<template>
	<div id="app">
		<Slider />
		<Cow />
		<Chicken />
		<Sheep />
		<Donkey />
		<Rabbit />
	</div>
</template>

<script>
import Slider from "./components/Slider.vue";
import Chicken from "./components/Chicken.vue";
import Cow from "./components/Cow.vue";
import Sheep from "./components/Sheep.vue";
import Donkey from "./components/Donkey.vue";
import Rabbit from "./components/Rabbit.vue";

export default {
	name: "App",
	components: {
		Slider,
		Chicken,
		Cow,
		Sheep,
		Donkey,
		Rabbit,
	},
};
</script>

<style>
body {
	overflow: hidden;
}
html,
body,
#app {
	margin: 0;
	padding: 0;
	height: 100%;
	width: 100%;
	background: #87ceeb85;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
}

.cardDetail {
	border-radius: 10px;
	box-shadow: 10px 3px 20px orange;
	color: rgb(35, 116, 35);
	margin: 20px;
	padding: 2rem;
	/* visibility: hidden;
	opacity: 0;
	transition: visibility 0s, opacity 0.5s linear; */
	display: none;
	z-index: 200;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(255, 255, 255, 0.774);
	width: 300px;
}

section.CardFlex {
	display: flex;
	flex-direction: column;
}

.imgCard {
	display: flex;
	height: 150px;
	width: 150px;
}

button .h1Name {
	font-size: 3rem;
	text-decoration: green;
}

button .pronom {
	font-family: "Times New Roman", Times, serif;
	font-size: 1.9vh;
	font-style: italic;
	color: grey;
}
.text {
	font-size: 1.3rem;
}

span {
	font-weight: bolder;
	font-size: 1.3rem;
	color: rgb(18, 214, 18);
}

button {
	border: none;
	background: none;
	color: inherit;
	padding: 0;
}

button :hover {
	background-color: green;
	color: white;
}
audio {
	border: none;
	background: none;
	color: inherit;
	padding: 0;
}
.btnhome {
	z-index: 100;
	position: absolute;
	left: 50%;
	display: flex;
	flex-direction: column;
	padding: 2px 10px 8px 10px;
	border-radius: 0px 0px 20px 20px;
	transform: translateX(-50%);
	background-color: rgba(255, 255, 255, 0.774);
	text-decoration: none;
	letter-spacing: 1.3px;
	font-weight: 600;
}
</style>
