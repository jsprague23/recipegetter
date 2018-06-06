<template>
  <div class="home-page">
    <h1>{{user}}'s Corner</h1>   
      <ul class="myRecipes">
      <h3>My Recipes</h3>
      <li class="myRecipes" v-for="board in boards"><router-link :to="{name: 'Board', params:{id:board._id}}">{{board.title}}</router-link></li>
    </ul>
    <ul class="myRecipes">
      <h3>My Pantry</h3>
      <li class="myRecipes" v-for="board in boards"><router-link :to="{name: 'Board', params:{id:board._id}}">{{board.title}}</router-link></li>
    </ul>
    <ul class="myRecipes">
      <h3>Browsing History</h3>
      <li class="myRecipes" v-for="board in boards"><router-link :to="{name: 'Board', params:{id:board._id}}">{{board.title}}</router-link></li>
    </ul>
    
  </div>
</template>

<script>
  export default {
    name: '',
    components: {},
    mounted() {
      if (!this.$store.state.user._id) {
        router.push({ name: 'login' })
      }
      this.$store.dispatch('getBoards', this.$store.state.user._id)
    },
      computed: {
      boards(){
        return this.$store.state.boards
      }
    },
    methods: {}
  }
</script>