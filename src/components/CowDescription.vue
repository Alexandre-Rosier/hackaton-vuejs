<template>
<div class="cardDetail">
    <div class="title">
    <img class="imgCard" src= '../assets/cow.gif' />
    <button @click.prevent="playSound('https://www.fesliyanstudios.com/play-mp3/6520')" >
    <div class="pronom">la</div>
    <div class="h1Name">VACHE</div>
    </button>
    
    </div>
    <p class='text'>La vache est un animal <span>ruminant</span>. <br> C'est un <span>mammifère</span> qui appartient à la famille des <span>bovidés</span>. <br>Le mâle de la vache est le <span>taureau</span>. <br> Son petit est le <span>veau</span>. </p>
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

