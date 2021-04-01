<template>
<div class="cardDetail">
    <div class="title">
    <img class="imgCard" src= '../assets/cow.gif' />
    <button @click.prevent="playSound('https://www.fesliyanstudios.com/play-mp3/6520')" >
    <div class="pronom">la</div>
    <div class="h1Name">VACHE</div>
    </button>
    
    </div>
    <p class='text'>La vache est un animal <span @click.prevent="playSound('https://www.fesliyanstudios.com/play-mp3/6520')">ruminant</span>. <br> C'est un <span>mammifère</span> qui appartient à la famille des <span>bovidés</span>. <br>Le mâle de la vache est le <span>taureau</span>. <br> Son petit est le <span>veau</span>. </p>
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