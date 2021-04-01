<template>
<div class="cardDetail">
    <div class="title">
    <img class="imgCard" src= '../assets/poulet.gif' />
    <button @click.prevent="playSound('https://www.fesliyanstudios.com/play-mp3/6512')">
    <div class="pronom">la</div>
    <div class="h1Name">POULE</div>
    </button>
    </div>
    <p class='text'>La poule est la femelle de l'espèce domestique des <span>gallinacés</span>.<br> Le mâle est le <span>coq</span>. Originaire d'Asie, il existe aujourd'hui de très nombreuses races de poules partout dans le monde.</p>
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

