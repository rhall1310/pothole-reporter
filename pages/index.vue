<template>

<div>
    <h1>What do you want to report?</h1>
    <TileMenu :menuItems="menu" :isLast="false" :link="'subMenu'"  />
</div> 

</template>

<script>



export default {
   
  
  data () {
      return {
          menu: this.$store.state.defectTypes.list

      }
  },
 
}
</script>

<style>

h1 {
    margin: auto;
    text-align: center;
    padding: 1em;
}






</style>