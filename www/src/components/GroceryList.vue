<template>
  <div class="groceryList mt-5 pt-5">
    <div>
      <h1>Test</h1>
      <form @submit.prevent="addGroceryList">
        <input type="text" v-model="newTitle">
      <button type="submit">Create New</button>
      </form>
      <button @click="getGroceryList">Get</button>
    </div>   
    <div v-for="list in GroceryList">
      {{list.title}}
    </div> 

  </div>
</template>

<script>
  export default {
    name: 'GroceryList',
    data() {      
      return {
        newTitle: ""
      }
    },
    mounted() {
      this.$store.dispatch("getGroceryList")
    },
    computed: {
      GroceryList() {
        return this.$store.state.groceryList
      }
    },
    methods: {
      addGroceryList(){
        this.$store.dispatch("addGroceryList", this.newTitle)
      },
      getGroceryList(){
        this.$store.dispatch("getGroceryList")
      }
    }
  }

</script>

<style>


</style>
