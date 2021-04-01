<template>
	<div
		id="scene-containerChicken"
		ref="sceneContainerChicken"
		v-on:click="detectClickMouse"
	>
		<a href="#" class="btnhome">Retour</a>

		<div class="cardDetail" id="detailsChicken">
			<section class="CardFlex">
				<div class="title">
					<img class="imgCard" src="../assets/poulet.gif" />
					<button
						@click.prevent="
							playSound('https://www.fesliyanstudios.com/play-mp3/6512')
						"
					>
						Ecouter cette magnifique Poule.
						<div class="pronom">la</div>
						<div class="h1Name">POULE</div>
					</button>
				</div>
				<p class="text">
					La poule est la femelle de l'espèce domestique des
					<span>gallinacés</span>.<br />
					Le mâle est le <span>coq</span>. Originaire d'Asie, il existe
					aujourd'hui de très nombreuses races de poules partout dans le monde.
				</p>
			</section>
			<div class="buttonSpeaker">  <button id="speakChicken">🔉</button>   </div>
		</div>
	</div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

export default {
	name: "Chicken",
	data() {
		return {
			container: null,
			scene: null,
			camera: null,
			controls: null,
			renderer: null,
		};
	},
	methods: {
		init() {
			// set container
			this.container = this.$refs.sceneContainerChicken;

			// add camera
			const fov = 6; // Field of view
			const aspect = this.container.clientWidth / this.container.clientHeight;
			const near = 0.1; // the near clipping plane
			const far = 30; // the far clipping plane
			const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
			camera.position.set(0, 5, 10);
			this.camera = camera;

			// create scene
			this.scene = new THREE.Scene();
			this.scene.background = new THREE.Color("skyblue");

			// add lights
			const ambientLight = new THREE.HemisphereLight(
				0xffffff, // bright sky color
				0x222222, // dim ground color
				1 // intensity
			);
			const mainLight = new THREE.DirectionalLight(0xffffff, 4.0);
			mainLight.position.set(10, 10, 10);
			this.scene.add(ambientLight, mainLight);

			// add controls
			this.controls = new OrbitControls(this.camera, this.container);

			// create renderer
			this.renderer = new THREE.WebGLRenderer({ antialias: true });
			this.renderer.setSize(
				this.container.clientWidth,
				this.container.clientHeight
			);
			this.renderer.setPixelRatio(window.devicePixelRatio);
			this.renderer.gammaFactor = 2.2;
			this.renderer.outputEncoding = THREE.sRGBEncoding;
			this.renderer.physicallyCorrectLights = true;
			this.container.appendChild(this.renderer.domElement);

			// set aspect ratio to match the new browser window aspect ratio
			this.camera.aspect =
				this.container.clientWidth / this.container.clientHeight;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize(
				this.container.clientWidth,
				this.container.clientHeight
			);

			// this.camera.add(listener);

			const loader = new GLTFLoader();

			loader.load(
				"/three-assets/Chicken.glb",
				(gltf) => {
					this.scene.add(gltf.scene);
				},
				undefined,
				undefined
			);
			this.renderer.setAnimationLoop(() => {
				this.render();
			});
		},

		detectClickMouse: function(event) {
			mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
			mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
			const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/6520");
			audio.play();
			const explain = document.querySelector("#detailsChicken");
			explain.style.display = "block";
		},
		render() {
			raycaster.setFromCamera(mouse, this.camera);
			const intersects = raycaster.intersectObjects(this.scene.children, true);

			for (let i = 0; i < intersects.length; i++) {
				intersects[i].object.material.color.set(0xff0000);
			}
			this.renderer.render(this.scene, this.camera);
		},
	},
	mounted() {
		this.init();
		const speakEl = document.getElementById('speakChicken');

		speakEl.addEventListener('click', speakText);

		function speakText() {

const utterance = new SpeechSynthesisUtterance('La poule est la femelle de l\'espèce domestique des gallinacés. Le mâle est le coq. Originaire d\'Asie, il existe aujourd\'hui de très nombreuses races de poules partout dans le monde.');
window.speechSynthesis.speak(utterance);
	}
}}
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
#scene-containerChicken {
	height: 100%;
	position: relative;
}
</style>
