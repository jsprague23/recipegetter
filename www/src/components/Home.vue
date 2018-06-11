<template>
<div class="container">
  <div class="Home">
    <h1>Food in Pantry? You could cook this!! </h1>
    <h1>Description of app here:</h1>
    <h3>- Different search features available -</h3>
    <h3>- Where the info is pulled and what is available in the search -</h3>
    <h3>- Extra stuf maybe, Idk, these will be longer when they contain info. -</h3>
    <router-link :to="{name:'SearchResults'}">
                 <button>GoToSearchField</button></router-link>
  </div>
</div>
</template>

<script>
import SearchResults from "./SearchResults.vue"

export default {
  name: 'Home',
  data () {
    return {
      
    }
  },
  components:{
    SearchResults
  },
  computed:{},
  methods:{
  goToSearchField(){
            router.push({ name: 'SearchResults'
         })
        },
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
