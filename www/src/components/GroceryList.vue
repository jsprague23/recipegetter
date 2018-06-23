<template>
  <div class="groceryList">
    <div>
      <h1>Test</h1>
    </div>
    <ul>
      <li v-for="item in activeRecipe.ingredients">
          {{item.amount}} {{item.unit}} {{item.name}}
          
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
