<template>
  <div class="groceryList">
    <div>
      <h1>Test</h1>
    </div>
    <ul id="example-1">
      <li v-for="grocery in groceryList">
          <router-link :to="{name: 'RecipeDetails', params:{spoonId: fav.spoonId}}">{{grocery.title}}</router-link>
          </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'groceryList',
    data() {      
      return {

      }
    },
    mounted() {
      this.$store.dispatch("getGroceryList")
    },
    computed: {
      GroceryList() {
        return $this.store.state.groceryList
      }
    },
    methods: {}
  }

</script>

<style>


</style>
