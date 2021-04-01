<template>
	<div
		id="scene-container"
		ref="sceneContainer"
		v-on:click="detectClickMouse"
	></div>
</template>

<script>
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Stats from "stats.js";

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

export default {
	name: "HelloWorld",
	data() {
		return {
			container: null,
			scene: null,
			camera: null,
			controls: null,
			renderer: null,
			stats: null,
			name: "Objet 3D",
		};
	},
	methods: {
		init() {
			// set container
			this.container = this.$refs.sceneContainer;

			// add stats
			this.stats = new Stats();
			this.container.appendChild(this.stats.dom);

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
		},
		render() {
			raycaster.setFromCamera(mouse, this.camera);
			const intersects = raycaster.intersectObjects(this.scene.children, true);
			// console.log(intersects);
			for (let i = 0; i < intersects.length; i++) {
				intersects[i].object.material.color.set(0xff0000);
			}
			this.renderer.render(this.scene, this.camera);
			this.stats.update();
		},
	},
	mounted() {
		this.init();
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
#scene-container {
	height: 100%;
}
</style>
