<template>
	<div class="accueil">
		<h1 class="title-accueil">Les animaux de la ferme</h1>

		<div class="container-img-accueil">
			<!-- <img
				class="img-accueil"
				alt="animaux de la ferme"
				src="../assets/ferme.jpg"
			/> -->
		</div>
		<div class="Slider">
			<h2>Choisis un animal de la ferme</h2>
			<div class="animal">
				<a href="#scene-containerSheep">
					<div class="animal-card">
						<img src="../assets/mouton.jpg" />
						<p>Le mouton</p>
					</div>
				</a>
				<a href="#scene-containerDonkey">
					<div class="animal-card">
						<img src="../assets/donkey.jpg" />
						<p>L'âne</p>
					</div>
				</a>
				<a href="#scene-containerChicken">
					<div class="animal-card">
						<img src="../assets/poulet.jpg" />
						<p>Le poulet</p>
					</div>
				</a>
				<a href="#scene-containerRabbit">
					<div class="animal-card">
						<img src="../assets/rabbit.jpg" />
						<p>Lapin</p>
					</div>
				</a>
				<a href="#scene-containerCow">
					<div class="animal-card">
						<img src="../assets/cow.jpg" />
						<p>La vache</p>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Slider",
};
</script>

<style scoped>
.accueil {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.title-accueil {
	font-family: "Dancing Script", cursive;
	font-size: 6rem;
}

@keyframes fadeIn {
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}

.Slider {
	background-color: rgba(234, 238, 234, 0.609);
	padding: 80px;
	border-radius: 15px;
	margin-left: 80px;
	margin-right: 80px;
	margin-bottom: 80px;
	animation: fadeIn 5s ease;
}

.Slider a {
	text-decoration: none;
}

.animal {
	justify-content: space-around;
	display: flex;
	margin: 0 10px;
	margin: auto;
	max-width: 920px;
}
.animal-card {
	border: 1px solid orange;
	border-radius: 10px;
	padding: 20px 20px 20px 20px;
	box-shadow: 10px 3px 20px rgba(255, 166, 0, 0.486);
	color: rgb(35, 116, 35);
	width: 120px;
	height: 180px;
	background: white;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	display: flex;
}
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
img {
	width: 90px;
	height: 90px;
}

.animal-card:hover {
	transform: scale(1.3);
	transition: 0.5s;
}
.img-accueil {
	height: 200px;
	width: 200px;
	box-shadow: 5px 5px 5px rgb(208, 247, 230);
	border-radius: 500px;
	opacity: 0.8;
}
</style>
