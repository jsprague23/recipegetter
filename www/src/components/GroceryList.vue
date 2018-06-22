<template>
  <div class="groceryList">
    <div><h1>Test</h1></div>
      <ul id="example-1">
          <!-- <li v-for="item in items">
            {{ item.message }}
          </li> -->
        </ul>
        
  </div>
</template>

<script>
  export default {
    name: 'groceryList',
      data() {
      items:[]
      return {

      }
    },
    mounted() {
      this.$store.dispatch("getGroceryList")
    },
    computed: {
      GroceryList(){
        return $this.store.state.groceryList
      }
    },
    methods: {}
  }

</script>

<style>


</style>
