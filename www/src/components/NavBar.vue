<template>
  <div class="NavBar">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
       <router-link class="nav-link" :to="{name: 'Home'}"> Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'ProfilePage'}">Profile</router-link>
      </li>
    </ul>
<div class="form-inline my-2 my-lg-0" v-if="!user._id"><router-link class="nav-link" :to="{name: 'Auth'}">login/register
    </router-link></div>

    

    <div class="form-inline my-2 my-lg-0" v-else > username: {{user.userName}}<button @click="logout">Log Out</button></div>
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

      }
    },
    computed: {
      user(){
        return this.$store.state.user
      }
    },
    methods: {
      logout(){
        this.$store.dispatch('logout')
      }
    }
  }

</script>

<style>


</style>
