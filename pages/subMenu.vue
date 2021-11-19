<template>
<div>
  <h1>{{this.$store.state.defect.categories.category}}</h1>
  <TileMenu :menuItems="menu" :isMain="false" :link="'form'" />
  <Map/>
</div>  
</template>

<script>
export default {
   
  
  data () {
      return {
          menu: this.$store.state.defect.categories.subCategories

      }
  },

 
}
 
</script>

<style>

</style>