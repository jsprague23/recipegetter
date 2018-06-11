<template>
  <div class="container-fluid" id="background">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6">
        <div class="Home">
          <h1>Food in Pantry? You could cook this!! </h1>
          <h1>Description of app here:</h1>
          <h3>- Different search features available -</h3>
          <h3>- Where the info is pulled and what is available in the search -</h3>
          <h3>- Extra stuf maybe, Idk, these will be longer when they contain info. -</h3>
          <router-link :to="{name:'SearchResults'}">
            <button>GoToSearchField</button>
          </router-link>
        </div>
      </div>      
      <div class="col-3"></div>
    </div>
  </div>
</template>

<script>
  import SearchResults from "./SearchResults.vue"

  export default {
    name: 'Home',
    data() {
      return {      
      }
    },
    components: {
      SearchResults
    },
    computed: {},
    methods: {
      goToSearchField() {
        router.push({
          name: 'SearchResults'
        })
      },
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #background {
    background-image: url("../assets/homeBackground.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    /* background-size: contain; */
    /* display: block; */
    margin-left: auto;
    margin-right: auto;
    /* object-fit:cover; */
  }

  .button {
    background-color: #4CAF50;
    /* Green */
    border: none;
    color: white;
    padding: 2px 4px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s;
    /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
  }

  .button:hover {
    background-color: #4CAF50;
    /* Green */
    color: white;
  }

  .button1 {
    background-color: white;
    color: black;
    border: 2px solid rgb(109, 179, 111);
  }

  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>