<template>
  <div class="GeneralSearchResults">
    <h1>Recipe Search - Search the Whole Catalogue!</h1>
    <div>
      <input type="text" v-model="query" placeholder="ex. burger, chicken, etc.">
      <button @click="getSearchResults">Search All Recipes</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GeneralSearchResults',
    data() {
      return {
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
