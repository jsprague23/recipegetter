<template>
  <div class="NavBar">
    <nav class="navbar navbar-expand-lg navbar-light">
      <img class="logo animateBar animated rollIn" src="../../foodLogo.png" alt="">
      <a class="navbar-brand animated tada" href="#">FoodyMcFoodFace</a>
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
        <button @click="logout">Log Out</button>
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

  #animateBar {
  -vendor-animation-duration: 3s;
  -vendor-animation-delay: 2s;
  -vendor-animation-iteration-count: infinite;
}
  .navbar {
    background-color: #e5e8d8
  }

  .logo {
    border-radius: 5rem;
    border: rgb(110, 110, 110) solid 2px;
    height: 3rem;
    width: 3rem;
    background: #e5e8d8;
    filter: hue-rotate(90deg)
  }
</style>
