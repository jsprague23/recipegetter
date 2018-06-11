<template>
  <div class="container-fluid" id="background">
    <div class="row">
      <div class="col-3">
      </div>
      <div class="col-6">

        <IngredientSearchResults></IngredientSearchResults>
      </div>
      <div class="col-3"></div>
    </div>
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

  #background {
    background-image: url("../assets/searchPage.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    /* background-size: contain; */
    /* display: block; */
    margin-left: auto;
    margin-right: auto;
    /* object-fit:cover; */
  }


</style>
