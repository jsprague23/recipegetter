import Vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import Router from 'vue-router'
import Home from '@/components/Home'
import SearchResults from '@/components/SearchResults'
import RecipeDetails from '@/components/RecipeDetails'
import ProfilePage from '@/components/ProfilePage'
import GeneralSearchResults from '@/components/GeneralSearchResults'
import Auth from '@/components/Auth'

Vue.use(Router)

// var api <-- Guys, what is this?

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
      path: '/RecipeDetails/:spoonId',
      name: 'RecipeDetails',
      props: true,
      component: RecipeDetails,
    },
    {
    path: '/ProfilePage',
    name: 'ProfilePage',
    component: ProfilePage
    },
    {
      path: '/GeneralSearchResults',
      name: 'GeneralSearchResults',
      component: GeneralSearchResults
    },
    {
      path: '/Auth',
      name: 'Auth',
      component: Auth
    }
  ]
})
