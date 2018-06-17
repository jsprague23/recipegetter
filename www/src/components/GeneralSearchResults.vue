<template>
  <div class="GeneralSearchResults" id="background">
    <h1>Recipe Search - Search the Whole Catalogue!</h1>
    <!-- <div>
      <input type="text" v-model="query" placeholder="ex. burger, chicken, etc.">
      <button @click="getSearchResults">Search All Recipes</button>
      <div> -->
        <div class="card-columns">

          <!-- @click="setActiveRecipe(this.recipe)" -->
          <div class="card" v-for="recipe in recipes" :key="recipe.spoonId" >
            <router-link :to="{name: 'RecipeDetails', params:{spoonId: recipe.spoonId}}">
              <img :src="'https://spoonacular.com/recipeImages/' + recipe.image">
              <div class="card-body"> <h4 class="card-title">{{recipe.title}}</h4>
                <h5 class="card-text">Cook Time: {{recipe.readyInMinutes}} minutes</h5></div>
              </router-link>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GeneralSearchResults',
    data() {
      return {
        recipe: {
          title: '',
          image: '',
          readyInMinutes: '',
          spoonId: '',
        },
        query: ''
      }
    },
    computed: {
      recipes() {
        return this.$store.state.recipes
      },
      activeRecipe() {
                return this.$store.state.recipe
            }
    },
    methods: {
      addToFavorites(recipe) {
        console.log(recipe)
        this.$store.dispatch('getRecipeDetails', recipe.spoonId)
        this.$store.dispatch('addToFavorites', this.activeRecipe)
      },
      getSearchResults() {
        this.$store.dispatch('getSearchResults', this.query)
      },
      setActiveRecipe() {
        this.$store.dispatch('setActiveRecipe', this.recipe)
      },
      setRecipeDetails(){
        this.$store.dispatch('setRecipeDetails', this.recipe)
      }
    }
  }

</script>

<style>
img{
  width: 400px;
  
}

@media only screen and (min-device-width:415px) {

#background {
  background-image: url("../assets/searchPage.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: white;
  height: 100%
}
}

#fancy {
  position: relative;
  background-color: #FFC;
  padding: 2rem;
  text-align: center;
  max-width: 400px;
}

#fancy::before {
  content: "";

  position : absolute;
  z-index  : -1;
  bottom   : 15px;
  right    : 5px;
  width    : 50%;
  top      : 80%;
  max-width: 200px;

  box-shadow: 0px 13px 10px black;
  transform: rotate(4deg);
}

</style>
