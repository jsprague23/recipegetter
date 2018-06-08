<template>
  <div class="IngredientSearchResults">
    <h1>Search by Ingredients in your Pantry!</h1>
    <div>
      <input type="text" v-model="query" placeholder="ex. burger, chicken, etc.">
      <button @click="getSearchResults">Search All Recipes</button>
      <div>
        <ol>
          <li v-for="recipe in recipes">
              <router-link :to="{name: 'RecipeDetails', params:{spoonId: recipe.spoonId}}">
            <img :src="recipe.image">
            <h4>{{recipe.title}}</h4> 
            </router-link>
            </li>
        </ol>
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
      addToFavorites(recipe){
        this.$store.dispatch('addToFavorites', recipe)
      },
      getSearchResults(){
        this.$store.dispatch("getSearchIngredients",this.query)
      }
    }
  }

</script>

<style>
</style>