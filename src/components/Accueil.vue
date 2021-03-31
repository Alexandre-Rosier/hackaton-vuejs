<template>

	<div class="hello">
        
		<h1>{{ test }}</h1>
		<p>
			Amuse toi avec les 
		</p>
		<h3>cliques ici pour commencer</h3>
		<ul>
			<li>
				
			</li>
			<li>
				<!-- <a
					href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
					target="_blank"
					rel="noopener"
					>eslint</a
				> -->
			</li>
		</ul>
	
	</div>
</template>

<script>
export default {
	name: "Accueil",
	props: {
		test: String,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
