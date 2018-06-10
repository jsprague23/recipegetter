<template>
  <div class="ProfilePage">
this is my profile page
<favorites></favorites>
  </div>
</template>

<script>
  import Favorites from './Favorites'
  export default {
    name: 'ProfilePage',
    data() {
      return {

      }
    },
    components: {
      Favorites
    },
    computed: {},
    methods: {}
  }

</script>

<style>


</style>
