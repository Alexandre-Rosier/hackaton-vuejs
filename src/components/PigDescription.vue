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

button .h1Name {
    font-size: 11vh;
    text-decoration: green underline;
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
    flex-direction: row;
    justify-content: center; 
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