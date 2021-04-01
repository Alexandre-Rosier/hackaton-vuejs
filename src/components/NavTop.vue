<template>
	<nav>
		<a href="#top" class="hide">Go to the top</a>
	</nav>
</template>

<script>
export default {
	name: "NavTop",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-direction: column;
	z-index: 222;
	position: fixed;
}
.hide {
	display: none;
}
.show {
	display: flex;
}
</style>
