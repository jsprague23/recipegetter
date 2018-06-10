<template>
  <div class="searchresults">
    <IngredientSearchResults></IngredientSearchResults>
  </div>
</template>

<script>
import IngredientSearchResults from "./IngredientSearchResults"
import GeneralSearchResults from "./GeneralSearchResults"
  export default {
    name: 'SearchResults',
    data() {
      return {

      }
    },
    components: {
        IngredientSearchResults,
         GeneralSearchResults
    },
    
    computed: {},
    methods: {}
  }

</script>

<style>


</style>
