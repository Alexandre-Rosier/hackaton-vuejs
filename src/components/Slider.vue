<template>
  <div class="accueil">
    <h1 class="title-accueil">LES ANIMAUX DE LA FERME</h1>
    <div class="container-img-accueil">
      <img
        class="img-accueil"
        alt="animaux de la ferme"
        src="../assets/ferme.jpg"
      />
    </div>
    <div class="Slider">
      <div class="animal">
        <div class="animal-card">
          <img src="../assets/goat.jpg" />
          <p>La chèvre</p>
        </div>

        <div class="animal-card">
          <img src="../assets/donkey.jpg" />
          <p>L'âne</p>
        </div>

        <div class="animal-card">
          <img src="../assets/poulet.jpg" />
          <p>Le poulet</p>
        </div>
        <div class="animal-card">
          <img src="../assets/pig-47920_1280.png" />
          <p>Le cochon</p>
        </div>
        <div class="animal-card">
          <img src="../assets/cow.jpg" />
          <p>La vache</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
};
</script>

<style scoped>
.accueil {
  height: 100vh;
  display:flex;
  flex-direction:column;
  justify-content: space-around;
}
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
  display: flex;
  margin: 0 10px;
}
.animal-card {
  border: 1px solid orange;
  border-radius: 10px;
  padding: 20px 20px 20px 20px;
  box-shadow: 10px 3px 20px orange;
  color: rgb(35, 116, 35);
  width: 70px;
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
.img-accueil {
  height: 200px;
  width: 200px;
  box-shadow: 5px 5px 5px rgb(208, 247, 230);
  border-radius: 500px;
  opacity: 0.8;
}
</style>
