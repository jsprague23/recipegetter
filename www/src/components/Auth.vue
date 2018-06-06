<template>
  <div class="auth">
    <div v-if="!logister">

      <form @submit.prevent="login" >
        <input type="text" placeholder="Email" v-model="log.email">
        <input type="password" v-model="log.password">
        <button type="submit">login</button>
      </form>
      <button @click="regLog">register</button>
    </div>
   <div v-else>  

     <form @submit.prevent="userRegister" >
       <input type="text" placeholder="Email">
       <input type="text" placeholder="userName">
       <input type="password">
       <button type="submit">register</button>
      </form>
      <button @click="regLog">login</button>
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
      regLog(){
        this.logister = !this.logister
      }

    }
  }

</script>

<style>


</style>
