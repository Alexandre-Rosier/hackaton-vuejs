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

<style>
.cardDetail {
    border:1px solid orange;
    border-radius: 10px;
    box-shadow: 10px 3px 20px orange;
	color: rgb(35, 116, 35);
	height: auto;
    margin : 20px;
    padding: 20px 20px 20px 20px;
	width:40vw;
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

.h1Name {
    font-size: 15vh;
    text-decoration: green underline;
}

.pronom {
    font-family:'Times New Roman', Times, serif; 
    font-size: 15vh;
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
</style>