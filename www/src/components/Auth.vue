<template>
  <div class="auth">
    <div v-if="!logister">

      <form @submit.prevent="login" >
        <input type="text" placeholder="Email" v-model="log.email">
        <input type="password" v-model="log.password">
        <button type="submit">login</button>
      </form>
      <p @click="regLog">Don't have a username? Register here</p>
    </div>
   <div v-else>  

     <form @submit.prevent="userRegister" >
       <input type="text" placeholder="Email" v-model="newUser.email">
       <input type="text" placeholder="userName" v-model="newUser.userName">
       <input type="password" placeholder="password" v-model="newUser.password">
       <button type="submit">register</button>
      </form>
      <p @click="regLog">Already a user? Login Here!</p>
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
p:hover{
        cursor: pointer;
        color: blue;
        text-decoration: underline;
    }

</style>
