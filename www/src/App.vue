<template>
  <div role="navigation" id="app">
     <navBar>This is our navBar...but i don't really have a navbar here yet..?ugh?</navBar>
  
   <div><img src="./assets/logo.png">
    <router-view/>
  </div>
     </div>
</template>

<script>
export default {
  name: "App"
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
