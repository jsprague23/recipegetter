import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import Router from 'vue-router'
import Home from '@/components/Home'
import SearchResults from '@/components/SearchResults'
import RecipeDetails from '@/components/RecipeDetails'

Vue.use(Router)

var api

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/SearchResults',
      name: 'SearchResults',
      component: SearchResults
    },
    {
      path: '/RecipeDetails',
      name: 'RecipeDetails',
      component: RecipeDetails
    }
  ]
})
