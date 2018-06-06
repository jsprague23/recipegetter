<template>
    <div class="RecipeDetails">
       <h1>Recipe details will go here</h1>

    </div>
</template>


<script>
  import router from '../router'
  export default {
    name: 'RecipeDetails',
    props: ['spoonId'],
    components:{},
    mounted(){
        this.$store.dispatch('getRecipeDetails', this.spoonId)
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