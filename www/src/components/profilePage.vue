<template>
    <div class="container-fluid" id="background">
      <div class="row">
        <div class="col-3">
        </div>
        <div class="col-6">
  
          <favorites></favorites>
        </div>
        <div class="col-3"></div>
        <groceryList></groceryList>
      </div>
    </div>
  </template>

<script>
  import groceryList from './GroceryList'
  import Favorites from './Favorites'
  export default {
    name: 'ProfilePage',
    data() {
      return {

      }
    },
    components: {
      Favorites,
      groceryList
    },
    computed: {},
    methods: {}
  }

</script>

<style>
  #background {
    background-image: url("../assets/profilePage.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    /* background-size: contain; */
    /* display: block; */
    margin-left: auto;
    margin-right: auto;
    /* object-fit:cover; */
    height: 100%
  }


</style>
