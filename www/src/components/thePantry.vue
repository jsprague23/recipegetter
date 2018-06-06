<template>
  <div class="home-page">
    <h1>The Pantry</h1>
    <ul class="col-sm-6">
      <li v-for="foodItem in list">
        <img height="80" :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path" alt="">
        <p>{{movie.title}}</p>

        <button @click="handleButtonClick(movie)">{{buttonText}}</button>
      </li>
    </ul> -->
        
    <a v-bind:href="url">https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/food/jokes/random</a>
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    mounted() {
      if (!this.$store.state.user._id) {
        router.push({ name: 'login' })
      }
      this.$store.dispatch('getBoards', this.$store.state.user._id)
    },
      computed: {
      boards(){
        return this.$store.state.boards
      }
    },
    methods: {}
  }
</script>