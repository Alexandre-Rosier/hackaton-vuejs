<template>
<div class="cardDetail">
    <div class="title">
    <img class="imgCard" src= '../assets/donkey.gif' />
    <button @click.prevent="playSound('https://bigsoundbank.com/UPLOAD/mp3/1551.mp3')" >
    <div class="pronom">l'</div>
    <div class="h1Name">ANE</div>
    </button>
    
    </div>
    <p class='text'>L'âne est un <span>mammifère</span> appartenant à la famille des <span>équidés</span>, comme son proche cousin, le <span>cheval</span>. <br>La femelle est <span>l'Anesse</span> et les bébés sont les <span>ânons</span>.<span>veau</span>. </p>
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

