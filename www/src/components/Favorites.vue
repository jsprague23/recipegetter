<template>
  <div class="favorites">
    <h1>My favorites</h1>
    <ul>
      <li v-for="fav in favorites">{{fav.title}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'favorites',
    data() {
      return {

      }
    },
    mounted(){
      this.$store.dispatch("getFavorites")
    },
    computed: {
      favorites(){
      return this.$store.state.favorites
      }
      
    },
    methods: {}
  }

</script>

<style>


</style>
