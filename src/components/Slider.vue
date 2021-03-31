<template>
	<div class="Slider">
    <div class="animal">
        <div class="animal-card">
		<img src= '../assets/goat.gif' />
        <p>La chèvre</p>
        </div>

        <div class="animal-card">
		<img src= '../assets/donkey.gif' />
        <p>L'âne</p>
        </div>

        <div class="animal-card">
		<img src= '../assets/poulet.gif' />
        <p>Le poulet</p>
        </div>

        <div class="animal-card">
		<img src= '../assets/pig-47920_1280.png' />
        <p>Le cochon</p>
        </div>

        <div class="animal-card">
		<img src= '../assets/cow.gif' />
        <p>La vache</p>
        </div>
    </div>
	</div>
</template>

<script>
export default {
    data: () => {
        return {
            animals: [
                {
                    id:1, 
                    name:'Ane', 
                    url:'../assets/donkey.jpg'
                },
                {
                    id:2, name:'Vache',
                    url:'../assets/cow.jpg'
                },
                {
                    id:3, name:'Chèvre',
                    url:'../assets/goat.jpg'
                },
                {
                    id:4, 
                    name:'Poulet',
                    url:'../assets/poulet.jpg'
                },
                {
                    id:5, 
                    name:'Cochon',
                    url:'../assets/pig-47920_1280.png'
                },
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Slider {
	background-color: rgb(234, 238, 234);
	padding-bottom: 80px;
	border: 1px solid orange;
	border-radius: 5px;
	margin-left: 80px;
	margin-right: 80px;
	margin-bottom: 80px;
	
}

.animal {
    padding-top: 80px;
    justify-content: space-around;
    display:flex;
    margin: 0 10px;
}
.animal-card {
    border:1px solid orange;
    border-radius: 10px;
    padding: 20px 20px 20px 20px;
    box-shadow: 10px 3px 20px orange;
	color: rgb(35, 116, 35);
	width:70px;
	height: 120px;

    }
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
img {
	width: 50px;
	height: 50px;
}

.animal-card:hover {
	transform: scale(1.3);
	transition: 0.5s;
}
</style>
