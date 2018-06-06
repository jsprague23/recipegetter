import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import router from "../router"


vue.use(vuex)

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//herokuapp.com/' : '//localhost:3000';
var foodApi = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes'

var genRecipeSearch = axios.create({
    headers: {
        "X-Mashape-Key" : "WUU1lLesMimshTMLlxjAtkQGQMk6p1JQPB5jsnLPJCHfNJbugE"
    },
    baseURL: foodApi + '/search?query=',
    timeout: 3000
})
var ingredientRecipeSearch = axios.create({
    headers: {
        "X-Mashape-Key" : "WUU1lLesMimshTMLlxjAtkQGQMk6p1JQPB5jsnLPJCHfNJbugE"
    },
    baseURL: foodApi + '/findByIngredients?fillIngredients=false&ingredients=',
    timeout: 3000
})
var recipeDetailsSearch = axios.create({
    headers: {
        "X-Mashape-Key" : "WUU1lLesMimshTMLlxjAtkQGQMk6p1JQPB5jsnLPJCHfNJbugE"
    },
    baseURL: foodApi,
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

//suggested by darryl
// var ingredients =""
// var url = 'findbyingred'+ingredients+'limit=true'

export default new vuex.Store({
    state: {
        user: {},
        recipes: [],
        activeRecipe: {},
        groceryList: [],
        searchHistory: [],
        favorites: [],
        pantry: []

    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setRecipes(state, recipes) {
            console.log(recipes)
            state.recipes = recipes
        },
        setGroceryList(state, groceryList) {
            state.groceryList = groceryList
        },
        setActiveRecipe(state, activeRecipe) {
            state.activeRecipe = activeRecipe
        },
        setPantry(state, pantry) {
            state.pantry = pantry
        }
    },

    actions: {

        getSearchIngredients({dispatch, commit}, query) {
            ingredientRecipeSearch.get(query + '&number=10'+ '&limitLicense=false' + '&ranking=1')
            .then(res=>{ 
                console.log(res)
                var recipes = res.data.map(recipe => {
                    return {
                        title: recipe.title,
                        image: recipe.image,
                        // readyInMinutes: recipe.readyInMinutes,
                        // sourceUrl: recipe.sourceUrl,
                        // instructions: recipe.instructions,
                        // ingredients: recipe.extendedIngredients,
                        spoonId: recipe.id
                    }
                })
                commit('setRecipes', res.data)
            })
        },
        

        // RecipesGeneral({ dispatch, commit }, query) {
        //     genRecipeSearch.get(query)
        //         .then(res => {
        //             var foodList = res.data.results.map(recipe => {
        //                 return {
        //                     title: recipe.title,
        //                     image: recipe.image,
        //                     minutesReady: recipe.readyInMinutes,
        //                     sourceUrl: recipe.source.Url,
        //                     instructions: recipe.instructions,
        //                     ingredients: recipe.extendedIngredients,
        //                     spoonId: recipe.id
        //                 }
        //             })
        //         })
        // },
        getSearchResults({dispatch, commit}, query) {
            genRecipeSearch.get(query + '&number=1')
            .then(res=>{
                var recipes = res.data.results.map(recipe => {
                    return {
                        title: recipe.title,
                        image: recipe.image,
                        readyInMinutes: recipe.readyInMinutes,
                        sourceUrl: recipe.sourceUrl,
                        instructions: recipe.instructions,
                        ingredients: recipe.extendedIngredients,
                        spoonId: recipe.id
                    }
                })
                console.log(res)
                commit('setRecipes', res.data.results)
            })
        },
        setActiveRecipe({dispatch, commit, state}, recipe){
            commit('setActiveRecipe', this.recipe)
            console.log(this.recipe)

        },
        getRecipeDetails({dispatch, commit}, id){
            recipeDetailsSearch.get(id + '/information&includeNutrition=false')
            .then(res=>{
                var recipes = res.data.results.map(recipe => {
                    return {
                        title: recipe.title,
                        image: recipe.image,
                        readyInMinutes: recipe.readyInMinutes,
                        sourceUrl: recipe.sourceUrl,
                        instructions: recipe.instructions,
                        ingredients: recipe.extendedIngredients,
                        spoonId: recipe.id
                    }
                })
                console.log(res)
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
        },
        authenticate({ commit, dispatch }) {
            api.get('/authenticate')
                .then(res => {
                    commit('setUser', res.data)
                    router.push({ name: 'Home' })
                })
                .catch(res => {
                    console.log(res.data)
                })
        },
        postGrocery({ commit, dispatch }, foodItem) {
            api.post('/thepantry', foodItem)
                .then(res => {
                    dispatch("getGroceries")
                })
                .catch(res => {
                    alert("err")
                })
        },
        getGroceries({ commit, dispatch }, user) {
            api.get('/myPantry/' + user)
                .then(res => {
                    commit("setPantry", res.data)
                })
        }
    }
})
