<template>
  <div id="app">
    <Slider />
    <CowDescription />
    <ChickenDescription />
    <DonkeyDescription />
    <PigDescription />
    <GoatDescription />
    <Chicken />
    <Cow />
    <Sheep />
    <Donkey />
  </div>
</template>

<script>
import Slider from "./components/Slider.vue";
import Chicken from "./components/Chicken.vue";

import Cow from "./components/Cow.vue";
import Sheep from "./components/Sheep.vue";
import Donkey from "./components/Donkey.vue";

import CowDescription from "./components/CowDescription.vue";
import ChickenDescription from "./components/ChickenDescription.vue";
import DonkeyDescription from "./components/DonkeyDescription.vue";
import PigDescription from "./components/PigDescription.vue";
import GoatDescription from "./components/GoatDescription.vue";

export default {
  name: "App",
  components: {
    Slider,
    Chicken,
    Cow,
    Sheep,
    Donkey,
    CowDescription,
    ChickenDescription,
    DonkeyDescription,
    PigDescription,
    GoatDescription,
  },
};
</script>

<style>
body{
  overflow: hidden;
}
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
.cardDetail {
    border:1px solid orange;
    border-radius: 10px;
    box-shadow: 10px 3px 20px orange;
	color: rgb(35, 116, 35);
	height: 50vh;
    margin : 20px;
    padding: 20px 20px 20px 20px;
	width:60vw;
  display: none;
  z-index: 200;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
    }
.imgCard {
    display: flex;
    height: 150px;
    width: 150px;
}
.title {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

button .h1Name {
    font-size: 11vh;
    text-decoration: green ;
}

button .pronom {
    font-family:'Times New Roman', Times, serif; 
    font-size: 9vh;
    font-style: italic;
    color : grey
}
.text {
    font-size: 5vh;
}

span {
    font-weight: bolder;
    font-size: 6vh;
    color: rgb(18, 214, 18);
}

button {
    border : none;
    background: none;
    color: inherit;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
}

button :hover {
    background-color: green;
    color: white;
}
audio {
    border : none;
    background: none;
    color: inherit;
    padding: 0;
}
.btnhome {
  z-index: 100;
  border: 1px solid red;
  background-color: green;
  position: absolute;
  top: 0;
  left: 50%;
}
</style>
