<template>
    <div class="RecipeDetails">
       <h1>Recipe details will go here</h1>
{{activeRecipe.title}}

<div v-for="item in activeRecipe.ingredients">
    {{item.name}}
</div>
</div>
</template>


<script>
  import router from '../router'
  export default {
    name: 'RecipeDetails',
    components:{},
    mounted(){
        this.$store.dispatch('getRecipeDetails', this.$route.params.spoonId)
    },
    data(){
        return {
            recipe: {
               title: '',
               image: '',
               minutesReady: '',
               sourceUrl: '',
               instructions: '',
               ingredients: '',
               spoonId: ''
        },
        }
    },
    computed:{
       activeRecipe(){
           return this.$store.state.activeRecipe
       }
    },
    methods:{}

}
</script>


<style scoped>

</style>