<template>
  <div class="GeneralSearchResults">
    <h1>Recipe Search - Search the Whole Catalogue!</h1>
    <div>
      <input type="text" v-model="query" placeholder="ex. burger, chicken, etc.">
      <button @click="getSearchResults">Search All Recipes</button>
      <div>
        <ol>
          <li v-for="recipe in recipes">
            <h4>{{recipe.title}}</h4>
            <h5>Cook Time: {{recipe.readyInMinutes}} minutes</h5>
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
          }
    }
  }

</script>

<style>


</style>
