<template>
  <div class="RecipeDetails container-fluid">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <h1>{{activeRecipe.title}}</h1>
        <img :src="activeRecipe.image">
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row">
        <div class="col-3"></div>
    <div class="col-6 text-center">
        <h3 class="titles">Instructions</h3>
      {{activeRecipe.instructions}}
      <h3 class="titles">Ingredients</h3>
      <div v-for="item in activeRecipe.ingredients">
          
        {{item.amount}} {{item.unit}} {{item.name}}
      </div>
      <button @click="addToFavorites">Favorite</button>
      <div class="col-3"></div>
    </div>
    </div>
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
    }

  }

</script>


<style scoped>

.titles {
    font-weight: bold;
}

</style>
