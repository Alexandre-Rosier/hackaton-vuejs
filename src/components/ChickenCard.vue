<template>
	<div class="hello">
		<h1>{{ notreMessage }}</h1>
		<h3>Welcome on Chicken Card</h3>
		<section class="CardAnimal"></section>
	</div>
</template>

<script>
export default {
	name: "ChickenCard",
	props: {
		notreMessage: String,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.CardAnimal {
	width: 300px;
	height: 500px;
	border: 1px solid red;
	margin: auto;
}
</style>
