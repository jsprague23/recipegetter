<template>
  <div class="container-fluid" id="background">
    <div class="row d-flex justify-content-center">
      <img class="logo1 animateBar1 animated rollIn" src="../../foodLogo.png" alt="">
      </div>
      <div class="row">
        <div class="Home">
          <div class="search container">
          <h3>What do you have in your pantry? Search bellow to find out what you can make!</h3>
          <router-link :to="{name:'SearchResults'}">
              <button class="button">Go To Search Field </button>
            </router-link>
        </div>
          <h1>Description of app here:</h1>
          <h3>- Different search features available -</h3>
          <h3>- Where the info is pulled and what is available in the search -</h3>
          <h3>- Extra stuf maybe, Idk, these will be longer when they contain info. -</h3>
        </div>
      </div>      
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
   @media only screen and (min-device-width:415px ){

  #background {
    background-image: url("../assets/homeBackground.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment:fixed;
    color: white;
    height: 100%
  }
}
#background {
    background-image: url("../assets/homeBackground.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment:fixed;
    color: white;
}
.logo1{
  border-radius: 50%;
  border: rgb(190, 190, 190) solid 2px;
  background: #4141419d;
  width: 22rem;
  height: 22rem;
  margin-top: 9rem
}

  .button {
    background-color: #4CAF50;
    /* Green */
    border: none;
    color: white;
    padding: 2px 4px;
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
  .col{
    padding:0
  }
  .search{
    background: #646464a4;
    margin-top:5rem;
    margin-bottom: 5rem 
  }
  .animateBar1{
    -vendor-animation-duration: 5s;
  -vendor-animation-delay: 4s;
  -vendor-animation-iteration-count: infinite;
  }
</style>
