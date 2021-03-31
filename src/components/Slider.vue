<template>
<div class='slider'>  
    <button @click='prev' type='button' class='btn btnLeft'>
        <img src='../assets/left-arrow.png' alt='left' class='iconButton'>
    </button>
    <div class="containerSlider" :style='{transform: `translateX(${index}px)`, transition: `${transition}`}'>
        <img src='../assets/vache.jpeg' alt='cow' class='image'>
        <img src='../assets/poule.jpeg' alt='chicken' class='image'>
        <img src='../assets/ane.jpeg' alt='donkey' class='image'>
        <img src='../assets/cochon.jpeg' alt='pig' class='image'>
    </div>
    <button @click='next' type='button' class='btn btnRight'>
        <img src='../assets/right-arrow.png' alt='right' class='iconButton'>
    </button>
</div>
</template> 

<script>
export default {
    name: 'Slider',
    data: function(){
        return {
            index: 0,
            transition: 'transform 0.9 ease'
    }}
    ,
    methods: {
        next(){
            if(this.index === -1500) {
            this.index = 0;
            } else {
                this.index -=500
                }
            },
        prev(){
           if(this.index === -1500) {
               this.index = 0
               } else {
                   this.index -=500}
           }
           }}
</script>

<style scoped>
    .slider {
        width : 500px;
        height : 300px;
        margin : 100px 10px 0;
        overflow : hidden; 
        position : relative;
        /* display: flex;
        justify-content: center; */
    }
    .containerSlider {
        display: flex;
    }    
    .image {
        width: 500px;
        height: auto;
        /* transform: translateX(-50%) */
        }
    .iconButton {
        width: 20px;
    }
    .btn {
        outline : none;
        border : 3px solid black;
        border-radius: 50%;
        background-color: white;
        height: 50px;
        width: 50px;
        display: block;
        position: absolute;
        z-index: 100;
        cursor: pointer;  
        justify-content: center;
        align-items: center;
    }
    .btnLeft {
        top: 50%;
        left: 5px;
        /* transform: translateY(-50%); */
        }
    .btnRight {
        top: 50%;
        right: 5px;
        /* transform: translateY(-50%); */
        }
    
</style>