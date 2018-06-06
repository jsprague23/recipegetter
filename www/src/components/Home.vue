<template>
<div class="container">
  <div class="Home">
    <h1>Food in Pantry? You could cook this!! </h1>
    <input type="text" placeholder="Enter food items on hand">
    <button class="button button1"><button type="Submit">Go</button></button>
  </div>
  <div class="row">
   <div class="NavBar">
            <h3>List</h3>
            {{music}}
            <ol>
              <li v-for="(item,index) in playlist" :key="index">
                  <router-link :to="{name:'helloWorld', params: {id:index}}">
                  <p>{{item.song_name}}</p></router-link>
                  <p>artist: {{item.artist}}</p>
                  <button @click="removefromlist(index)">Remove Song</button>
              </li>
            </ol>
        </div>
        </div>
        </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Input what you have, i will tell you what to cook!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 2px 4px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
}
.button:hover {
    background-color: #4CAF50; /* Green */
    color: white;
}
.button1 {
    background-color: white; 
    color: black; 
    border: 2px solid rgb(109, 179, 111);
}

h1, h2 {
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
