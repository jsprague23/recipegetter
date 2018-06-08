<template>
  <div class="favorites">

  </div>
</template>

<script>
  export default {
    name: 'favorites',
    data() {
      return {

      }
    },
    computed: {
      favorites(){
      return this.$store.state.favorites
      }
      
    },
    methods: {}
  }

</script>

<style>


</style>
