<template>
<div class="cardDetail">
    <div class="title">
    <img class="imgCard" src= '../assets/pig.gif' />
    <button @click.prevent="playSound('https://www.fesliyanstudios.com/play-mp3/6609')" >
    <div class="pronom">le</div>
    <div class="h1Name">COCHON</div>
    </button>
    
    </div>
    <p class='text'>Le cochon ou <span>porc</span> est la forme domestique du <span>sanglier</span> Le cochon <span>grogne</span>.<br> La femelle s'appelle la <span>truie</span> ; le mâle, le <span>verrat</span> et les petits, les <span>cochonnets</span>. </p>
</div>  
</template>

<script>
export default {
    name : 'CowDescription',
    data(){
        return {
            revele : false
        }
    },
    components: {

    },
    methods: {
        playSound (sound) {
      if(sound) {
        const audio = new Audio(sound);
        audio.play();
    }}}}

</script>

<style>

</style>