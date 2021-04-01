<template>
  <div id="app">
    <Slider />
    <CowDescription />
    <ChickenDescription />
    <DonkeyDescription />
    <PigDescription />
    <GoatDescription />
    <HelloWorld />
    <Cow/>
    <Sheep/>
    <Donkey/>
  </div>
</template>

<script>
import Slider from "./components/Slider.vue";
import HelloWorld from "./components/HelloWorld.vue";

import Cow from "./components/Cow.vue";
import Sheep from "./components/Sheep.vue";
import Donkey from './components/Donkey.vue'

import CowDescription from "./components/CowDescription.vue";
import ChickenDescription from "./components/ChickenDescription.vue";
import DonkeyDescription from "./components/DonkeyDescription.vue";
import PigDescription from "./components/PigDescription.vue";
import GoatDescription from "./components/GoatDescription.vue";

export default {
  name: "App",
  components: {
    Slider,
    HelloWorld,
    Cow,
    Sheep,
    Donkey,
    CowDescription,
    ChickenDescription,
    DonkeyDescription,
    PigDescription,
    GoatDescription

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
}

</style>
