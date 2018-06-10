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
                <div class="col-3"></div>
            </div>
        </div>



    </div>
</template>


<script>
    import router from '../router'
    export default {
        name: 'RecipeDetails',
        props: ['GeneralSearchResults'],
        components: {},
        mounted() {
            this.$store.dispatch('getRecipeDetails', this.activeRecipe.spoonId)
        },
        data() {
            return {
                     
            }
        },
        computed: {
            recipes() {
                return this.$store.state.recipes
            }
        },
        methods: {}

    }
</script>


<style scoped>
</style>