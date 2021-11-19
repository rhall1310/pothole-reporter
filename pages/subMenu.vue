<template>
<div>
  <h1>{{this.$store.state.defect.category}}</h1>
  <TileButton />
  <Map/>
</div>  
</template>

<script>
import tileButton from '../components/tileButton.vue'

export default {
  components: { tileButton },

  computed: {
      defects () {
          return this.$store.state.defectTypes.list
      }
  },
  
  data () {
      return {
          

      }
  },
}  
</script>

<style>

</style>