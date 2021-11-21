<template>

<div>
    <h1>What do you want to report?</h1>
    <TileMenu :menuItems="menu" />
</div> 

</template>

<script>



export default {
   
  
  data () {
      return {
          menu: [
                {text: 'Roads', link: 'roads'},
                {text: 'Footways', link: '/categories/footways'},
                {text: 'Drainage', link: 'drainage'},
                {text: 'Vegetation', link: 'vegetation'}
                ]

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