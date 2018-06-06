import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//khanbhan.herokuapp.com/' : '//localhost:3000/';

vue.use(vuex)

var api = axios.create({
  baseURL: baseUrl + 'api/',
  timeout: 3000,
  withCredentials: true
})
var auth = axios.create({
  baseURL: baseUrl + 'auth/',
  timeout: 3000,
  withCredentials: true
})

export default new vuex.Store({
  state: {
    user: {},
    
  },
  mutations: {
    setPantry(state, pantry){
      state.pantry = pantry
    }
  },
  actions: {

    //AUTH STUFF

    login({ commit, dispatch }, loginCredentials) {
      auth.post('login', loginCredentials)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'Home' })
        })
        .catch(res => {
          console.log(res.data)
        })
    },
    logout({ commit, dispatch }, deleteCredentials) {
      auth.delete('logout', deleteCredentials)
        .then(res => {
          commit('delUser', res.data)
          router.push({ name: 'login' })
        })
        .catch(res => {
          console.log(res.data)
        })
    },
    register({ commit, dispatch }, registerCredentials) {
      auth.post('register', registerCredentials)
        .then(res => {
          commit('regUser', res.data)
          router.push({ name: 'Home' })
        })
        .catch(res => {
          console.log(res.data)
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('/authenticate')
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'Home' })
        })
        .catch(res => {
          console.log(res.data)
        })
    },
    
    //APP STUFF
      postGrocery({commit,dispatch}, foodItem){
        api.post('/thepantry', foodItem)
        .then(res=>{
          dispatch("getGroceries")
        })
        .catch(res=>{
          alert("err")
        })
      },
      getGroceries({commit, dispatch}, user){
        api.get('/myPantry/'+ user)
      .then(res=>{
        commit("setPantry", res.data)
      })
    },
  }
})