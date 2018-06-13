<template>
  <div class="NavBar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <img class="logo" src="../../foodLogo.png" alt="">
      <a class="navbar-brand" href="#">FoodyMcFoodFace</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}"> Home
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'ProfilePage'}">Profile</router-link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input type="text" v-model="query" placeholder="ex. burger, chicken, etc.">
          <button @click="getSearchResults">Search All Recipes</button>
        </form>
        <div class="form-inline my-2 my-lg-0" v-if="!user._id">
          <router-link class="nav-link" :to="{name: 'Auth'}">login/register</router-link>
        </div>
        <div class="user form-inline my-2 my-lg-0" v-else>{{user.userName}}
        </div>
        <button v-if="user._id" @click="logout">Log Out</button>
      </div>
    </nav>
  </div>
</template>

<script>
  import router from '../router'
  export default {
    name: 'NavBar',
    data() {
      return {
        query: ''
      }
    },
    computed: {
      user() {
        return this.$store.state.user
      }
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
      },
      getSearchResults() {
        this.$store.dispatch('getSearchResults', this.query)
      },
    }
  }

</script>

<style>
  .animateBar{
  -vendor-animation-duration: 5s;
  -vendor-animation-delay: 10s;
  -vendor-animation-iteration-count: infinite;
}
/* The navigation bar */
.navbar {
    overflow: hidden;
    background-color: #333;
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
}

/* Links inside the navbar */
.navbar a {
    float: left;
    display: block;
    color: #000000;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

/* Change background on mouse-over */
.navbar a:hover {
    background: rgb(153, 206, 122);
    color: black;
}

/* Main content */
/* .main {
    margin-top: 30px; /* Add a top margin to avoid content overlay */
/* } */ 

  .navbar {
    background-color: #e5e8d8
  }
.logo{
  border-radius: 5rem;
  border: rgb(110, 110, 110) solid 2px;
  height: 3rem;
  width: 3rem;
  background: #e5e8d8;
  margin-right: 1rem
}
.user{
  margin-left: 3rem;
  margin-right: 1rem
}
</style>
