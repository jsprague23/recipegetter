<template>
  <div class="IngredientSearchResults">
    <h1>Search by Ingredients in your Pantry!</h1>
    <div>
      <form @submit.prevent="getSearchResults">
      <input type="text" v-model="query" placeholder="ex. fennel, flour, beans.">
      <button type="submit">Search by Ingredients</button>
      </form>
      <div>
        <div class="card">
          <div v-for="recipe in recipes">
            <router-link :to="{name: 'RecipeDetails', params:{spoonId: recipe.spoonId}}">
              <img class="card-img-top" :src="recipe.image">
              <h1 class="card-title titles">{{recipe.title}}</h1>
            </router-link>
          </div>
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

<style>
  .titles {
    font-weight: bold;
    color: pink;
    font-size: 125%;
  }

</style>
