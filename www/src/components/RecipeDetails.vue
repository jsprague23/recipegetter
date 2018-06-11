<template>
    <div class="RecipeDetails container-fluid">
        <div class="row">
            <div class="col-12">
                <h1>{{activeRecipe.title}}</h1>
                <img :src="activeRecipe.image">
            </div>
            <div class="col-3"></div>
            <div class="col-6 text-center">
                {{activeRecipe.instructions}}

                <div v-for="item in activeRecipe.ingredients">
                    {{item.amount}} {{item.unit}} {{item.name}}
                </div>
                <button @click="addToFavorites">Favorite</button>
                <div class="col-3"></div>
            </div>
        </div>



    </div>
</template>


<script>
    import router from '../router'
    export default {
        name: 'RecipeDetails',
        components: {},
        mounted() {
            this.$store.dispatch('getRecipeDetails', this.$route.params.spoonId)
        },
        data() {
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
        computed: {
            activeRecipe() {
                return this.$store.state.activeRecipe
            }
        },
        methods: {
            addToFavorites(){
        this.$store.dispatch('addToFavorites', this.activeRecipe)
      },
        }

    }
</script>


<style scoped>
</style>