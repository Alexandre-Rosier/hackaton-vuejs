<template>
<div class="cardDetail">
    <div class="title">
    <img class="imgCard" src= '../assets/goat.gif' />
    <button @click.prevent="playSound('https://www.fesliyanstudios.com/play-mp3/6557')" >
    <div class="pronom">la</div>
    <div class="h1Name">CHÈVRE</div>
    </button>
    
    </div>
    <p class='text'>La chèvre est un animal, <span>mammifère</span> et <span>herbivore</span>. <br> Elle vit parfois dans les maisons (sur les terrains) mais plus souvent à la <span>ferme</span>, où elle donne du <span>lait</span>, comme la <span>vache</span>, avec lequel on fait du <span>fromage</span> </p>
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
