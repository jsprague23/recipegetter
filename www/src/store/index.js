import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"


vue.use(vuex)

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//herokuapp.com/' : '//localhost:3000';
var foodApi = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes'

var genRecipeSearch = axios.create({
    baseURL: foodApi + '/search?query=',
    timeout: 3000
})
var ingredientRecipeSearch = axios.create({
    baseURL: foodApi + '/findByIngredient?ingredients=',
    timeout: 3000
})
var api = axios.create({
    baseURL: baseUrl,
    timeout: 3000,
    withCredentials: true
})
var auth = axios.create({
    baseURL: baseUrl + "/auth",
    timeout: 3000,
    withCredentials: true
})

export default new vuex.Store({
    state: {
        user: {},
        recipes: [],
        activeRecipe: {},
        groceryList: [],
        searchHistory: [],
        favorites: []

    },
    mutations: {
        setUser(state,user){
            state.user=user
        },
        setRecipes(state, recipes){
            state.recipes = recipes
        },
        setGroceryList(state,groceryList){
            state.groceryList=groceryList
        },
        setActiveRecipe(state, activeRecipe){
            state.activeRecipe = activeRecipe
        }
    },

    actions: {

        getRecipes({dispatch, commit}, query){
            spoonacularApi.get(query)
            .then(res=>{
                var foodList = res.data.results.map(recipe=>{
                    return{
                        title: recipe.title,
                        image: recipe.image, 
                        minutesReady: recipe.readyInMinutes,  
                        sourceUrl: recipe.source.Url, 
                        instructions: recipe.instructions,
                        ingredients: recipe.extendedIngredients,
                        id : recipe.id  
                    }
                })
            })
        },

        //AUTH STUFF
        login({ commit, dispatch }, loginCredentials) {
            auth.post('/login', loginCredentials)
                .then(res => {
                    console.log("successfully logged in!")
                    commit('setUser', res.data)
                    router.push({ name: 'Home' })
                })
        },
        logout({ commit, dispatch }) {
            auth.delete('/logout')
                .then(res => {
                    console.log("Successfully logged out!")
                    commit('deleteUser')
                    //   router.push({name: 'Login'})
                })
        },
        register({ commit, dispatch }, userData) {
            auth.post('/register', userData)
                .then(res => {
                    console.log("Registration Successful")
                      router.push({ name: 'Home' }) // I changed this to just change the component 
                })
        }
    }
})