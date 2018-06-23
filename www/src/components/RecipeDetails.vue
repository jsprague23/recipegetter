<template>
  <div class=" card RecipeDetails container-fluid background">
    <div class="row">
      <div class="col-3"></div>
      <div class="card text-white bg-warning mb-3 col-6">
        <h1>{{activeRecipe.title}}</h1>
        <img class="card-img-top" :src="activeRecipe.image">
        <h1 class="titles">Instructions</h1>
        <div class="card text-white bg-success mb-3">{{activeRecipe.instructions}}</div>
        <h3 class="titles">Ingredients</h3>
        <div class="card text-white bg-success mb-3" v-for="item in activeRecipe.ingredients">
          <button class="btn" @click="addToGroceryList(item)">Add To Grocery List</button>{{item.amount}} {{item.unit}} {{item.name}}
        </div>
        <button class="btn btn-success" @click="addToFavorites">Favorite</button>
      </div>
      <div class="col-3"></div>
    </div>
  </div>




</template>


<script>
  import router from '../router'
  export default {
    name: 'RecipeDetails',
    props: ['GeneralSearchResults'],
    components: {},
    mounted() {
      // console.log(this.$route.params.spoonId)
      this.$store.dispatch('getRecipeDetails', this.$route.params.spoonId)
    },
    data() {
      return {

      }
    },
    computed: {
      activeRecipe() {
        return this.$store.state.recipe
      }
    },
    methods: {
      addToFavorites() {
        this.$store.dispatch('addToFavorites', this.activeRecipe)
      },
      addToGroceryList(item){
        this.$store.dispatch('addToGroceryList',item)
      }
    }

  }

</script>


<style scoped>
  .background {
    background-image: url("../assets/favorites.jpg");
    background-size: cover;
    /* background-repeat: repeat; */
    background-attachment: fixed;
    display: block;
    color: white;
    height: 100%
  }

  .titles {
    font-weight: bold;
    font-size: 2em;
  }

</style>
