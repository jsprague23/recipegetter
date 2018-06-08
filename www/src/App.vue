<template>
  <div role="navigation" id="app">
     <navBar>This is our navBar...but i don't really have a navbar here yet..?style?</navBar>
  
   <div><img src="./assets/logo.png">
    <router-view/>
  </div>
     </div>
</template>

<script>
import navBar from "./components/NavBar"

export default {
  name: "App", 
  components: {
    navBar
  },
  mounted(){
    this.$store.dispatch('authenticate')
  },
  data(){
    return{}

  },
  computed: {

  },
  methods: {

  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
