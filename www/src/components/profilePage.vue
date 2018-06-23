<template>
    <div class="container-fluid" id="background">
      <div class="row">
        <div class="col">
          <Calender></Calender>
        </div>
        <div class="col"></div>
        <favorites></favorites>
        <groceryList></groceryList>
      </div>
    </div>
  </template>

<script>
  import groceryList from './GroceryList'
  import Favorites from './Favorites'
  import Calender from './Calender'
  export default {
    name: 'ProfilePage',
    data() {
      return {

      }
    },
    components: {
      Favorites,
      groceryList,
      Calender
    },
    computed: {},
    methods: {}
  }

</script>

<style scoped>
  #background {
    background-image: url("../assets/profilePage.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 100vh;
  }


</style>
