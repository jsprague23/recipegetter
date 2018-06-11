<template>
  <div class="container-fluid">
  <div class="auth">
    <h1 class="logoFont">FoodyMcFoodFace</h1>
    <h5 class="logoFont">Hey! It looks like you're trying to do something that is not allowed without signing in. If you would like full access to all of the recipes and be able to save your favorite recipes so that you can view whenever you want! It's a simple process and wont take much time! </h5>
    <div v-if="!logister">

      <form @submit.prevent="login">
        <input type="text" placeholder="Email" v-model="log.email">
        <input type="password" v-model="log.password">
        <button type="submit">login</button>
      </form>
      <button @click="regLog">register</button>
    </div>
   <div v-else>  

     <form @submit.prevent="userRegister" >
       <input type="text" placeholder="Email" v-model="newUser.email">
       <input type="text" placeholder="userName" v-model="newUser.userName">
       <input type="password" placeholder="password" v-model="newUser.password">
       <button type="submit">register</button>
      </form>
      <button @click="regLog">login</button>
   </div>
  </div>
    
  </div>
</template>

<script>
  export default {
    name: 'auth',
    mounted(){
this.$store.dispatch('authenticate')
    },
    data() {
      return {
        logister: false,
        log:{
          email: '',
          password: '',
        },
        newUser:{
          userName: '',
          email: '',
          password: '',
        }

      }
    },
    computed: {
      currentUser(){
        return this.$store.state.user
      }
    },
    methods: {
      login(){
        this.$store.dispatch('login', this.log)
      },
      userRegister(){
        this.$store.dispatch('register', this.newUser)
      },
      regLog(){ //toggle between register and login
        this.logister = !this.logister
      }

    }
  }

</script>

<style>
.auth{
  text-align: center;
  background: #cfe6ad;
  height: 95.8vh;
  
  
}
.container-fluid{
  background: #e5e8d8
}

.logoFont{
  font-family: 'VT323', monospace;

}

</style>
