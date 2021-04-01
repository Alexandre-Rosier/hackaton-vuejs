<template>
  <div id="app">
    <Slider />
    <HelloWorld />
    <Cow/>
      </div>
</template>

<script>
import Slider from "./components/Slider.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Cow from "./components/Cow.vue";
export default {
  name: "App",
  components: {
    Slider,
    HelloWorld,
    Cow
  },
};
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50;
	margin-top: 60px;
	background-color: rgb(238, 211, 123);
	border: 2px solid rgb(194, 235, 245);
	border-radius: 2px; */
}

</style>
