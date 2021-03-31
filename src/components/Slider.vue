<template>
	<div class="Slider">
    <div class="animal">
        <div class="animal-card">
		<img src= '../assets/goat.jpg' />
        <p>Chèvre</p>
        </div>

        <div class="animal-card">
		<img src= '../assets/donkey.jpg' />
        <p>Ane</p>
        </div>

        <div class="animal-card">
		<img src= '../assets/poulet.jpg' />
        <p>Poulet</p>
        </div>

        <div class="animal-card">
		<img src= '../assets/pig.jpg' />
        <p>Cochon</p>
        </div>

        <div class="animal-card">
		<img src= '../assets/cow.jpg' />
        <p>Vache</p>
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
                    url:'../assets/pig.jpg'
                },
            ]
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    margin-right: 30px;
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
</style>
