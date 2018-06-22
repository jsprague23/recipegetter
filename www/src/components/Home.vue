<template>
  <div class="container-fluid" id="background">
    <div class="row d-flex justify-content-center">
      <img class="logo1 animateBar1 animated rollIn" src="../../foodLogo.png" alt="">
      </div>
      <div class="row -flex justify-content-center">
        <div class="Home">
          <div class="desc container-fluid">
          <h1>"WITH FOODYMCFOODFACE YOU'LL NEVER HAVE TO THINK OF WHAT TO MAKE AGAIN"</h1>
        </div>
          <div class="search container">
          <h3 class="pant">What's in your Pantry?</h3>
          <router-link :to="{name:'SearchResults'}">
              <button class="btn-lg">Go To Search Field </button>
            </router-link>
        </div>
         <div class="desclist container-fluid">
           <h1><b>What do we offer?</b></h1>
           <ul>
             <li>A large list of foods</li>
             <li>Serch for any resipe that you have the ingredients for</li>
             <li>You can also save resipes that you love</li>
             <li>Make a grocery list so you can remember what you need to make the food you love</li>
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
  font-family: 'Jura', sans-serif;
    text-align: center
  }
   @media only screen and (min-device-width:415px ){

  #background {
    background-image: url("../assets/homeBackground.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment:fixed;
    color: white;
  }
 
.desclist{
  background: #ffffff83;
    margin-top:5rem;
    margin-bottom: 5rem; 
    font-size: 2rem;
    border: #e5e8d8 solid .5rem;
    color: rgb(0, 0, 0);
    font-weight: 650;
}
}
#background {
    background-image: url("../assets/homeBackground.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment:fixed;
    color: white;
    width: 100%;
   
}
.desclist{
  background: #ffffff83;
    margin-top:5rem;
    margin-bottom: 5rem; 
    font-size: 1.5rem;
    border: #e5e8d8 solid .5rem;
    color: rgb(0, 0, 0);
    font-weight: 600;
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
    font-family: 'Jura', sans-serif;
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

  .button{
    background-color: #4CAF50;
    /* Green */
    color: white;
  }

  li {
    display: inline-block;
    margin: 0 15px;
  }

  a {
    color: #42b983;
  }
  .pant{
    font-size: 3rem;
    margin-top: 1rem;
  }
  .desc{
    background: #ffffff62;
    margin-top:5rem;
    margin-bottom: 5rem; 
    border: #e5e8d8 solid .5rem;
    color: black;
    font-size: 2rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
    font-weight: 700;
  }
  .search{
    background: #22222262;
    margin-top:5rem;
    margin-bottom: 5rem;
    border: #585858 solid .5rem;
  }
  .animateBar1{
  animation-duration: 1s;
  animation-iteration-count: unset;
  animation-delay: .4s
  }
</style>
