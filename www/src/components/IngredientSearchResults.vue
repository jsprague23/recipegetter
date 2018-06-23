<template>
  <div class="IngredientSearchResults background row">
    <div class="col">
      <h1 class="title">Search by Ingredients in your Pantry!</h1>
      <div>
        <form @submit.prevent="getSearchResults">
          <input type="text" v-model="query" placeholder="ex. fennel, flour, beans.">
          <button type="submit">Search by Ingredients</button>
        </form>
        <div>
          <div class="card-columns">
            <div v-for="recipe in recipes">
              <div class="card">
                <img class="card-img-top" :src="recipe.image">
                <router-link :to="{name: 'RecipeDetails', params:{spoonId: recipe.spoonId}}">
                  <h1 class="card-title titles">{{recipe.title}}</h1>
                </router-link>
              </div>
            </div>
          </div>
                  <ul class="footer">
                    <h3>Connect with us on:</h3>
                    <li>FaceBook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                  </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'IngredientSearchResults',
    data() {
      return {
        recipe: {
          title: '',
          image: '',
          spoonId: ''
        },
        query: ""

      }
    },
    computed: {
      //may want to change if multipe results are desired
      recipes() {
        return this.$store.state.ingRecipes
      },

    },
    methods: {
      addToFavorites(recipe) {
        this.$store.dispatch('addToFavorites', recipe)
      },
      getSearchResults() {
        this.$store.dispatch("getSearchIngredients", this.query)
      }
    }
  }

</script>

<style scoped>
  .background {
    font-family: 'Jura', sans-serif;
    background-image: url("../assets/favorites.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 100%;
  }

  .card-columns{
    margin-bottom: 48.5%;
  }
  li {
    display: inline-block;
    margin: 0 15px;
  }

  .title {
    font-size: 1.4rem;
    margin-top: 3rem;
    color: #dbdbdb;
    background: #3d3d3d69;
    height: 3.8rem;
  }

  .titles {
    font-weight: bold;
    color: rgb(94, 94, 94);
    font-size: 125%;
  }

  .card {
    border: rgb(145, 184, 102) solid .5rem;
    background-color: #e5e8d8;
  }

  .card-title {
    text-align: center;
    margin-top: .5rem;
  }

  .footer {
    padding-top: 1rem;
    padding-bottom: 1rem;
    background: #e5e8d8;
    color: black;
    font-weight: 600;
  }
</style>