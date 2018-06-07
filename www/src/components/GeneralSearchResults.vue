<template>
  <div class="GeneralSearchResults">
    <h1>Recipe Search - Search the Whole Catalogue!</h1>
    <div>
      <input type="text" v-model="query" placeholder="ex. burger, chicken, etc.">
      <button @click="getSearchResults">Search All Recipes</button>
      <div>
        <ol>
          <!-- @click="setActiveRecipe(this.recipe)" -->
          <li v-for="recipe in recipes" :key="recipe.spoonId" >
              <router-link :to="{name: 'RecipeDetails', params:{spoonId: recipe.spoonId}}">
                <h4>{{recipe.title}}</h4>
                <h5>Cook Time: {{recipe.readyInMinutes}} minutes</h5>
              </router-link>
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GeneralSearchResults',
    data() {
      return {
        recipe: {
          title: '',
          image: '',
          minutesReady: '',
          sourceUrl: '',
          instructions: '',
          ingredients: '',
          spoonId: ''
        },
        query: ''
      }
    },
    computed: {
      recipes() {
        return this.$store.state.recipes
      }
    },
    methods: {
          getSearchResults(){
            this.$store.dispatch('getSearchResults', this.query)
          },
          setActiveRecipe(){
            this.$store.dispatch('setActiveRecipe', this.recipe)
          }
    }
  }

</script>

<style>


</style>
