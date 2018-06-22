<template>
  <div class="container-fluid" id="background">
    <div class="row d-flex justify-content-center">
      <img class="logo1 animateBar1 animated rollIn" src="../../foodLogo.png" alt="">
      </div>
      <div class="row -flex justify-content-center">
        <div class="Home">
          <div class="desc container">
          <h1>With FoodyMcFoodFace you'll never have to think of what to make again!</h1>
        </div>
          <div class="search container">
          <h3 class="pant">What's in your Pantry?</h3>
          <router-link :to="{name:'SearchResults'}">
              <button class="btn-lg">Go To Search Field </button>
            </router-link>
        </div>
         <div class="desc">
           <h3>What do we offer?</h3>
           <ul>
             <li>A larg list of foods</li>
             <li>Serch for any resipe that you have the ingredients for</li>
             <li></li>
           </ul>
         </div>
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
  .row{
    text-align: center
  }
   @media only screen and (min-device-width:415px ){

  #background {
    background-image: url("../assets/homeBackground.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment:fixed;
    color: white;
    height: 200vh
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

  .btn-lg {
    height: 6rem;
    width: 12rem;
    background-color: #4CAF50;
    border-radius: 3rem;
    border:rgba(255, 255, 255, 0.274) .5rem solid;
    color: white;
    margin-bottom: 3rem;
    margin-top: .5rem;
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
  .pant{
    font-size: 3rem
  }
  .col{
    padding:0
  }
  .desc{
    background: #22222262;
    margin-top:5rem;
    margin-bottom: 5rem 
  }
  .search{
    background: #22222262;
    margin-top:5rem;
    margin-bottom: 5rem 
  }
  .animateBar1{
    -vendor-animation-duration: 5s;
  -vendor-animation-delay: 4s;
  -vendor-animation-iteration-count: infinite;
  }
</style>
