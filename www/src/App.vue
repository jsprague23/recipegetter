<template>
  <div role="navigation" id="app">
     <navBar>This is our navBar...but i don't really have a navbar here yet..?style?</navBar>
    <router-view/>
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

</style>
